export interface Produtos {
    imagem: string;
    nomeDoProduto: string;
    descricao: string;
    preco: number;
    emPromocao: boolean;
    desconto:number; // 0..1
    categoria:CategoriaProduto
}

export enum CategoriaProduto{
    JOGOS = 'jogos',
    CONSOLES = 'consoles',
    ACESSORIOS = 'acessorios',
    COLECIONAVEIS = 'colecionaveis'
}
