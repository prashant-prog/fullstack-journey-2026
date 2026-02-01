console.log(document.getElementById("box")); // Prints the element whose name is box
document.getElementById("heading").setAttribute("class", "black");
//Multiple classes defining
document.getElementById("heading").setAttribute("class", "black white");

// And yes setAttribute overwrites value

const h1 = document.getElementById("heading");//storing data of heading id in h1 variable
console.log(h1);//printing h1 var data


h1.style="color:red; background-color:white;border-radius:10px" //Styling element using accessing id which was stored in h1 variable 
h1.style.padding="15px";
h1.innerHTML;
console.log(document.getElementsByClassName('box'));

