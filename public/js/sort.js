const priceSortButton = document.getElementById("price-sort");
const ratingSortButton = document.getElementById("rating-sort");

priceSortButton.addEventListener("click", () => {
  if (priceSortButton.classList.contains("desc")) {
    //ASCENDING
    sortBy(false, ".price");
    priceSortButton.classList.remove("desc");
  } else {
    //DESCENDING
    sortBy(true, ".price");
    priceSortButton.classList.add("desc");
  }
});

ratingSortButton.addEventListener("click", () => {
  if (ratingSortButton.classList.contains("desc")) {
    //ASCENDING
    sortBy(false, ".rating");
    ratingSortButton.classList.remove("desc");
  } else {
    //DESCENDING
    sortBy(true, ".rating");
    ratingSortButton.classList.add("desc");
  }
});

function sortBy(isDesc, param) {
  const details = document.querySelectorAll(".restaurant-details");

  let ar = [];

  details.forEach((detail) => {
    ar.push(detail);
  });

  ar.sort(function (a, b) {
    let priceA = parseFloat(a.querySelector(param).innerText);
    let priceB = parseFloat(b.querySelector(param).innerText);
    return isDesc ? priceB - priceA : priceA - priceB;
  });

  // ar.forEach((res) => {
  //   console.log(res.querySelector(".price").innerText);
  // });

  const parent = document.querySelector(".restaurant-list");
  parent.innerHTML = "";
  for (var i = 0; i < ar.length; i++) {
    parent.appendChild(ar[i]);
  }
}
