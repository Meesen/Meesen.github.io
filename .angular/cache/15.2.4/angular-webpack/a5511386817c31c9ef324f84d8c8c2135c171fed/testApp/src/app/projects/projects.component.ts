import { Component, OnInit } from '@angular/core';
import { project } from 'src/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  seminaries: project[];
  innovatie: project[];
  persoonlijkeOntwikkeling: project[];
  extraActiviteiten: project[];

  constructor() {
    this.seminaries = [
      {
        title: "Ordina",
        summary: "Binnen dit seminarie hebben we het gehad over security en privacy awareness. Het was een informatieve sessie over security met betrekking tot scams en hoe ze op te merken. Ook werden we aangeleerd hoe we voorzichtig omgaan met persoonlijke data.",
        duration: "3 uur",
        location: "online",
        img: "ordina.png"
      },
      {
        title: "RCCU",
        summary: "Binnen dit seminarie maakte we kennis met de cybercrime unit politie van België. Binnen dit seminarie zijn we geïnformeerd over digital forensics, cybercrime, cyberpesten, darknet en de opdeling van de RCCU. Ze bespraken hun werkwijze de uitdagingen en de veel voorkomende gevaren.",
        duration: "3 uur",
        location: "online",
        img: "rccu.jpg"
      },
      {
        title: "Brightest: Elastic Search",
        summary: "Binnen dit seminarie zagen we wie brightest waren wat ze doen en wat elastic search is en waarom we het zouden gebruiken. Ze besproken de geschiedenis, de taal en door wie elastic search gemaakt werd. We leerde kennis maken met nodes, sharding, de opbouw van NoSQL documenten, kibana en testing strategieën.",
        duration: "3 uur",
        location: "online",
        img: "brightest.jpg"
      },
      {
        title: "Refleqt: Test automation",
        summary: "Refleqt heeft ons een seminarie gegeven rond test automatisatie, het soort testen en waarom we zouden testen. Er werden onderwerpen besproken als: “continuous delivery”, “behavior driven development (BDD)”, “integrated teams”,” automated vs exploratory testing”,…",
        duration: "3 uur",
        location: "online",
        img: "refleqt.jpg"
      },
      {
        title: "IT Licious: Flutter",
        summary: "IT Licious gaf ons een seminarie rond flutter, een front-end framework met als doel met 1 codebase applicaties te kunnen maken voor zo veel mogelijk platformen, binnen dit seminarie leerde we over de geschiedenis van flutter en hoe we er mee tewerk gaan. We zagen widgets, layouts, “responsiveness”, en “Bloc”.",
        duration: "3 uur",
        location: "PXL Hasselt Elfde-Liniestraat",
        img: "ITLicious.png"
      },
      {
        title: "Harmony Group: the rise of low code",
        summary: "“The rise of low code” ging over de wat low code is en wat de momentele impact hiervan is. Ook lieten ze de voorspelde cijfers van low code systemen zien samen met de voor- en nadelen van low code applicatie. Hierna hebben we onze eigen eerste low code applicatie opgesteld aan de hand van een labo.",
        duration: "3 uur",
        location: "PXL Hasselt Elfde-Liniestraat",
        img: "harmony.png"
      },
      {
        title: "ACA Group: Cloud Native Application on AWS, GitOps in practice",
        summary: "ACA Group heeft ons een introductie opleiding gegeven tot de mogelijkheden van “Cloud Native” applicaties. Welke services er zijn en hoe we hier meer van start kunnen gaan.",
        duration: "3 uur",
        location: "PXL Hasselt Elfde-Liniestraat",
        img: "aca.png"
      },
      {
        title: "IO Belgium: Automated Testing and Quality Assurance",
        summary: "IO Belgium heeft ons laten zien wat de best practices zijn voor het schrijven van testen en het verbeteren van code. Sneller coderen maakt je niet een beter programmeur maar de testbaarheid en kwaliteit van de code wel.",
        duration: "3 uur",
        location: "PXL Hasselt Elfde-Liniestraat",
        img: "io.jpg"
      },
    ];
    this.innovatie = [{
      title: "Innovatie Route UI/UX",
      summary: "Binnen deze innovatie route hebben we een hoop uitleg gekregen over wat er allemaal gaat in het designen van een applicatie. Zo leerde we over design principes die gebruikers onbewust lijden tot gewenste acties. Ook hebben we ons eigen app idee bedachten volledig uitgewerkt tot een volledig prototype.",
      duration: "25 uur",
      location: "PXL Hasselt Elfde-Liniestraat",
      img: "UIUX.png"
    },

    {
      title: "Hackathon PXL ErgoTherapie en PXL-Healthcase",
      summary: "Voor de studenten van ergotherapie en PXL-healthcare zijn we tewerk gegaan met een hackathon voor het helpen van hun project. Er waren twee mogelijke projecten voor uit te kiezen, het designen van een applicatie voor een monitoringsysteem van ouderen zodat vroege symptomen van dimensie kunnen gevonden worden. En een applicatie voor het helpen van studenten met leer/motorieke stoornissen, doormiddel van het digitaliseren van het tekenen van hun meetkunde en wiskunde.",
      duration: "25 uur",
      location: "ISpace Corda Campus Hasselt",
      img: "pxl.png"
    },
    ];
    this.persoonlijkeOntwikkeling = [{
      title: "Brein aan het werk!",
      summary: "Binnen deze sessie is er veel gesproken over het gebruiken van het internet en je telefoon. We hebben hier in onze dag geplande zodat we een beter zicht konden krijgen tot hoeveel tijd we verspillen en wat er overbodig was zodat we efficiënter zouden kunnen werken.",
      duration: "3 uur",
      location: "online",
      img: "pxl.png"
    },
    {
      title: "My team and I",
      summary: "Tijdens deze pop sessie werden er een deel opdrachten rond teamwork opgelegd. Dit waren een reeks moeilijke uitdagingen waar je als team moet samen werken om tot een succesvol einde te komen. Ook zijn er een hoop aspecten van een goed werkend team uitgelegd zodat we voor het IT-project een zo goed mogelijke basis hadden.",
      duration: "3 uur",
      location: "Corda campus",
      img: "pxl.png"
    },
    {
      title: "POPping",
      summary: "Tijdens deze POP-sessie zaten we samen met onze groep van het OLOD Research Project en kregen via spelvorm (met kaarten) een inzicht in onze vaardigheden. ",
      duration: "3 uur",
      location: "online",
      img: "pxl.png"
    },
    {
      title: "Project Week 2Tin",
      summary: "Deze week kregen we meerdere infosessies over het samenwerken in groep. Hieronder kwamen onderwerpen zoals ideeën uitwerken, je LinkedIn profiel opstellen en de jobbeurs.",
      duration: "26 uur",
      location: "PXL Hasselt Elfde-Liniestraat",
      img: "pxl.png"
    },
    
    ];
    this.extraActiviteiten = [{
      title: "Hack the future ",
      summary: "Binnen deze hackathon heb ik meegedaan aan een reeks .net uitdagingen opgesteld door QFrame onder de project naam “deelbezems.net”. Deze hackathon had een thema rond Milieu en natuur, deze hackathon werd gesteund door de Cronos Groep. ",
      duration: "12 uur",
      location: "Handelsbeurs Antwerpen",
      img: "HackTheFuture.png"
    },
    ];
  }

  ngOnInit(): void {
  }



}
