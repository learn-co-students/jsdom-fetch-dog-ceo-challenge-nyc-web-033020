console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json() )
    .then((json) => {
        for (const image of json.message) {
            const img = document.createElement('img')
            img.src = image 
            img.alt = "Doggo-images"
            const doggoImages = document.getElementById('dog-image-container')
            doggoImages.append(img)
        }
    })


    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const doggoBreeds = document.getElementById('dog-breeds')
    fetch(breedUrl)
    .then(res => res.json())
    .then(br => {
        for (breeds in br.message) {
            const breedsList = document.createElement('li')
            breedsList.className = "Doggo-breed"
            breedsList.innerHTML = breeds  
            doggoBreeds.append(breedsList)
            breedsList.addEventListener('click', e => {
                console.log(e)
                e.target.style.color = "blue"
            })
        }
    })

    let breedsArray = []
    const dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('change', e => {
        const optionSelected = e.target.value 
    })

})
