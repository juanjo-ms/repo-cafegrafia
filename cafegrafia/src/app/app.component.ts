import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cafegrafia';

  mostrarInformacionGrupo: boolean = false;
  seccionVisible = false;
  menuAbierto: boolean = false;
  modalAbierto: boolean = false;
selectedEspecialidad: any = null;
 
   especialidades = [
    {
      nom: "Pastel de Chocolate",
      img: 'assets/images/pastel.png',
      descripcion: 'Pastel individual de chocolate con centro líquido'
    },
    {
      nom: "Cafe Frappé",
      img: 'assets/images/versoHelado.png',
      descripcion: 'Frappé con vainilla y cacao, servido en vaso decorado con tinta de chocolate'
    },

    {
      nom: "Champurrada Artesal",
      img: 'assets/images/champurrada.png',
      descripcion: 'Crujientes. Un pan tradicional perfecto para acompañar tu café y sumergirte en una buena lectura.'
    },
        {
      nom: "Tarjeta Literaria",
      img: 'assets/images/tarjetaCafe.png',
      descripcion: 'En cada pedido, llévate una tarjeta con una recomendación literaria.'
    },
  ];

  abrirModal(especialidad: any): void {
  this.selectedEspecialidad = especialidad;
  this.modalAbierto = true;
}

cerrarModal(): void {
  this.modalAbierto = false;
  this.selectedEspecialidad = null;
}

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

   checkVisibility() {
    const element = document.getElementById('especialidades');
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      this.seccionVisible = isVisible;
    }
  }

  mostrarGrupo(): void {
    this.mostrarInformacionGrupo = true;
  }

  mostrarMenu(): void {
    this.menuAbierto = true;
  }

  cerrarMensaje(): void {
    this.mostrarInformacionGrupo = false;
  }
}
