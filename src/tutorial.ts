const books = ["1984", "Era of Darkness", "Brave New World"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    break;
  }
}

console.log(foundBook?.length);
