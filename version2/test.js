// VERSION 2

// 1.
// Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
// - Takes as an argument the following array of objects:
const books = [
  {
    bookName: "The Nature of Software Development",
    author: "Ron Jeffries",
    coverURL:
      "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
  },
  {
    bookName: "Clean Code",
    author: "Robert Cecil Martin",
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
  }
];



// - Iterates over the array and outputs the details of each item nto the DOM. 
// - Displays the items inside an unordered list (created programmatically using JavaScript)

// 2.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users/1
// - Displays the "name", "email" and "city" of the first person inside an unordered list (created programmatically using JavaScript) 

  function createAndAppend(element, parent, options = {}){
    let el = document.createElement(element);
    parent.appendChild(el);
    Object.entries(options).forEach(([key, value]) => {
      if(key === 'text'){
        el.textContent === value  
      }else{
        el.setAttribute(key, value)
      }
    })
  }

{
  const url = 'https://jsonplaceholder.typicode.com/users/1';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data){
    data.map(function(user) {
      console.log(user.name)
      //const body = document.getElementsByTagName('body');
      //createAndAppend('ul', body)
    })
  })
}


// 3.
// Write a function that:
// - Takes in an array of country names
// - Returns the country with the longest name. 
// - Uses the following array as an argument: 


const countries = ["The Netherlands", "Syria", "Turkey", "Mexico", "United States"];

function checkLength(array){
  const items = array.map(function(item){
    console.log(item)
    console.log(item.length)
  })
}

console.log(checkLength(countries))

  