const myDiv= document.querySelector('.show');

const firstName = "Estailin";
const sureName = "Alejandro";



console.log(firstName);
console.log(sureName);


let fullName = firstName + ` ` + sureName;

console.log(fullName);
console.log(myDiv);

myDiv.innerHTML+= `${fullName}`;

const result = prompt("Vul wachtwoord in (let op hoofdlettergevoelig)","H@ck3d");

if (result == "H@ck3d") {
    alert("Welkom gebruiker")
}

else {
    alert("You’ve failed, Game over!")
}

