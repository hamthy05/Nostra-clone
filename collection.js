// search collection

var collectionContainer = document.getElementById("collection-dress");
var search = document.getElementById("search");
var collectionList = collectionContainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
  var enterValue = event.target.value.toUpperCase();

  for (count = 0; count < collectionList.length; count = count + 1) {
    var collectionname = collectionList[count].querySelector("h2").textContent;

    if (collectionname.toUpperCase().indexOf(enterValue) < 0) {
      collectionList[count].style.display = "none";
    } else {
      collectionList[count].style.display = "block";
    }
  }
});

// check box
var check = document.getElementsByName("check");
skill = [];

for (count = 0; count < check.length; count = count + 1) {
  check[count].addEventListener("click", function () {
    if (event.target.checked) {
      skill.push(event.target.value);
      console.log("checked");
    } else {
      console.log("unchecked");
    }
  });
}
