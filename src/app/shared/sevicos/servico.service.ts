import { Injectable } from '@angular/core';
import { CategoriaProduto, Produtos } from 'src/app/modals/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
    private produtos: Produtos[] = [
    {
      imagem: "assets/res.png",
      nomeDoProduto:"Resident Evil 2",
      descricao: "Resident Evil 2, Jogo físico e para download.",
      preco: 249.00,
      emPromocao: true,
      desconto: 0.2,
      categoria:CategoriaProduto.JOGOS
    },
    {
      imagem: "assets/xbox.png",
      nomeDoProduto:"Xbox 360",
      descricao: "um dos melhores consoles da Microsoft com capacidade de 500GB de mémoria, versão FAT",
      preco: 500.00,
      emPromocao: true,
      desconto: 0.1,
      categoria:CategoriaProduto.CONSOLES
    },
    {
      imagem: "assets/Acessorios.png",
      nomeDoProduto:"Controle ps4",
      descricao: "Controle original playstation 4, cor preta o melhor que ta tendo",
      preco: 249.00,
      emPromocao: true,
      desconto: 0.2,
      categoria:CategoriaProduto.ACESSORIOS
    },
    {
      imagem: "assets/colecionaveis.png",
      nomeDoProduto:"Playstation 1",
      descricao: "Ítem de colecionador, playstation 1 em ótimo estado",
      preco: 1000.00,
      emPromocao: true,
      desconto: 0.25,
      categoria:CategoriaProduto.COLECIONAVEIS
    },
    
  ];

  getProdutos():Produtos[] {
    return this.produtos;
  }

  constructor() { }
}