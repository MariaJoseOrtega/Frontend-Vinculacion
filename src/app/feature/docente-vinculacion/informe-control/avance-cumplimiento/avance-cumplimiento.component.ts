import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avance-cumplimiento',
  templateUrl: './avance-cumplimiento.component.html',
  styleUrls: ['./avance-cumplimiento.component.css']
})
export class AvanceCumplimientoComponent implements OnInit {

  constructor(
    // private avanceCumplimientoHttpService:AvanceCumplimientoHttpService
  ) { }

  showModal = false;
  showModal2 = false;
  showModal3 = false;


  toggleModal(){
    this.showModal = !this.showModal;
  }
  toggleModal2(){
    this.showModal2 = !this.showModal2;
  }

  toggleModal3(){
    this.showModal3 = !this.showModal3;
  }




  // avance: AvanceCumplimiento = [4];


  esvacio:Boolean=false ;


  ngOnInit(): void {
    // this.findAll();
    this.esvacio=false;

  }

  save():void{


    // for(let avance1 of this.avance){
    //    if (avance1.avance==''){

    //     this.esvacio=true;
        
    //    }else{
    //     this.avanceCumplimientoHttpService.save(avance1).subscribe()
    //    }

    // }
    }






  public clicks(){
    var bool=confirm("Seguro que quiere agirnar el tutor estudiante?");
    if(bool){
      alert("Se asigni el tutor al estudiante");
    }else{
      alert("cancelo la solicitud");
    }
  };
}
