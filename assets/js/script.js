  const container = document.querySelector('.container'),
  qrInput = container.querySelector('.form input'), //pegando o valor da caixa de input para a variavel
  geradorBtn = container.querySelector('.form button'),//pegando a accao do botao
  qrImg = container.querySelector('.qr-code img');

  /* Evento quando clicar no botao*/
  geradorBtn.addEventListener('click', () =>{
      let qrValor = qrInput.value;
            //condicao para analizar se foi inserido algo no  campo de input
        if (!qrValor){
          //Gerando um alert de erro quando nao for digitado nada
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado!",
            footer: '<font color="red">Precisas preenchecer o campo vazio...</font>'
          });
          return;
        };
        //API para gerar QR
            geradorBtn.innerText = "Gerando um QR code..."
              qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValor}`;
                qrImg.addEventListener ('load',() => {
                  geradorBtn.innerText = "Gerar"
            container.classList.add('active');
      });
        }
    );

  qrInput.addEventListener('keyup',() => {
    if (!qrInput.value){
        container.classList.remove('active');
    };
  });