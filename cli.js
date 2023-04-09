import pegarArquivo from "./index.js";
import chalk from "chalk";
import validaURL from "./http_validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoArquivo){
    const resultado = await pegarArquivo(caminhoArquivo[2])

    if(caminho[3] === 'validar'){
    console.log(chalk.red('lista de Links'), await validaURL(resultado));

    }if(caminho[3] === 'links'){
        console.log(chalk.magenta('lista de Links'), resultado)
    }

}

processaTexto(caminho)