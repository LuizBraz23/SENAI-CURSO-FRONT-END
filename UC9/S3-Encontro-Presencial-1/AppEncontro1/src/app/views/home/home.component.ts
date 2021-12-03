import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;

  ClassToDiv = {};

  constructor() {

      this.ClassToDiv = {
        "text-success": true
      }

   }

  ngOnInit(): void {

      this.titulo = "Este é meu Titulo";
      this.texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt quis, magni quo commodi sit nesciunt nemo quod voluptatum eius nostrum cupiditate vitae, possimus enim doloremque ut illo voluptates quia?"

  }

}
