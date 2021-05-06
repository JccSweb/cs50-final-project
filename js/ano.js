let texto = document.getElementById("ano")
// inserir um span no ficheiro html com uma id de ano

document.addEventListener("DOMContentLoaded", function () {

    let data = new Date
    let ano = data.getFullYear()
    texto.innerText = ano
})