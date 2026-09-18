let placarCara = 0;
let placarCoroa = 0;

function jogar() {
    const moeda = document.getElementById("moeda");
    moeda.style.transform = "rotateY(720deg)"; // animação de  giro 

    setTimeout(() => {
        const resultado = Math.floor(Math.random() * 2);
        if (resultado === 0) {
            moeda.textContent = "Cara";
            placarCara++;
             document.getElementById("placarCara").textContent = placarCara;
        }
    })
}