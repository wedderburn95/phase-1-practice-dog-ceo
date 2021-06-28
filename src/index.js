console.log('%c HI', 'color: firebrick')

// Grab all DOM elements that will be used for this lab

// Define callback functions that are used to update the DOM

//Add event listeners and pass in their respective callback functions defined above


const dogImage = id="dog-image-container"

document.addEventListener("DOMContentLoaded", function() {
    breed()
})

function getImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response=> response.json()) 
    .then( function(response) {
        console.log(response)
        response.message.forEach(function(image) {
            console.log(image)
        })
    }) 
}

function breed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response=> response.json())
    .then(function(results) {
        console.log(results.message)
        const dogKeys = Object.keys(results.message)
        renderBreed(dogKeys)
    })
    
}
function renderBreed(dogKeys) {
    dogKeys.forEach(eachDog => {
        const dogBreed = document.createElement('li')
        dogBreed.innerText = eachDog
        // console.log(dogBreed)
        const newDogs = document.querySelector('#dog-breeds')
        newDogs.appendChild(dogBreed)
    changeColor(dogBreed)
    dropDownMenu(dogBreed)
})

function changeColor(dogBreed) {
    dogBreed.addEventListener("click", function() {
        console.log("williamString")
        // const col = dogBreed.getElementById("william string")
        dogBreed.style.color="#ff0000";

    })
}

function dropDownMenu(dogBreed) {
    const drop = document.querySelector("#breed-dropdown")
    drop.addEventListener("change", function(event) {
        console.log(event.target.value)
        renderBreed(dogKeys.filter(dog => dog.startsWith(event.target.value)))
        breed(dogKeys)

    })

}
}

