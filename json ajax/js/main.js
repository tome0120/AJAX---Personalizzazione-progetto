var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }

  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > data.length) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";
  
  htmlString += "<p>" + "Nickname: "+ data[pageCounter].username +" "+ "/" +" "+ "Citta': "+ data[pageCounter].address.city + ".</p>";


  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
