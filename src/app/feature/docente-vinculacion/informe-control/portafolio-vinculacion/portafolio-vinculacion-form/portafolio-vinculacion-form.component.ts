import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio-vinculacion-form',
  templateUrl: './portafolio-vinculacion-form.component.html',
  styleUrls: ['./portafolio-vinculacion-form.component.css']
})
export class PortafolioVinculacionFormComponent {
  showModal = false;
  showModal2 = false;

  toggleModal(){
    this.showModal = !this.showModal;
  }
}
