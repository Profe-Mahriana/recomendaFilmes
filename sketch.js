//Filmes de época, história e drama

//Orgulho e Preconceito (2005) LIVRE romance
//Anna Kerenina (2012) 14 drama e romance
//O Grande Gatsby(2014) 14 drama e romance
//Victória e Abdul (2017) 12 biografia, drama e historia
//Adoráveis mulheres (2019) 10 Drama, familia e romance

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "O Grande Gatsby";
        } else {
            return "Adoráveis mulheres";
        }
    } else {
        return "Orgulho e Preconceito";
    }
}
