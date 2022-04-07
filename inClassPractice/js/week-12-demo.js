async function buttonClicked(){
    console.log('button clicked!')
    try{
        const response = await fetch(link);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json.quote);
        displayQuote(json.quote);
    } catch(err){
        console.log(err);
        alert;
    }
}

function displayQuote(quotes){
    const quoteText = document.getElementById('js-quote-text')
    quoteText.textcontent = quotes;
}

const quoteButton = document.querySelector('#js-new-quote')
quoteButton.addEventListener('click', buttonClicked);  
const link = 'http://quotes.stormconsultancy.co.uk/random.json'