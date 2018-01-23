import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { Station } from '../station';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('searchState', [
      state('inactive', style({
        width: '0px',
        display: 'none'
      })),
      state('active', style({
        width: '200px',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))

    ])
  ]
})

export class SearchComponent implements OnInit {
  @Input() stations: Station[];
  results: Station[];

  constructor() { }
  state: string = 'inactive';

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
    this.resetSearch();
  }

  resetSearch(): void {
    if (this.results)
      this.results.length = 0;
  }

  search(term: string): void {
    const termToUpper = term.toUpperCase();
    if (!this.stations || term === '') {
      this.results.length = 0;
      return;
    }
    this.results = this.stations.filter(station => {
      return station.name.includes(termToUpper)
    }).slice(0, 10);
  }


  select(station: Station) {
   
  }



  ngOnInit() {

  }

}
