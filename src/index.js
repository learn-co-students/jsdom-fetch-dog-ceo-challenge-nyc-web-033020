
document.addEventListener('DOMContentLoaded', (e) => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const imgContainer = document.querySelector('#dog-image-container')

  fetch(imgUrl)
    .then(r => r.json())
    .then((j) => {
      // debugger
      for(const dog of j.message) {
        // <img src="" alt="">
        const img = document.createElement('img')
        img.src = dog
        img.alt = "dog"
        imgContainer.append(img)
      }
    })
  
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const breedUl = document.querySelector('#dog-breeds')
  fetch(breedUrl)
    .then(r => r.json())
    .then(j => {
      // debugger
      for (key in j.message) {
        const li = document.createElement('li')
        li.className = "breed"
        li.innerText = key 
        breedUl.append(li)
      }
    })

  const breedDropdown = document.querySelector('#breed-dropdown')
  breedDropdown.addEventListener('change', function(event) {
    // get all starting with letter
    // if letter follows, 'hidden', else 'visible'
    const breedUls = document.querySelectorAll('.breed')
    for (const breedUl of breedUls) {
      console.log(breedUl.textContent[0].toLowerCase(), event.target.value)
      if (breedUl.textContent[0].toLowerCase() == event.target.value) breedUl.style.display = 'list-item'
      else breedUl.style.display = 'none'
    }
  })
})

document.addEventListener('click', e => {
  if (e.target.className == "breed") e.target.style.color = "red"
})