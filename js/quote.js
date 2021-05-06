let quote = document.getElementById("quote");
let gerar = document.getElementById("gerar");

window.addEventListener("load", function (){
    console.log("done")
    let numero = Object.keys(quotes).length + 1
    let aleatorio = Math.floor(Math.random() * numero);
    quote.innerHTML = `<p> <span class="italic">${quotes[aleatorio].quote} </span> - ${quotes[aleatorio].author}</p> <p>Source: ${quotes[aleatorio].source}</p>`
  })

gerar.addEventListener("click", function (){
      let numero = Object.keys(quotes).length + 1
      let aleatorio = Math.floor(Math.random() * numero);
      quote.innerHTML = `<p> <span class="italic">${quotes[aleatorio].quote} </span> - ${quotes[aleatorio].author}</p> <p>Source: ${quotes[aleatorio].source}</p>`
    })

    let quotes = [{
        "quote": "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.",
        "author": "Hermione Granger",
        "source":"Harry Potter and the Sorcerer's Stone"
    },
    {
        "quote": "It does not do well to dwell on dreams and forget to live." ,
        "author": "Albus Dumbledore",
        "source":"Harry Potter and the Sorcerer's Stone"
    },
    {
        "quote": "To the well-organized mind, death is but the next great adventure.",
        "author":  "Albus Dumbledore",
        "source":"Harry Potter and the Sorcerer's Stone"
    },
    {
        "quote": "You're a little scary sometimes, you know that? Brilliant ... but scary." ,
        "author": "Ron Weasley",
        "source":"Harry Potter and the Sorcerer's Stone"
    },
    {
        "quote": "’Ah, music,’ he said, wiping his eyes. ‘A magic beyond all we do here!'" ,
        "author": "Albus Dumbledore",
        "source":"Harry Potter and the Sorcerer's Stone"
    },
    {
        "quote": "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution."  ,
        "author":   "Albus Dumbledore",
        "source":"Harry Potter and the Sorcerer's Stone"
    },
    {
        "quote": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        "author": "Albus Dumbledore",
        "source": "Harry Potter and the Sorcerer's Stone"
    },
    {
        "quote": "There will be no foolish wand-waving or silly incantations in this class. As such, I don't expect many of you to appreciate the subtle science and exact art that is potion-making. However, for those select few who possess the predisposition, I can teach you how to bewitch the mind and ensnare the senses. I can tell you how to bottle fame, brew glory, and even put a stopper in death. Then again, maybe some of you have come to Hogwarts in possession of abilities so formidable that you feel confident enough to not pay attention!"  ,
        "author": "Professor Severus Snape",
        "source":"Harry Potter and the Sorcerer's Stone"
    }]


    