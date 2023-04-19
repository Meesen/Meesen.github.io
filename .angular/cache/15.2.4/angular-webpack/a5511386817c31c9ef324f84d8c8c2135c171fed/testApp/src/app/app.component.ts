import { Component } from '@angular/core';

import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';



  id = "tsparticles";

   /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
   particlesUrl = "http://foo.bar/particles.json";

   /* or the classic JavaScript object */
   particlesOptions = {
       background: {
           color: {
               value: "#262d35",
           },
       },
       fpsLimit: 120,
       interactivity: {
           events: {
               onClick: {
                   enable: false,
                   mode: ClickMode.push,
               },
               onHover: {
                   enable: true,
                   mode: HoverMode.repulse,
               },
               resize: true,
           },
           modes: {
               push: {
                   quantity: 1,
               },
               repulse: {
                   distance: 100,
                   duration: 0.3,
               },
           },
       },
       particles: {
           color: {
               value: "#f2aa4c",
           },
           links: {
               color: "#f2aa4c",
               distance: 150,
               enable: true,
               opacity: 0.5,
               width: 1,
           },
           collisions: {
               enable: true,
           },
           move: {
               direction: MoveDirection.none,
               enable: true,
               outModes: {
                   default: OutMode.bounce,
               },
               random: true,
               speed: 0.8,
               straight: true,
           },
           number: {
               density: {
                   enable: true,
                   area: 800,
               },
               value: 100,
           },
           opacity: {
               value: 0.75,
           },
           shape: {
               type: "circle",
           },
           size: {
               value: { min: 1, max: 7 },
           },
       },
       detectRetina: false,
   };
 
   particlesLoaded(container: Container): void {
       console.log(container);
   }
 
   async particlesInit(engine: Engine): Promise<void> {
       console.log(engine);
 
       // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
       // starting from v2 you can add only the features you need reducing the bundle size
       await loadFull(engine);
   }


 
}
