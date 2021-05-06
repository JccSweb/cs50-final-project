const Gryffindor = document.getElementById("Gryffindor");
const Ravenclaw = document.getElementById("Ravenclaw");
const Hufflepuff = document.getElementById("Hufflepuff");
const Slytherin = document.getElementById("Slytherin");
let selector = document.getElementById("house");



selector.addEventListener("click", function (){
    let house = selector.value
        Gryffindor.style.display = "none";
        Ravenclaw.style.display = "none";
        Hufflepuff.style.display = "none";
        Slytherin.style.display = "none";

    if(house == "Gryffindor")
    {
        Gryffindor.style.display = 'grid';
    }
    else if (house == "Ravenclaw")
    {
        Ravenclaw.style.display = "grid" 
    }
    else if (house == "Hufflepuff")
    {
        Hufflepuff.style.display = "grid"
    }
    else if(house == "Slytherin")
    {
        Slytherin.style.display ="grid"
    }
})