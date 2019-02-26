let currentRandomNumber = 0;
let allRandomNumbers = [];
let averageRandomNumbers = 0;
/** HTML INTERACTION VARIABLES**/
let clicksHtml = document.getElementById("clicks");
let displayInputHtml = document.getElementById("displayInput");
let percentageHtml = document.getElementById("percentage");
let avgHtml = document.getElementById("avg");
let finalHtml = document.getElementById("final");
/** Creates an array from 0-100 **/
let probability = [];
for (let i = 0; i <= 100; i++ ){
    probability.push(i)
}
/** Chooses a random number from the array above */
function getRandomNumber() {
	randomNumber = probability[Math.floor(Math.random() * probability.length)];
    return currentRandomNumber = randomNumber
}
/** Displays the values on the webpage**/
function displayOnWebpage(){
    let inputHtml = document.getElementById("input").value;
    if (inputHtml === "" ){
        displayInputHtml.textContent = "do it";
    } else {
        displayInputHtml.textContent = inputHtml;
    }
    percentageHtml.textContent = currentRandomNumber;
    avgHtml.textContent = averageRandomNumbers;
    clicksHtml.textContent = allRandomNumbers.length;
}
/** Pushes the current random number into an array**/
function pushToArray(){
    allRandomNumbers.push(currentRandomNumber);
}
/** Calculates the average of the array**/
function calculateAverage(){
    let total = 0;
    for(i = 0; i < allRandomNumbers.length; i++){
        total = total + allRandomNumbers[i]
    }
    averageRandomNumbers = Math.round(total / allRandomNumbers.length);
}
/** onclick function executes code once**/
function decide(){
    getRandomNumber();
    pushToArray();
    calculateAverage();
    displayOnWebpage();
    displayMessage();
}
/** onclick function executes code 100x**/
function bulkDecide(){
    let i
    for (i = 0; i < 100; i++){
        decide();
    }
    i = 0;
}
/** Resets all values to 0 **/
function resetValues(){
    currentRandomNumber = 0;
    allRandomNumbers = [];
    averageRandomNumbers = 0;
    displayOnWebpage();
    resetMessage();
}
/** Displays Messages based on average **/
function displayMessage(){
    if (averageRandomNumbers === 50){
        finalHtml.textContent = "50/50 chance... Take Risks or Don't..."
    } else if (averageRandomNumbers === 0 || averageRandomNumbers <= 2 ){
        finalHtml.textContent = "Chances are very very slim, stop!"
    }else if (averageRandomNumbers === 100 || averageRandomNumbers >= 98 ){
        finalHtml.textContent = "Chances are very high! Dive in!"
    }else if (averageRandomNumbers > 50){
        finalHtml.textContent = "What are you waiting for? Go for it!"
    }else if (averageRandomNumbers < 50){
        finalHtml.textContent = "No, but you really shouldn't ask a computer for advice..."
    }
}
/** Resets both messages **/
function resetMessage(){
    displayInputHtml.textContent = "do it"
    finalHtml.textContent = ""
}