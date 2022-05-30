import { Link } from "react-router-dom";
import Book from "./Book";


const BookShelf = ({books,  shelfTitle, changeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) =>
                        <Book book={book} changeShelf={changeShelf}/>
                    )}
                </ol>
            </div>
        </div>
    );
}

const MyBooks = ({books,  changeShelf}) => {
    const currentlyReading = books.filter((book) => book.shelf==="currentlyReading");
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf==="read");

    return (
        <div className="list-books">
            {console.log(books)}
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf books={currentlyReading} shelfTitle="Currently Reading" changeShelf={changeShelf}/>
                <BookShelf books={wantToRead} shelfTitle="Want to Read" changeShelf={changeShelf} />
                <BookShelf books={read} shelfTitle="Ye to Parh Li mene" changeShelf={changeShelf} />
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
          </div>
        </div>
    );
};

export default MyBooks;