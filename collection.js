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

// function check(e) {
//   var checkbox = document.querySelector(
//     'input[name="check"][value="' + e + '"]'
//   );
//   if (checkbox.checked == true) {
//     for (count = 0; count < collectionList.length; count = count + 1) {
//       var collectionname =
//         collectionList[count].querySelector("h2").textContent;

//       if (collectionname.toUpperCase().indexOf(e) < 0) {
//         collectionList[count].style.display = "none";
//       } else {
//         collectionList[count].style.display = "block";
//       }
//     }
//   } else {
//     for (var count = 0; count < collectionList.length; count++) {
//       collectionList[count].style.display = "block";
//     }
//   }
// }

// var collectionList = document.querySelectorAll('.collection-box');

function check(e) {
  var checkboxes = document.querySelectorAll('input[name="check"]');
  var checkedValues = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value.toUpperCase());

  if (checkedValues.length > 0) {
    for (var count = 0; count < collectionList.length; count++) {
      var collectionname =
        collectionList[count].querySelector("h2").textContent;
      var shouldDisplay = checkedValues.some(
        (value) => collectionname.toUpperCase().indexOf(value) >= 0
      );

      collectionList[count].style.display = shouldDisplay ? "block" : "none";
    }
  } else {
    for (var count = 0; count < collectionList.length; count++) {
      collectionList[count].style.display = "block";
    }
  }
}

// check box
// var check = document.getElementsByName("check");
// skill = [];

// for (count = 0; count <check.length; count = count + 1) {
//   check[count].addEventListener("click", function () {
//     if (event.target.checked) {
//       skill.push(event.target.value);
//       console.log("checked");

//     } else {
//       var index = skill.indexOf(event.target.value);
//       skill.splice(index, 1);
//       console.log("unchecked");
//     }
//   });
