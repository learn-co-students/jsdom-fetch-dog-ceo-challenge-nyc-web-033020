console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = []

document.addEventListener("DOMContentLoaded", function (e) {

    const getImages = () => {
        fetch(imgUrl)
            .then(response => response.json())
            .then(results => {
                results.message.forEach(image => renderImage(image))
            })
    }

    const renderImage = image => {
        let dogContainer = document.querySelector("#dog-image-container")
        let dogImage = document.createElement('img')
        dogImage.src = image
        dogContainer.appendChild(dogImage)
    }
    getImages()

    const getBreeds = () => {
        fetch(breedUrl)
            .then(response => response.json())
            .then(results => {
                breeds = Object.keys(results.message)
                renderBreeds(breeds)
                breedDropdownListener()
            })
    }

    const renderBreeds = breeds => {
        breeds.forEach((breed) => {
            let ul = document.querySelector("#dog-breeds")
            let li = document.createElement("li")
            li.innerHTML = breed
            li.addEventListener('click', e => {
                e.target.style.color = "red"
            });
            ul.appendChild(li)
        })
    }
    getBreeds()

    function breedDropdownListener() {
        let breedDropdown = document.querySelector("#breed-dropdown")
        breedDropdown.addEventListener('change', e => {
            breedFirstLetter(event.target.value)
        })
    }

    function breedFirstLetter(letter) {
        updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
    }

    function updateBreedList(breeds) {
        let ul = document.querySelector('#dog-breeds')
        removeChildren(ul);
        breeds.forEach(breed => addBreed(breed))
    }

    function addBreed(breed) {
        let ul = document.querySelector('#dog-breeds');
        let li = document.createElement('li');
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener('click', e => {
            e.target.style.color = "red"
        });
    }

    function removeChildren(element) {
        let child = element.lastElementChild;
        while (child) {
          element.removeChild(child);
          child = element.lastElementChild;
        }
      }
})

//     ## Challenge 4

// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet

/* ## Challenge 2

```js
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
```

After the first challenge is completed, add JavaScript so that:

- on page load [x] /////// put in domcontentloaded
- fetch all the dog breeds using the url above ⬆️
- add the breeds to the page in an `<ul>` (take a look at the included `index.html`)

--- */

/*
STEPS
- perform the following within a dom conent loaded [x]
- Save api url to a const [x]
- place the url in a fetch [x]
- grab the response and convert it to json format [x]
*Da fuckk???
- add image elements to the DOM **for each**🤔 image in the array
## Challenge 1
*Da fuckk???

This repository includes an `index.html` file that loads an `index.js` file.

```js
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
```

Add JavaScript so that:

- fetch the images using the url above ⬆️
- parse the response as `JSON`

*/
