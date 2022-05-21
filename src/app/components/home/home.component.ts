import { Component,OnInit,} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Produtos } from 'src/app/modals/produtos';
import { ProdutosService } from 'src/app/shared/sevicos/servico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  array: Produtos[] = [];
  showNavigationArrows = true;
  images = ['assets/promo1.jpg','assets/logoPromo2.png'];
  onCarrinho: any;
   
  constructor(config: NgbCarouselConfig, private servico:ProdutosService) {
    this.showNavigationArrows = false;
  }

  precoDesconto(produto:Produtos){
    return produto.preco - (produto.preco * produto.desconto)
  }

  onComprar(produto: Produtos) {
    alert("Produto adicionado no carrinho!");
  }
 
 ngOnInit(): void {
   this.array = this.servico.getProdutos();
  }

}
