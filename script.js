var prodData;
fetch("./products.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    prodData = data;
    createProducts(data);
    document.getElementById("uname").innerHTML = localStorage.setItem(
      "username",
      username
    );
  });

//function creatproductinformation (products){
//var ifoDiv=document.createElement("div");
//infoDiv.cclassName="PInfo";
//}
//function creatInfoItem(info,className){
//var infoItemDiv}

/*function createTable(records) {
  var table = document.createElement("table");
  table.setAttribute("border", 1);
  table.appendChild(createHeading(records[0]));
  for (let record of records) {
    table.appendChild(createRow(record));
  }
  document.getElementById("container").appendChild(table);
}
function createHeading(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var heading = document.createElement("th");
    heading.innerHTML = prop.toUpperCase();
    row.appendChild(heading);
  }
  return row;
}
function createRow(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var column = document.createElement("td");
    column.innerHTML = record[prop];
    row.appendChild(column);
  }
  return row;
}

var container = document.getElementById("container");
for (let obj of arr) {
  for (let record in obj) {
    var value = obj[container];
    var div = document.createElement("div");
    div.innerHTML = value;
    container.appendChild(div);
  }
}*/

function createProducts(tests) {
  // we will get the id of the middle panel here
  var middlePanel = document.getElementById("flex-item-middle-panel");

  for (let obj of tests) {
    // div gallery has img tag only
    var gallery = document.createElement("div");
    gallery.className = "gallery";

    //create tag img and assign each URL to it
    var img = document.createElement("img");
    img.src = obj.imageURL;
    // append this img to the parent div gallery
    gallery.appendChild(img);

    //div description has description only
    var description = document.createElement("div");
    description.className = "desc";
    description.innerHTML = getDescription(obj);

    gallery.appendChild(description);

    var btn = document.createElement("BUTTON");
    btn.className = "btn1 success";
    //set arrtribute for button
    btn.setAttribute("type", "button");
    btn.innerHTML = "Add to cart";
    btn.onclick = incrementCartAmount;
    description.appendChild(btn);

    middlePanel.appendChild(gallery);
  }
}
// get description
function getDescription(element) {
  return (
    "Name: " +
    element.name +
    "<br>" +
    " Color: " +
    element.color +
    "<br>" +
    " Price: " +
    element.price
  );
}

function incrementCartAmount() {
  var currentCount = document.getElementById("cartiteam");
  var currentCountParsed = parseInt(currentCount.textContent);
  var nextCount = counter(currentCountParsed);
  // console.log(currentCount);
  currentCount.innerHTML = nextCount;
}
function counter(currentCountParsed) {
  // var cartCount = cartCount.value;
  return currentCountParsed + 1;
}

function filterdProducts() {
  var search_input = document.getElementById("search").value;
  document.getElementById("flex-item-middle-panel").innerHTML = "";
  createProducts(
    prodData.filter(value => {
      var lowerCaseProduct = value.name.toLocaleLowerCase();
      return lowerCaseProduct.includes(search_input);
    })
  );
}
