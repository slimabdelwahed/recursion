function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}




function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


function power(x, n) {
    // Base case: Any number to the power of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Base case: Any number to the power of 1 is the number itself
    if (n === 1) {
        return x;
    }
    // If the exponent is negative, compute the positive exponent and take the reciprocal
    if (n < 0) {
        return 1 / power(x, -n);
    }

    // Recursive case: Compute half power
    let halfPower = power(x, Math.floor(n / 2));

    // If the exponent is even
    if (n % 2 === 0) {
        return halfPower * halfPower;
    } else {
        // If the exponent is odd
        return x * halfPower * halfPower;
    }
}


function clothingAdvicer(temperature,condition) {
let temperature = 25;
let condition = "chaud";
if (temperature>=25){
    condition==="chaud"
    return "il fait chaud tu dois pas porter un monteau"
}else{
    return "il fait froid tu dois porter un monteau"

}
}



function clothingAdviser() {

    let temperature = prompt("What is the current temperature in degrees Celsius?");
    temperature = parseInt(temperature);


    let isRaining = prompt("Is it raining? (yes/no)").toLowerCase();


    if (isRaining === "yes") {
        advice += "- Take an umbrella or a raincoat.\n";
    }

    if (temperature < 10) {
        advice += "- Wear a warm coat, scarf, and gloves.";
    } else if (temperature >= 10 && temperature < 20) {
        advice += "- Wear a jacket or sweater.";
    } else if (temperature >= 20 && temperature < 30) {
        advice += "- Wear light clothing.";
    } else {
        advice += "- Wear very light clothing and protect yourself from the sun.";
    }


    alert(advice);
}


clothingAdviser();



