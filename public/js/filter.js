//get the restuarent list and the parent of the list

const list = document.querySelectorAll(".restaurant-details");
const parent = document.querySelector(".restaurant-list");
let ar = Array.from(list);

const veg = document.getElementById("veg");
const city = document.querySelector("#city");
const rating = document.querySelector("#rating");

//VEG NONVEG FILTER

veg.onchange = () => {
  filter();
};

//PLACE FILTER

city.onchange = () => {
  filter();
};

//RATING FILTER

rating.onchange = () => {
  filter();
};

//filter function

function filter() {
  let fr = ar;
  fr = vegFilter(fr);
  fr = cityFilter(fr);
  fr = ratingFilter(fr);
  parent.innerHTML = "";
  for (var i = 0; i < fr.length; i++) {
    parent.appendChild(fr[i]);
  }
}

function vegFilter(vegArr) {
  let temp = [];
  if ($("#veg").prop("checked")) {
    for (var i = 0; i < vegArr.length; ++i) {
      let x = vegArr[i].querySelector(".tags-name").innerHTML.split(",");
      if (!x.includes("nonveg")) {
        temp.push(vegArr[i]);
      }
    }
  } else {
    temp = vegArr;
  }
  return temp;
}

function cityFilter(cityArr) {
  let temp = [];
  if (city.value !== "City") {
    for (var i = 0; i < cityArr.length; ++i) {
      if (city.value === cityArr[i].querySelector(".place-name").innerHTML) {
        temp.push(cityArr[i]);
      }
    }
  } else {
    temp = cityArr;
  }

  return temp;
}

function ratingFilter(ratingArr) {
  let temp = [];
  if (rating.value > 0) {
    for (var i = 0; i < ratingArr.length; ++i) {
      if (
        parseFloat(rating.value) <=
        parseFloat(ratingArr[i].querySelector(".rating-number").innerHTML)
      ) {
        temp.push(ratingArr[i]);
      }
    }
  } else {
    temp = ratingArr;
  }
  return temp;
}
