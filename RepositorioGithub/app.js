let listaDeNumeros = [];
let numLimite = 10;
let numeroSecreto = numAle();
let tentativas = 1;

function mudaTexto(tag, texto){
        let a = document.querySelector(tag);
        a.innerHTML = texto;
        if ('speechSynthesis' in window) {
            let utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR'; 
            utterance.rate = 1.2; 
            window.speechSynthesis.speak(utterance); 
        } else {
            console.log("Web Speech API não suportada neste navegador.");
        }
    }


            function alteraTexto(){
                mudaTexto('h1', 'Jogo do Número secreto');
mudaTexto('p', 'Escolha um número entre 1 e 10');
            }

        
alteraTexto();

function verificarChute(){
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto){
            mudaTexto('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
            mudaTexto('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else { 
            if (chute > numeroSecreto){
            mudaTexto('p', 'O número secreto é menor');
        } else {
            mudaTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
    
    }

        function numAle(){
           let numeroAleatorio = parseInt(Math.random() * numLimite+1);
           let quantiElemNaLista = listaDeNumeros.length;
           if (quantiElemNaLista == numLimite){
            listaDeNumeros = [];
           }
            if (listaDeNumeros.includes(numeroAleatorio)){
                return numAle();
            }else{
                listaDeNumeros.push(numeroAleatorio);
                console.log(listaDeNumeros);
                return numeroAleatorio;
            }
        }

        function limparCampo(){
            chute = document.querySelector('input');
            chute.value = '';

        }
        function reiniciarJogo(){
            numeroSecreto = numAle();
            limparCampo();
            alteraTexto();
            tentativas = 1;
            document.getElementById('reiniciar').setAttribute('disabled',true);

        }
        