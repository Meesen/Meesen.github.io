import { Component, Input } from '@angular/core';
import { project } from 'src/models/project';


@Component({
  selector: 'app-EventCard',
  templateUrl: './eventCard.component.html',
  styleUrls: ['./eventCard.component.css']
})
export class EventCardComponent {
  @Input()
  givenProject?: project;
  constructor(){
  }
}