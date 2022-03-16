const box = document.getElementById("box");
// const ventana = document.getElementById("ventana");
const conteiner_box = document.getElementById("conteiner_box");
let cambio = 0;
// let colors = ["blue", "red", "green"];
let a = 0;
let colores_index = 0;
const contenedor = ["https://wallpaperaccess.com/full/2915377.jpg", "https://wallpaperaccess.com/full/2915376.jpg"]
setInterval(() => {
    conteiner_box.style.backgroundImage = `url(${contenedor[a++]})`
    if (a == contenedor.length) {
        a = 0;
    }
    conteiner_box.style.backgroundColor = `${colors[colores_index++]}`;
    if (colores_index == colors.length) {
        colores_index = 0;
    }
}, 1000);
box.addEventListener("click", (e) => {
    if (cambio == 0) {
        box.setAttribute("src", "assets/img/cofre_minecraft_abierto.png");
        box.innerHTML = "<audio src='assets/sonido_de_cofre_abierto_minecraft.mp3' autoplay></audio>"
        box.classList.add("luz");
        alert("Te amo mucho mi princesita ❤");
        cambio = 1;
    } else {
        box.setAttribute("src", "assets/img/cofre_minecraft_cerrado.png");
        box.innerHTML = "<audio src='assets/sonido_de_cofre_cerrado_minecraft.mp3' autoplay></audio>"
        box.classList.remove("luz");
        cambio = 0;

    }
})