//criação de const com a url para ficar mais fácil de chamar
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
//criação de constants para a função interagir com o html
const catBtn = document.getElementById ('change-cat');
const catImg = document.getElementById ('cat'); 

//criação de func async por arrow
const getCats = async () => {
    //usar try catch caso ocorram erros
    try{
        //criação de const para os dados com await e fetch
        const data = await fetch(BASE_URL);
        //criação de const para conversão da promisse do base url em json
        const json = await data.json();

        //retornar usando as imagens comprimidas pelo o webpurl1 da url
        return json.webpurl;
    }   catch(e) {
        //em caso de erro, logar a mensagem de erro
        console.log(e.message);
    }
};

//criação de outra func async para carregar a imagens
const loadImg = async () => {
    //para colocar imagem no campo de imagem
    catImg.src = await getCats();
};

//colocar listener no botão quando clicar
catBtn.addEventListener('click', loadImg);

//para pagina já inicializar com img
loadImg();
