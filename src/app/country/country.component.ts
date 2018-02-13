import { Component, TemplateRef, Input } from '@angular/core';
import { Country } from '../country';
import { City } from '../city';
import { TS } from '../../../../node_modules/typescript-linq/TS';
import { CountryService } from '../country.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgXCookies } from 'ngx-cookies';
import { CityService } from '../city.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  @Input() currentCountry;
  contracts: City[];
  countries: Country[];
  result: any[];
  bsModalRef: BsModalRef;
  countrySelected: string;

  constructor(
    private countryService: CountryService,
    private cityService: CityService,
    private modalService: BsModalService) { }

  getContracts(): void {
    this.cityService.getCities()
      .subscribe(
      c => {
        this.contracts = TS.Linq.Extensions
          .distinct(c, (x: City, y: City) => x.country_code === y.country_code)
          .toArray();
          this.countries = this.getCountries();
          this.joinResults();
      });
  }

  getCountries(): Country[] {
   return this.countryService.getCountries();
  }

  joinResults(): void {
    this.result = TS.Linq.Extensions.join(
      this.countries,
      this.contracts,
      country => country.alpha2Code,
      contract => contract.country_code,
      (country, contract) => {
        if (country.alpha2Code === contract.country_code)
          return country;
      })
      .toArray();
  }

  openModal(template: TemplateRef<any>): void {
    this.getContracts();
    this.getCountries();
    this.bsModalRef = this.modalService.show(template);
  }

  saveCountry(name: string, alphaCode: string): void {
    var country = JSON.stringify({
      name: name,
      alpha2Code: alphaCode
    });
    NgXCookies.setCookie("country", country, 365, 'days');
  }

}
