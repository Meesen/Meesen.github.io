import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  show = 1;

  mockups = [{
    path: '../../assets/images/UIUXdoc/login.png',
}, {
  path: '../../assets/images/UIUXdoc/main.png',
}, {
  path: '../../assets/images/UIUXdoc/detail.png',
},{
  path: '../../assets/images/UIUXdoc/filter.png',
}, {
  path: '../../assets/images/UIUXdoc/price.png',
}, {
  path: '../../assets/images/UIUXdoc/payment.png',
},
{
  path: '../../assets/images/UIUXdoc/waitingLine.png',
},
{
  path: '../../assets/images/UIUXdoc/history.png',
}
];

wireframes = [{
  path: '../../assets/images/wireframes/login.png',
}, {
path: '../../assets/images/wireframes/main.png',
}, 
{
path: '../../assets/images/wireframes/filter.png',
}, {
path: '../../assets/images/wireframes/order.png',
},
{
path: '../../assets/images/wireframes/waiting.png',
},
];

draw = [{
  path: '../../assets/images/draw1.png',
}, {
path: '../../assets/images/draw2.png',
}, 

];
changeShow(value: number){
  this.show = value;
}
}
