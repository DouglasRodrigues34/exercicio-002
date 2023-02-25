// const h1 = document.querySelector('.container h1')
// const data = new Date()

// console.log(data);

// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: ''})

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// moment.locale('pt-BR');
// const dataFormatada = moment(data).format('DD [de] MMMM [de] YYYY, HH:mm:ss');
// h1.innerHTML = dataFormatada;


const h1 = document.querySelector('.container h1');
moment.locale('pt-BR');

function atualizarDataHora() {
  const data = new Date();
  const dataFormatada = moment(data).format('DD [de] MMMM [de] YYYY, HH:mm:ss');
  h1.innerHTML = dataFormatada;
}

// Chama a função atualizarDataHora() a cada segundo (1000 milissegundos)
setInterval(atualizarDataHora, 1000);
