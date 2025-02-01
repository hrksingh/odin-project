function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function () {
    console.log(`The ${title} by ${author}, ${pages} pages, ${isRead} yet`);
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");
console.log(theHobbit.info());
console.log(theHobbit.valueOf());
