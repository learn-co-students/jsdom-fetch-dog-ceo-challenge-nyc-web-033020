console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogsArray = []



function renderDogs(array){
    const dogBreeds = document.querySelector('#dog-breeds')
    dogBreeds.innerHTML = ' '

    array.forEach(breed => {
     const listItem = document.createElement('li')

     listItem.innerHTML = breed 

     dogBreeds.appendChild(listItem)
   
    })

    dogBreeds.addEventListener('click', function(e){
        e.target.style.color = 'red'

    })
}

fetch(imgUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
        const dogImages = json.message

    dogImages.forEach(image => {
        const dogImageContainer = document.querySelector('#dog-image-container')
       const dog = document.createElement('img')
       dog.setAttribute('src', image)
       dogImageContainer.appendChild(dog)
    });

})



fetch(breedUrl)
.then(function(response) {
  return response.json();
})
.then(function(jsonBreed){
     dogsArray = Object.keys(jsonBreed.message)
     renderDogs(dogsArray)

    const dogDropDown = document.querySelector('#breed-dropdown')

    dogDropDown.addEventListener('change', function(e){
        console.log(e.target.value)
       const letter = dogDropDown.value
       if (letter == 'all'){
           renderDogs(dogsArray)
       } else {
       const filteredDogs = dogsArray.filter(dog => dog[0] === letter)
       renderDogs(filteredDogs)
       }
     

    })

  




});

