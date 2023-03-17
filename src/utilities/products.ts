type Product = {
  id: number,
  name: string,
  category: string,
  quantity: number,
  image: string,
  price: number,
}
 export default Product

const furnitures: Product[] = []
for (let index = 0; index < 5; index++) {
    const element = {
      id: 64 + index + 1,
      name: "Furniture " + index + 1,
      category: "Furniture",
      quantity: 1,
      image: "/src/assets/images/fur-" + (index + 1) + ".jpg",
      price: 150,
    };furnitures.push(element);
}
const kitchenware: Product[] = [];
for (let index = 0; index < 5; index++) {
  const element = {
    id: 6 + index + 1,
    name: "Kitchen " + index + 1,
    category: "Kitchenware",
    quantity: 1,
    image: "/src/assets/images/kit-" + (index + 1) + ".jpg",
    price: 150,
  };
  kitchenware.push(element);
}

const decors: Product[] = [];
for (let index = 0; index < 5; index++) {
  const element = {
    id: 15 + index + 1,
    name: "Decor " + index + 1 ,
    category: "Decor",
    quantity: 1,
    image: "/src/assets/images/decor-" + (index + 1) + ".jpg",
    price: 250,
  };
  decors.push(element);
}


export { furnitures, kitchenware, decors };
