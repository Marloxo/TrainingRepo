function do_game() {
    colors = ["Aqua", "Black", "Blue", "Brown", "DeepPink", "Indigo", "OrangeRed", "cyan", "SpringGreen"];
    var Target_Index = Math.floor(Math.random() * (colors.length - 1));
    Target = colors[Target_Index];
    alert("\n\n The Target Color Is :   " + Target);

    var guess_Input = prompt("Welcome To Guess the Color Game : \n "+colors + "\n\n guess the color!");
    count = 1;

    while (!check_guess(guess_Input)) {
        //alert(guess_Input);
        count++;
        guess_Input = prompt(colors + "\n guess the color!");
    }
}

function check_guess(input) {
    if (input == null) {
        alert("\n Thanks For Playing My Game :) ");
        return true;
    }
    if (colors.indexOf(input) == -1) {
        alert("I don’t recognize that color!");
        return false;
    }
    else if (input > Target) {
        alert("Your input is alphabetically higher than mine!");
        return false;
    }
    else if (input < Target) {
        alert("Your input is alphabetically lower than mine!");
        return false;
    }
    else {
        myBody = document.getElementsByTagName("body")[0];
        myBody.style.background = Target;

        alert("You are right! You took " + count + " guesses!");
        return true;
    }
}