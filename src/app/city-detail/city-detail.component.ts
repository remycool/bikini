import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Station } from '../station';
import { StationService } from '../station.service';
import { Status } from '../status';
import { CLOSED, CHAQUE_MINUTE } from '../constantes';
import { LocalisationService } from '../localisation.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit, OnDestroy {
  stations: Station[];
  selectedStation: Station;
  bsModalRef: BsModalRef;
  IntervalId: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private stationService: StationService,
    private localisationService: LocalisationService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getStations();
    this.IntervalId = setInterval(() => { this.getStations(); }, CHAQUE_MINUTE);
    this.stationService.selectedStation.subscribe(station => this.selectedStation = station)
  }

  ngOnDestroy() {
    if (this.IntervalId)
      clearInterval(this.IntervalId);
  }

  getStations(): void {
    const city = this.route.snapshot.paramMap.get('name');
    //tri les stations par ordre alphabétique et formate le nom ex= 'XXX-TOTO' => 'TOTO'
    this.stationService.getStations(city)
      .subscribe(stations => {
        stations.forEach(s => {
          s.name = s.name.match(/[^0-9\-]/g).join('').trim();
          if (this.localisationService.currentPosition !== null)
            s.distance = this.localisationService.getDistance(s.position);
        }

        );
        this.stations = stations.sort((a, b) => a.distance - b.distance)
        // this.stations = stations.sort((a, b): number => {
        //   if (a.name < b.name) return -1;
        //   if (a.name > b.name) return 1;
        //   return 0;
        // })
      })
  }

  isOpen(status: Status): string {
    return status == Status.CLOSED ? CLOSED : '';
  }

  getLevelAvailability(station: Station): string {
    const availability: number = station.available_bikes * 100 / station.bike_stands;
    var level: string = '';
    if (availability < 25)
      level = 'badge-danger';
    else {
      if (availability >= 25 && availability < 50)
        level = 'badge-warning';
      else {
        if (availability >= 50)
          level = 'badge-success';
      }
    }
    return level;
  }

  private selectStation(station: Station) {
    this.stationService.actualizeStation(station);
  }

  openStationModal(station: Station, template: TemplateRef<any>) {
    this.selectStation(station);
    this.bsModalRef = this.modalService.show(template);
  }
}
