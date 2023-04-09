import chalk from "chalk";

import fs from 'fs'


console.log(chalk.yellow("ola mundo, vamos pra aula de hoje !!!"))

/* const paragrafo  = "texto retornado por uma funcao"

function texto(string){
    return string;
}

console.log(texto(paragrafo)) */

const texto = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.) "

function extrairLink(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const  arrayResultado = [];

    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultado.push({ [temp[1]]: [temp[2]]})
    }
    return arrayResultado.length === 0 ? "não há links" : arrayResultado;
}



function trateErro(erro){
    throw new Error(chalk.red(erro.code,"Não há arquivo no caminho."));
}

async function pegarArquivo(caminhoArquivo){
    const encoding = 'utf-8';
  /*   fs.readFile(caminhoArquivo, encoding,(_,texto)=> */
  
    try{
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        return(extrairLink(texto))
    }catch(erro){
        trateErro(erro);
    }
}
//pegarArquivo("./arquivos/texto.md")
export default pegarArquivo;