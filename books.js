function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
};

const book1 = new Book('1984', 'George Orwell', 328);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281);

book1.displayInfo();
book2.displayInfo();
