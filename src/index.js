console.log('%c HI', 'color: firebrick')
// - [x]on page load
document.addEventListener('DOMContentLoaded', function(event){

    document.addEventListener('click', function(event){
        if (event.target.parentNode === document.querySelector('ul')){
        event.target.style.color = "blue"}
    })
    let selector = document.getElementById('breed-dropdown')
    selector.addEventListener("change", function(event){
        let breedsLi = document.querySelectorAll('li')
        let breedsLiArray = Array.from(breedsLi)
        breedsLiArray.forEach((breed) => {
            breed.style.visibility = "visible"
            let firstLetter = `${breed.innerText}`.charAt(0)
            if (event.target.value === "all"){
                breed.style.visibility = "visible"
            }
        else if (event.target.value != firstLetter){
            breed.style.visibility = "hidden"
        }
            })
        })
    })

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = "https://dog.ceo/api/breeds/list/all"

    fetch(imgUrl)
    .then(response => response.json())
    .then(dogs =>dogs.message)
    .then(images => {imagesToDOM(images)})

 

     fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => {breedsToDOM(breeds)})

    function breedsToDOM(dogs) {
        let breedsData = Object.keys(dogs.message)
        let breedsList = document.querySelector('#dog-breeds')
        breedsData.forEach((breed) => {
            let breedsLi = document.createElement('li')
            breedsLi.textContent = (`${breed}`)
            breedsList.appendChild(breedsLi)
        })
    }

    function imagesToDOM(dogs) {
        dogs.forEach((dog) => {
            let imageDiv = document.createElement('div')
            imageDiv.innerHTML = `<img src=${dog}>`
            const dogImageContainer = document.querySelector('#dog-image-container')
            dogImageContainer.appendChild(imageDiv)
        })
    }

// [x]get the selector
// [x]addeventlistener
// select the ul
// if the beggining of the child (li) starts with the event.target
// display
// else, hide (li)

    
    // let listItems = document.querySelectorAll('li')
    // let listItemsArray = Array.from(listItems)
    
// })
// -[x] fetch the images using the url above ⬆️
// - [x]parse the response as `JSON`
// - add image elements to the DOM **for each**🤔 image in the array

// After the first challenge is completed, add JavaScript so that:

// -[x] on page load, fetch all the dog breeds using the url above ⬆️
// - [x]add the breeds to the page in an `<ul>` (take a look at the included `index.html`)

// [x]add JavaScript so that the
// addEventListener('onclick')
// change font color
// font color of a particular `<li>` changes _on click_. This can be a color of
// your choosing.

// When the user clicks any of the dog breed list items, the color the text should
