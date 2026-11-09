function agregaImagen() {
    const URL = document.getElementById('imagenURL').value;
    const pie = document.getElementById('pieFoto').value;
    const galeria = document.getElementById('galeriaImagenes');

    if (URL && pie) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        img.src = URL;
        img.width = 300;
        img.height = 250;
        p.textContent = pie;

        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);

        document.getElementById('imagenURL').value = "";
        document.getElementById('pieFoto').value = "";
    } else {
        alert("Por favor introduce imagen y pie");
    }
}