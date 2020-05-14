console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
	// Get Images
	fetch ("https://dog.ceo/api/breeds/image/random/4")
	.then( res => res.json() )
	.then( json => populateImages(json) );

	// Get Breeds
	fetch('https://dog.ceo/api/breeds/list/all')
	.then( res => res.json() )
	.then( json => populateBreeds(json.message) )

	makeDropdown();
});

const populateImages = imgObj => {
	const imagesDiv = document.getElementById('dog-image-container');
	const imgUrls = imgObj.message
	imgUrls.forEach(url => {
		imgTag = document.createElement('img');
		imgTag.src = url;
		imagesDiv.appendChild(imgTag);
	})
};

const populateBreeds = breedsObj => {
	const breedsUl = document.getElementById('dog-breeds');
	const breeds = breedsObj;
	for ( breed in breeds ) {
		breedLi = document.createElement('li');
		breedsUl.appendChild(breedLi);
		breedLi.className = 'breed-list-item'
		breedLi.innerHTML = breed;
		breedLi.addEventListener('click', e => {
			changeColorOnClick(e);
		})
	}
};

const changeColorOnClick = e => {
	e.target.style.color = "#FF0000";
}

const breedListItems = document.getElementsByClassName("breed-list-item")

const filterByLetter = (obj,letter) => {
	for (key in obj) {
		if (key[0] !== letter){
			delete obj[key];
		}
	}
	return obj;
}

const makeDropdown = () => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const dropdown = document.getElementById('breed-dropdown');
	const breedsUl = document.getElementById('dog-breeds');
	alphabet.forEach(letter => {
		const letterOption = document.createElement('option')
		dropdown.appendChild(letterOption);
		letterOption.value = letter;
		letterOption.innerHTML = letter;
	})
	dropdown.addEventListener('change', () => {
		fetch('https://dog.ceo/api/breeds/list/all')
		.then( res => res.json() )
		.then( json => {
			breedsUl.innerHTML = '';
			let breeds = json.message;
			populateBreeds(filterByLetter(breeds,dropdown.value)) 
		})
	})
};
