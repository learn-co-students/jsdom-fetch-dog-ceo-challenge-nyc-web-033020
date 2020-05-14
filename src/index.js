// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            json.message.forEach(dogImage => {
            let dogImg = document.createElement('img')
            dogImg.src = dogImage 
            document.querySelector('#dog-image-container').appendChild(dogImg)
        })
    })

//fetch dog breeds
//iterate through dog breed objects, grab each one, create an li tag, append to dog-breeds ul
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            for(const breed in json.message) {
                let eachBreed = document.createElement('li')
                eachBreed.textContent = breed 
                document.querySelector('#dog-breeds').appendChild(eachBreed)
                eachBreed.addEventListener('click', changeColor)

            }
        })

        function changeColor(e) {
            e.target.style.color = 'red'
        }
})