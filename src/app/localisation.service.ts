import { Injectable } from '@angular/core';
import { navigationCancelingError } from '@angular/router/src/shared';
import { Position } from './position';

@Injectable()
export class LocalisationService {

  constructor() { }

  currentPosition: Position = new Position();
  

  localize(): void {

    navigator.geolocation.getCurrentPosition(position => {
      this.currentPosition.lat = position.coords.latitude;
      this.currentPosition.lng = position.coords.longitude;
    });
  }

  getDistance(position: Position): number {
    const rayon: number = 6366; //km
    var resultat: number = 0;
    if (this.currentPosition !== null && position !== null)
      resultat = (rayon * Math.acos(Math.cos(this.radians(this.currentPosition.lat)) * Math.cos(this.radians(position.lat)) * Math.cos(this.radians(position.lng) - this.radians(this.currentPosition.lng)) + Math.sin(this.radians(this.currentPosition.lat)) * Math.sin(this.radians(position.lat))));
    return   +resultat.toFixed(3);
  }

  private radians(degrees): number {
    return degrees * Math.PI / 180;
  };
}
