import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,
  ],
  template: `
  <div class="listings-container">
    <div class="listing">
      <img class="listing-photo" src="/assets/florianopolis.jpg" >
      <h2 class="listing-heading">Florianópolis SC</h2>
      <p class="listing-location">Capital de Santa Catarina </p>
    </div>
    <div class="listing">
      <img class="listing-photo" src="/assets/bonito.JPG" >
      <h2 class="listing-heading">Bonito MS</h2>
      <p class="listing-location">Municipio no Mato Grosso do Sul</p>
    </div>
    <div class="listing">
      <img class="listing-photo" src="/assets/Natal.jpg">
      <h2 class="listing-heading">Natal</h2>
      <p class="listing-location">Municipio no Rio Grande do norte</p>
    </div>
  </div>

    `,

  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}
