document.querySelector('button').addEventListener('click', ghibli)

function ghibli(){
    let ghibVal = document.querySelector('input').value
    let url = `https://animechan.vercel.app/api/quotes/anime?title=${ghibVal}`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      document.querySelector('h2').innerText = data[0].anime
      document.querySelector('h3').innerText = data[0].quote
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
   
}

// This website returns an array of objects
// I would like the user's input to loop through the objects until 
// it finds one with a matching title property.
//THen display things about the object
// smashgg token 55167ca927c9808b544c649dc49dbf23