import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { BarraPesquisaComponent } from '../barra-pesquisa/barra-pesquisa.component';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhoService: CarrinhoService,
  ) { }

  ngOnInit(): void {
  }

}
