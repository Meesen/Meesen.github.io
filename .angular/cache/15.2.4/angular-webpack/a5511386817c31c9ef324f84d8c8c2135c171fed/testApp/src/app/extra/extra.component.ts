import { Component, Input } from '@angular/core';
import { project } from 'src/models/project';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent {
  @Input()
  givenProject?: project;
}
