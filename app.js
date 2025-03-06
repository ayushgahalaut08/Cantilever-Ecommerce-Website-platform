const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

function reload() {
    window.location.reload();
}

const products = [
  {
    id: 1,
    title: "CHOCOLATE CARAMEL",
    price: 10,
    colors: [
      {
        code: "lightgray",
        img: "./New img/CHOCOLATE CARAMEL 2.png",
      },
      {
        code: "lightgray",
        img: "./New img/Product 1 Type 2.png",
      },
    ],
  },
  {
    id: 2,
    title: "TOFFEE CARAMEL",
    price: 10,
    colors: [
      {
        code: "lightgray",
        img: "./New img/TOFFEE CARAMEL 2.png",
      },
      {
        code: "lightgray",
        img: "./New img/Product 2 Type 2.png",
      },
    ],
  },
  {
    id: 3,
    title: "COFFEE FRAPPE",
    price: 10,
    colors: [
      {
        code: "lightgray",
        img: "./New img/COFFEE FRAPPE 2.png",
      },
      {
        code: "lightgray",
        img: "./New img/Product 3 Type 2.png",
      },
    ],
  },
  {
    id: 4,
    title: "HAZELNUT CHOCOLATE",
    price: 10,
    colors: [
      {
        code: "lightgray",
        img: "./New img/HAZELNUT CHOCOLATE 2.png",
      },
      {
        code: "lightgray",
        img: "./New img/Product 4 Type 2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});