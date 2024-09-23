const snowContainer = document.querySelector('.snow');
const audioHalloween = document.querySelector('#musica_halloween');

audioHalloween.play();

snowContainer.innerHTML = "";

function generarNieve() {
       Array.from({length:51 }).forEach((_, i) => {
              const num = generarNumero(11,26)
              snowContainer.innerHTML += `<span style="--i:${num}"></span>`
       })
}

function generarNumero(inicio, final) {
       return Math.floor(Math.random() * (final - inicio + 1) + inicio)
}

function timerHalloween() {
       const fechaActual = new Date();
       const fechaHalloween = new Date(fechaActual.getFullYear(), 9, 31);
       
       if(fechaActual.getMonth() === 9 && fechaActual.getDate() > 31) {
              fechaHalloween.setFullYear(fechaActual.getFullYear() + 1);
       }

       let diferenciaEnMs = fechaHalloween - fechaActual;

       let diasRestantes = Math.floor(diferenciaEnMs / (1000 * 60 * 60 *24));
       let horasRestantes = Math.floor((diferenciaEnMs % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));

       let minutosRestantes = Math.floor((diferenciaEnMs % (1000 * 60 * 60) / (1000 * 60)));

       let segundosRestantes = Math.floor((diferenciaEnMs % (1000 * 60) / 1000));
       
       console.log(diasRestantes, horasRestantes, minutosRestantes, segundosRestantes);

       const diasHTML = document.getElementById("dias-restantes");
       const horasHTML = document.getElementById("horas-restantes");
       const minutosHTML = document.getElementById("minutos-restantes")
       const segundosHTML = document.getElementById("segundos-restantes");

       diasHTML.innerHTML = diasRestantes.toString().padStart(2, '0');
       horasHTML.innerHTML = horasRestantes.toString().padStart(2, '0');
       minutosHTML.innerHTML = minutosRestantes.toString().padStart(2, '0');
       segundosHTML.innerHTML = segundosRestantes.toString().padStart(2, '0');
}

setInterval(timerHalloween,1000);

generarNieve();