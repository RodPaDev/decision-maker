let decision = ["yes", "y", "YES", "maybe","M", "MAYBE", "meh", "no", "n", "NO"]
let yes = "0";
let no = "0";
let textFieldHtml;
let percentageNumbers = []
let clicks = 0;
let percent = 0;
let avg = 0;

/** Span **/
let display = document.getElementById("decisionDisplay")
let percentage = document.getElementById("percentage")
let clicksHtml = document.getElementById("clicks")
let avgHtml = document.getElementById("avg")
let finalHtml = document.getElementById("final")

function main(){
    yes = 0;
    no = 0;
    for(i=0; i<100; i++){
        decider();
        decisionStore();
        textChanger();
        percentageCalculator();
    }
    pushToArray();
    clicks++;
    clicksHtml.textContent = clicks;
    averageCalculator();
    avgHtml.textContent = Math.ceil(avg);
    makeFinalDecision();
}
/** Randomly decides wheter yes or no **/
function decider() {
	choice = decision[Math.floor(Math.random() * decision.length)];
    return choice
}

/** Counts the yes or no's**/
function decisionStore(){
    if(choice === "yes" || choice === "y" || choice === "YES"){
        yes=+ ((3 + 3)*2)*3
        //console.log(yes)
    } else if (choice === "no" || choice === "n" || choice === "NO"){
        no=+ ((3 + 3)*2)*3
        //console.log(no)
    } else  if (choice === "maybe"){
        no=+ (2 + 2)*2
    } else if (choice === "M"){
        yes=+ (2 + 2)*2
    } else if (choice === "MAYBE"){
        yes=+ (2 + 2)*2
        no=+ (2 + 2)*2
    } else if (choice  === "meh"){
        yes=+ (2 + 2)*2
        no=+ (2 + 2)*2
    }
}

function textChanger(){
    //fetches text 
    textFieldHtml = document.getElementById("decision").value;
    //changes text content
    display.textContent = textFieldHtml;
}

function percentageCalculator(){
    percent = Math.round((yes/100)*100);
    percentage.textContent = percent;
}

function pushToArray(){
    percentageNumbers.push(percent)
    console.log("array: " + percentageNumbers)
}

function averageCalculator(){
    let total = 0;
    for (i = 0; i < percentageNumbers.length; i++){
        total += percentageNumbers[i]
    }
    avg = total / percentageNumbers.length
}

function makeFinalDecision(){
    if (avg < 50){
        finalHtml.textContent = "GO FOR IT!!"
    } else if(avg > 50){
        finalHtml.textContent = "STOP DON'T DO IT"
    }
}