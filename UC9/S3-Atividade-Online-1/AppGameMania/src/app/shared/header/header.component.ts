import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        /* Início script para o menu */
  
      const btnMobile:any = document.getElementById('btn-mobile');
      
      function toggleMenu(event:any ){
          if(event.type === 'touchstart') event.preventDefault();
          const nav:any = document.getElementById('nav');
          nav.classList.toggle('active');
          const active:any = nav.classList.contains('active');
          event.currentTarget.setAttribute('aria-expand', active);
          if (active){
              event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
          }else{
              event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
          }
      }
      
      btnMobile.addEventListener('click', toggleMenu);
      btnMobile.addEventListener('touchstart', toggleMenu);
      
      
      
      /* Fim script para o menu */
      
    
  }

}
