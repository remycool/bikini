import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() city: string;
  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

}
