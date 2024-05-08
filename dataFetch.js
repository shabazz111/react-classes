const API = "https://dummyjson.com/products/";
const fetchData = async () => {
  const respose = await fetch(API);
  const data = await respose.json();
  console.log(data?.products);
  for (i = 0; i < data?.products?.length; i++) {
    const cardSection = document.getElementById("cardSection");

    // create a div and name that as card
    const card = document.createElement("div");
    // create image element
    const image = document.createElement("img");
    // create a span element
    const myspan = document.createElement("span");

    // add the class name to the card
    card.classList.add("card");

    //add the title to span
    myspan.innerText = data?.products[i].title;

    //add the image src to the image create
    image.src = data?.products[i].thumbnail;
    image.classList.add("prImage");

    // append the image and title card
    card.append(image);
    card.append(myspan);

    cardSection.appendChild(card);
  }
};

fetchData();
