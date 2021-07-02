// Challenge 1
function ageInDays() {
    var birthyear = prompt('Heyy! Pal...What year were you born ?')
    var ageInDayss = (2021 - birthyear) * 365;

    var h2 = document.createElement('h2');
    var textAnswerm = document.createTextNode('You are ' + ageInDayss + ' days old');
    h2.setAttribute('id', 'ageIndays');
    h2.appendChild(textAnswerm);
    document.getElementById('flex-box-result').appendChild(h2);

}
function reset() {
    document.getElementById('flex-box-result').remove();
}

// Challenge 2: cat generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3: Rock, Paper,Scisscor

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = chooseNumber(randomNo());
    console.log('computerChoice:', botChoice)

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);

}


// first we created a random no. generating functiion

function randomNo() {
    return Math.floor(Math.random() * 3);
}

// with the help of random no. genrated above we are choosing rock,paper and scissors
// and after that we will combine both th function to make the botChoice function.....

function chooseNumber(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsdatabase = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5 }
    };

    var yourScore = rpsdatabase[yourChoice][computerChoice];
    var computerScore = rpsdatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}


function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost!!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You Tied!!', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You Won!!', 'color': 'Green' }
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesdatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML= "<img src='"+imagesdatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";

    messageDiv.innerHTML="<h1 style='color: "+finalMessage['color']+ "; font-size=60px;padding:50px; '>"+finalMessage['message']+ "</h1>";

    botDiv.innerHTML= "<img src='"+imagesdatabase[botImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";

    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(messageDiv);
    document.getElementById('flex-box-div').appendChild(botDiv);
    
}