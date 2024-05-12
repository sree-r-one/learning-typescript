let temperatures: number[] = [20, 30, 50];

let colors: string[] = ["red", "green", "blue"];

let mixedArray: (number | string)[] = [1, 2, 3];

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 20 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

const calculateDiscount = (price: number): number => {
  return price * 0.9;
};

const names: string[] = ["john", "sree", "raj"];

const isNameInList = (name: string): boolean => {
  return name.includes(name);
};

let nameToCheck = "jane";

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} found!`);
} else {
  console.log("Not found!");
}
