document.addEventListener('DOMContentLoaded', function(){  
    
    dogImages()
    dogList()
 
    let dropDownMenu = document.querySelector('#breed-dropdown')
    dropDownMenu.addEventListener('change', function(event){
    
})
})

let breedList = []

function dogImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => {
        dogs.message.forEach(url => addImage(url))
    })
}

function addImage(url){
    const imgContainer = document.querySelector('#dog-image-container')
    const img = document.createElement('img')
    img.src = url
    imgContainer.appendChild(img)
}

function dogList(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogBreeds = document.querySelector('#dog-breeds')
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(dogs => {
        for (const key in dogs.message) {
        const newBreed = document.createElement('ul')
            newBreed.textContent = key
            newBreed.id = key
            dogBreeds.appendChild(newBreed)
        }
        dogBreeds.addEventListener('click',function(event){
            event.target.style.color = "cyan"
        })
    })
}






    


//get value of dropdown selection
//search through dogs where first letter is equal to dropdown selection
//if match, add dog to breedList
//after searched, update dogBreeds with breedList
//clear breedList
//clear all elements under ul

