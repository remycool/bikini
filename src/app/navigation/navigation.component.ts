import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() city: string;
  @Input() link: string;
  @Input() country: any;
  title:string;
  constructor() { }

  ngOnInit() {

    var country ='';
    var city= this.city ? ` - ${this.city}` : '';
    if(this.country)
     country = `${this.country.name}`;
    this.title = `${country} ${city}`;
  }

}
