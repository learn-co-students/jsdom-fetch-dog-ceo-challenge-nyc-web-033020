// console.log('%c HI', 'color: firebrick')
window.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  const imageDiv = document.getElementById("dog-image-container")
  const breedUi = document.getElementById("dog-breeds")
  const dropDown = document.getElementById("breed-dropdown")

  let breedsArray = []

  function fetchImages() {
    fetch(imgUrl)
      .then( res => res.json() )
      .then( json => appendImages(json.message) )
  }

  function fetchBreeds() {
    fetch(breedUrl)
      .then ( res => res.json() )
      .then ( json =>  {
        const breeds = Object.keys(json.message)
        breedsArray = breeds
        appendBreeds(breeds)
      })
  }

  function appendImages(images) {
    images.forEach( image => {
      // console.dir(imageElement)
      let imageElement = document.createElement("img")
      imageElement.src = image
      imageDiv.appendChild(imageElement)
    })
  }

  function appendBreeds(breeds) {
    breedUi.innerHTML = ''
    breeds.forEach( breed => {
      let breedLi = document.createElement("li")
      breedLi.innerHTML = breed
      breedUi.appendChild(breedLi)
    })
  }

  breedUi.addEventListener('click', function (e){
    e.target.style.color = "blue"
  })

  // console.log(dropDown)
  dropDown.addEventListener("change", e => {
    const selectedLetter = e.target.value
    let filteredBreeds = breedsArray.filter( breed => breed[0] == selectedLetter )
    appendBreeds(filteredBreeds)
  })

  fetchImages()
  fetchBreeds()
})
