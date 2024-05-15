// The following alert informs the user that they have been selected to receive the combination of a treasure vault
alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination:");

//These variables perform the calculations needed to find each combination digit. There are 3 in total:
var key1 = 5 + 5;
var key2 = 15893491382 - 15893491342;
var key3 = 13 * 3;

//This variable combines the previous variables into a string that shows the entire lock combination:
let lockCombo = key1 + "-" + key2 + "-" + key3;

//This alert displays the entire key combo to the user:
alert("Listen carefully... I will only say this once: " + lockCombo);


