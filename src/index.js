document.addEventListener("DOMContentLoaded", () => {

  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  // .then(json => Images(json))

  const addImages = dogImg => {
    const imagesDiv = document.getElementById('dog-image-container')
    const imgUrls = dogImg.message
    imgUrls.forEach(url => {
      imgTag = document.createElement('img')
      imgTag.src = url
      imagesDiv.appendChild(imgTag)
    })
  }

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(breedUrl)
  .then(res =>res.json())

  const listBreeds = breedNames => {
    const breedsUl = document.querySelector('#dog-breeds')
    const breeds = breedNames
    forEach(breed)
      breedLi = document.createElement('li)')
      breeds.ul.appendChild(breedLi)
      breedLI.innerHTML = breed
    }

  })






console.log('%c HI', 'color: firebrick')
