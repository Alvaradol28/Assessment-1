//Borrow the value from the input within the HTML form that contains the ID, so that you can use that ID for the const image in the eventListener
let originalForm = document.querySelector("form");
let userImage = document.querySelector("img");
const submitButton = document.querySelector("button");
//let userInput = document.querySelector('link');
//let textOnTop = document.querySelector('textOnTop') ;
//let textOnBottom = document.querySelector('textOnBottom');
originalForm.addEventListener("submit", function(event){
    event.preventDefault(); 

    const memeContainer = document.createElement("div");
    const top = document.createElement('div');
    const bottom = document.createElement('div');
    const img = document.createElement("img");
    const deleteButton = document.createElement('button');

        //Obtain the image from the user input that is referenced by the id in the HTML document - id = "link"// img uses src attribute
    img.src = document.getElementById("link").value;
        //text on the image should be added to a class that can be manipulated later and styled in CSS. 

    top.classList.add('top');
    top.innerHTML = document.getElementById("textOnTop").value;
    
    bottom.classList.add('bottom');
    bottom.innerHTML = document.getElementById("textOnBottom").value;

    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete meme";   //Delete Button does not appear?

    deleteButton.addEventListener('click', function(event){
    event.target.parentElement.remove(); //Not working
    });

    memeContainer.classList.add("memeFinal");
    memeContainer.append(img);
    memeContainer.append(top);
    memeContainer.append(bottom)
    memeContainer.append(deleteButton);

    let generatedMeme = document.getElementById("ultimateMemeSpace");
    generatedMeme.append(memeContainer);

originalForm.reset()

});    
