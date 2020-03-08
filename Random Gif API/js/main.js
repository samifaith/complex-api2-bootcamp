// document.querySelector("#centerName").value
// const ul = document.querySelector("ul")
// let gotCharacter =
let apiKey = "XV4CKfKtcZaXlARCs3d2fc4u0GYgGh8w"

fetch("https://random-word-api.herokuapp.com/word?number=1")
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(words => {
    // words.forEach((wordIn, i)  => {
    //   let inputValue = wordIn.words
    document.querySelector("p").textContent = words
    fetch(`https://api.giphy.com/v1/gifs/search?q=${words}&api_key=${apiKey}&limit=1`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(giffy => {
          document.querySelector("img").src = giffy.data[0].images.original.url
        })
      // })
    })
.catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });






// function getTheWu (location, i){
//   let zip = location.zipcode.slice(0,5)
//   fetch(`https://wunameaas.herokuapp.com/wuami/${gotCharacter}`)
//     .then(res => res.json())
//     .then(weather => {
//       let locationWeather = weather.main.temp
//       let li = document.createElement("li") //built in element thats create element so you have a click event that creates a new li; if the input is null, you might want to add something to say a value is entered
//       let listItem = document.querySelector("#centerName").textContent = `The NASA ${location.center}, ${location.facility} is located in ${location.city},
//       ${location.state} and the temperature today is ${locationWeather}`
//       ul.appendChild(li);// for the ul, want to append the children into the ul to make the li (this li calls upon the variable stated above)
//       li.appendChild(document.createTextNode(listItem)); // now w these li, create a text node which is the list item and create that list item variable, take in each of the grocery items you are putting in
//       })
// }




// fetch("https://anapioficeandfire.com/api/characters")
//   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//   .then(characters => {
//     console.log(characters)
//     // characters.forEach( getNasaLocationWeather )
//     }
//     )
// .catch(err => {
//       console.log(`error ${err}`)
//       alert("sorry, there are no results for your search")
//   });
