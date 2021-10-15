//get the restuarent list and the parent of the list

const list = document.querySelectorAll(".restaurant-details");
const parent = document.querySelector(".restaurant-list");
let ar = Array.from(list);

const veg = document.getElementById("veg");
const city = document.querySelector("#city");
const rating = document.querySelector("#rating");
const smoking = document.getElementById("smoking");

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

//PRICE FILTER

$("input[type=radio][name=price]").on("change", function () {
  filter();
});

//CUISINE FILTER

$("input[type=checkbox][name=cuisine]").on("change", function () {
  filter();
});

//SMOKING FILTER

smoking.onchange = () => {
  filter();
};

//filter function

function filter() {
  let fr = ar;
  fr = vegFilter(fr);
  fr = cityFilter(fr);
  fr = ratingFilter(fr);
  fr = priceFilter(fr);
  fr = cuisineFilter(fr);
  fr = smokingFilter(fr);
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

function priceFilter(priceArr) {
  let temp = [];
  let priceVal = parseInt($("input[type=radio][name=price]:checked").val());
  if (priceVal < 1000) {
    for (var i = 0; i < priceArr.length; ++i) {
      if (priceVal > parseInt(priceArr[i].querySelector(".price").innerHTML)) {
        temp.push(priceArr[i]);
      }
    }
  } else {
    temp = priceArr;
  }
  return temp;
}

function cuisineFilter(cuisineArr) {
  let temp = [];
  let cuisineVal = [];
  $("input[type=checkbox][name=cuisine]:checked").each(function () {
    cuisineVal.push(this.value);
  });
  if (cuisineVal.length > 0) {
    for (var i = 0; i < cuisineArr.length; ++i) {
      let x = cuisineArr[i].querySelector(".tags-name").innerHTML.split(",");
      const found = cuisineVal.some((r) => x.indexOf(r) >= 0);
      if (found) {
        temp.push(cuisineArr[i]);
      }
    }
  } else {
    temp = cuisineArr;
  }
  return temp;
}

function smokingFilter(smokingArr) {
  let temp = [];
  if ($("#smoking").prop("checked")) {
    for (var i = 0; i < smokingArr.length; ++i) {
      let x = smokingArr[i].querySelector(".tags-name").innerHTML.split(",");
      if (x.includes("smoking")) {
        temp.push(smokingArr[i]);
      }
    }
  } else {
    temp = smokingArr;
  }
  return temp;
}
