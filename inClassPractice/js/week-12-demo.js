async function buttonClicked(){
    console.log('button clicked!')
    try{
        const response = await fetch(link);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayPicture(json.url);
    } catch(err){
        console.log(err);
        alert;
    }
}

function displayPicture(quotes){
    const quoteText = document.getElementById('js-quote-text')
    quoteText.innerHTML = quotes;
}

const quoteButton = document.querySelector('#js-new-quote')
quoteButton.addEventListener('click', buttonClicked);  
const link = 'https://100k-faces.glitch.me/random-image-url'