const box = document.getElementById("box");
const ventana = document.getElementById("ventana");
let cambio = 0;
box.addEventListener("click", (e) => {
    if (cambio == 0) {
        box.setAttribute("src", "assets/img/cofre_minecraft_abierto.png");
        box.innerHTML = "<audio src='assets/sonido_de_cofre_abierto_minecraft.mp3' autoplay></audio>"
        box.classList.add("luz");
        alert("Te amo mucho chiquis")
        cambio = 1;
    } else {
        box.setAttribute("src", "assets/img/cofre_minecraft_cerrado.png");
        box.innerHTML = "<audio src='assets/sonido_de_cofre_cerrado_minecraft.mp3' autoplay></audio>"
        box.classList.remove("luz");
        cambio = 0;

    }
})