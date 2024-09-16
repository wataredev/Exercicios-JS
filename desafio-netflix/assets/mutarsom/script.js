const variavelelemento = document.getElementById('meuVideo');
const variavelvolume = document.getElementById('botaovolume');

if (variavelelemento && variavelvolume) {
    variavelvolume.addEventListener('click', function() {
        if (variavelelemento.muted) {
            variavelelemento.muted = false;
            variavelvolume.src = "./assets/telafilmes/bx-volume-full.svg";
        } else {
            variavelelemento.muted = true;
            variavelvolume.src = "./assets/telafilmes/bx-volume-mute.svg";
        }
    });
}