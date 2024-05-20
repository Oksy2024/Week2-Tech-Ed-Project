//I created an array [...]

let images = [
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A mountain in the sun, with a person standing on the summit",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1692911105053-d4c381c5a9f7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hot air balloons over snowy mountains of Cappadoccia",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661945144631-730dc9775f71?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Aurora borealis over big waterfall",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1686835760732-b8b17ae4d7f0?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Lake Bled at night",
  },
  {
    url: "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Temples in the junle of Myanmar",
  },
];

// I declared a variable called Thumbcontainer which is a reference to a thumbnail bar
// I declared a variable called DisplayImg  which is a reference to a Display image
const thumbcontainer = document.getElementById("thumb-container");
const displayImg = document.getElementById("display-img");
// 1st image will always be 0 in an array. A global variable to store the current imageINdex (the big image)
let currentImgIndex = 0;

function createThumbnails(arrayOfImages) {
  console.log("i'm in the function");

  for (let i = 0; i < arrayOfImages.length; i++) {
    console.log(i);
    //Create image element:
    let imgElem = document.createElement("img");
    //  Add it to the thumb container:
    thumbcontainer.appendChild(imgElem);
    //Define parametres(attributes):
    imgElem.src = arrayOfImages[i].url;
    imgElem.alt = arrayOfImages[i].alt;
  }
}
// Running (calling) the function:
createThumbnails(images);

function CreateDisplayImg(imageObject) {
  let imgTag = document.createElement("img");
  imgTag.src = imageObject.url;
  displayImg.appendChild(imgTag);
}

CreateDisplayImg(images[0]);

//----------------------------------------------------------

function Example_CreateThumbnails(arrayOfImages) {
  for (let i = 0; i < arrayOfImages.lenght; i++) {
    /* 
        
        ADD THIS TO MAKE THE IMAGES 'FOCUSABLE' WITH PRESSING TAB - THAT WILL AUTOMATICALLY READ OUT THE ALT TEXT!! */

    imgElem.setAttribute("tabindex", "0");

    // add a class to an element using javascript
    imgElem.classList.add("thumb-img");
    //
    imgElem.addEventListener("click", function () {
      // console.log(imgElem)
      console.log(arrayOfImages[i]);
      // when the user click on an image, we're going to call the function responsible for creating the 'big' images - providing it with an argument of the image the user clicked on.
      currentImgIndex = i;
      console.log(currentImgIndex);
      createDisplayImg(arrayOfImages[i]);
    });

    thumbContainer.appendChild(imgElem);
  }
}

//-------------------------------------------
//Buttons TBC...

// aria TBC
const aria = document.getElementById("announcer");

//--------------------------------------------

/* //


// buttons
const prevBtn = document.getElementById('buttonPrev')
const nextBtn = document.getElementById('buttonNext')

// aria

const aria = document.getElementById('announcer')


// i have a varible which always is the current index in my array that is being displayed as the 'main' image.

prevBtn.addEventListener('click', function (){
    selectImageBasedOnIndex(-1)
})

nextBtn.addEventListener('click', function() {
    // add 1
    selectImageBasedOnIndex(1)
})

function selectImageBasedOnIndex(newIndexValue) {
    // I need to update the current img index.
    currentImgIndex = currentImgIndex + newIndexValue

    if (currentImgIndex > images.length - 1) {
        currentImgIndex = 0;
    }
    if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1
    }
    createDisplayImg(images[currentImgIndex])
}



function createThumbnails(arrayOfImages) {
    for (let i = 0; i < arrayOfImages.length; i++) {
        // create an image tag
        let imgElem = document.createElement('img')

        // set the src and the alt text
        // go to my array of images, select the index that i is (first loop is 0, and select the url property of that object)
        imgElem.src = arrayOfImages[i].url
        imgElem.alt = arrayOfImages[i].alt


        /* 
        
        ADD THIS TO MAKE THE IMAGES 'FOCUSABLE' WITH PRESSING TAB - THAT WILL AUTOMATICALLY READ OUT THE ALT TEXT!!
        
        imgElem.setAttribute('tabindex', '0')

        // add a class to an element using javascript
        imgElem.classList.add('thumb-img')
        // 
        imgElem.addEventListener('click', function() {
            // console.log(imgElem)
            console.log(arrayOfImages[i])
            // when the user click on an image, we're going to call the function responsible for creating the 'big' images - providing it with an argument of the image the user clicked on.
            currentImgIndex = i
            console.log(currentImgIndex)
            createDisplayImg(arrayOfImages[i])
        })

        thumbContainer.appendChild(imgElem)
    }
}

createThumbnails(images)


function createDisplayImg(imageObj) {
    aria.textContent = imageObj.alt
    // clearing the current HTML before I add to it.
    displayImg.innerHTML = ''
    // create an image elemnt
    let imgTag = document.createElement('img')
    // add a class
    imgTag.classList.add('hero-img')
    // set the src
    imgTag.src = imageObj.url
    // set the alt
    imgTag.alt = imageObj.alt
    // append child.
    displayImg.appendChild(imgTag)
}


// let myArray = ['tiger', 'boar', 'fox', 'ram', 'dragon']

// let x = 1
// console.log(myArray[x]) // 2

// for (let i = 0; i < myArray.length; i++) {
//     console.log(`We have looped ${i} times`)
//     console.log(`This is the current element in the array i'm looking at: ${myArray[i]}`)
// }


// got our images on the page.
// figure out how to make my images 'clickable'
 */
