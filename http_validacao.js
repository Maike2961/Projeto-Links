import fetch from "node-fetch";

async function checaStatus(arrayURL){
    const arrayStatus = await Promise.all(arrayURL.map(async url =>{
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus;
}

function geraArrayLinks(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function validaURL(arrayLinks){
    const links = geraArrayLinks(arrayLinks)
    const statuLinks = await checaStatus(links)
    return statuLinks;

}

export default validaURL;