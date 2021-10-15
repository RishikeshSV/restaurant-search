//get the restuarent list and the parent of the list

const list = document.querySelectorAll(".restaurant-details");
const parent = document.querySelector(".restaurant-list");
let ar = Array.from(list);

//VEG NONVEG FILTER
const veg = document.getElementById("veg");
veg.onchange = () => {
  if ($("#veg").prop("checked")) {
    for (var i = 0; i < ar.length; ++i) {
      let x = ar[i].querySelector(".tags-name").innerHTML.split(",");
      if (x.includes("nonveg")) {
        document.getElementById(ar[i].id).style.display = "none";
      }
    }
  } else {
    for (var i = 0; i < ar.length; ++i) {
      let x = ar[i].querySelector(".tags-name").innerHTML.split(",");
      if (x.includes("nonveg")) {
        document.getElementById(ar[i].id).style.display = "flex";
      }
    }
  }
};

//PLACE FILTER
const city = document.querySelector("#city");
city.onchange = () => {
  if (city.value !== "City") {
    for (var i = 0; i < ar.length; ++i) {
      if (city.value !== ar[i].querySelector(".place-name").innerHTML) {
        document.getElementById(ar[i].id).style.display = "none";
      } else {
        document.getElementById(ar[i].id).style.display = "flex";
      }
    }
  } else {
    for (var i = 0; i < ar.length; ++i) {
      document.getElementById(ar[i].id).style.display = "flex";
    }
  }
};

//RATING FILTER
const rating = document.querySelector("#rating");
rating.onchange = () => {
  if (rating.value > 0) {
    for (var i = 0; i < ar.length; ++i) {
      if (
        parseFloat(rating.value) >
        parseFloat(ar[i].querySelector(".rating-number").innerHTML)
      ) {
        document.getElementById(ar[i].id).style.display = "none";
      } else {
        document.getElementById(ar[i].id).style.display = "flex";
      }
    }
  } else {
    for (var i = 0; i < ar.length; ++i) {
      document.getElementById(ar[i].id).style.display = "flex";
    }
  }
};

//PRICE FILTER
// $("input[name='price']").onchange = () => {
//   console.log($("input[name='price']:checked").val());
// };
