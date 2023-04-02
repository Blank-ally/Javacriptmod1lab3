//Stith
//Mod 1 Lab 3
let message = document.getElementById("message");
message.innerHTML = "All calculations are done in the console open inspect window to view";

console.group("Lab 3 IPO");

console.group("Input");
console.log("Input a: a number box");
console.log("Input b: a number box");
console.log("Input c : a number box");
console.log("Button");
console.groupEnd();

console.group(" Process");
console.log("takes the number input from user ");
console.log("Preform necessary expression ");
console.groupEnd();

console.group("Output");
console.log("results");
console.groupEnd();

console.groupEnd();

// function for A,B,C click
function doesntMatter() {

    // getting the input box from the html page
    const a = document.getElementById('input1').valueAsNumber;

    const b = document.getElementById('input2').valueAsNumber;

    const c = document.getElementById('input3').valueAsNumber;

    console.log('abc',a*b*c);
    console.log('ab - c',a*b- c);
    console.log('a(b - c)',a*(b - c));
    console.log('a/(b+c)',a/(b+c));
    console.log('(a/b)+c',(a/b)+c);
    console.log('a+b**c',a+b**c);
    console.log('(a+b)**c',(a+b)**c);
    console.log('50% of abc ',(a*b*c)* .5);
    console.log('50% of 10 % abc',((a*b*c)*.1)*.5);
    console.log('(a+b)/(b+c)',(a+b)/(b+c));
    console.log('(abc)^2 + (abc)^2',((a*b*c)**2)+((a*b*c)**2));
    console.log('((abc)^2 + (abc)^2) / (abc)^2',(((a*b*c)**2)+((a*b*c)**2))/((a*b*c)**2));
    console.log('\'Hello\' + \'to you\'','Hello'+'to you' );
    console.log('a * \'Hello\'',a*'Hello');




}