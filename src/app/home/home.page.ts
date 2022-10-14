import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public photos = [];


  constructor() {

    this.photos = [
      {
        name: "Foto 1",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://picsum.photos/id/237/200/300"
      },
      {

          name: "Foto 2",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          url: "https://picsum.photos/id/238/200/300"

      },
      {
        name: "Foto 3",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://picsum.photos/id/239/200/300"
      }
    ]
  }

}
