console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const dogImageContainer = document.getElementById('dog-image-container')
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogBreeds = document.getElementById('dog-breeds')
  const breedDropdown = document.getElementById('breed-dropdown')
  console.log(dogBreeds.children)
  

  fetch(imgUrl)
    .then(resp => resp.json())
      .then(json => {

        for (const imageSrc of json.message){      
          img = document.createElement('img')
          dogImageContainer.appendChild(img)
          img.setAttribute('src', imageSrc)
        }
    });

  fetch(breedUrl)
    .then(function(response){
      return response.json()
    })
    .then( json => {
      
      for (const breed in json.message){
        breedLi = document.createElement('li')
        dogBreeds.appendChild(breedLi)
        breedLi.textContent = breed

      };
    });

  // can write the above like this:

  // fetch(breedUrl)
  //   .then(resp => resp.json())
  //   .then(json => {
  //     console.log(json)
  //   });
  
  // console.log(dogBreeds.children)

  dogBreeds.addEventListener('click', e => {
    if (e.target.tagName === 'LI' && !e.target.style.color){
      e.target.style.color = "red"
    } else if (e.target.tagName === 'LI' && e.target.style.color === "red"){
      e.target.style.color = ""   
    };
  });

  // for (dogLi in dogBreeds.children) {
  //   dogLi.style
  // };

  // document.getElementById("elementId").style.display = 'none';

  // √ - find select element
  // √ - add change event to select
  // - build breed iterator


  const getBreedFirstLetter = (breedLi) => {
    return breedLi.textContent[0]
  };

  breedDropdown.addEventListener("change", e => {
    const dogListItems = dogBreeds.children

    if (e.target.value === 'a'){
      for (const key in dogListItems){        
        if (getBreedFirstLetter(dogListItems[key]) !== 'a'){
          dogListItems[key].style.display = 'none';
        } else {
          dogListItems[key].style.display = 'block';
        }

      };
    };

    if (e.target.value === 'b'){
      for (const key in dogListItems){        
        if (getBreedFirstLetter(dogListItems[key]) !== 'b'){
          dogListItems[key].style.display = 'none';
        } else {
          dogListItems[key].style.display = 'block';
        }

      };
    };

    if (e.target.value === 'c'){
      for (const key in dogListItems){        
        if (getBreedFirstLetter(dogListItems[key]) !== 'c'){
          dogListItems[key].style.display = 'none';
        } else {
          dogListItems[key].style.display = 'block';
        }

      };
    };

    if (e.target.value === 'd'){
      for (const key in dogListItems){        
        if (getBreedFirstLetter(dogListItems[key]) !== 'd'){
          dogListItems[key].style.display = 'none';
        } else {
          dogListItems[key].style.display = 'block';
        }

      };
    };

  });

});