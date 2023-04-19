import { Component, Input } from '@angular/core';
import { project } from 'src/models/project';

@Component({
  selector: 'app-innovatie',
  templateUrl: './innovatie.component.html',
  styleUrls: ['./innovatie.component.css']
})
export class InnovatieComponent {
  @Input()
  givenProject?: project;
}
