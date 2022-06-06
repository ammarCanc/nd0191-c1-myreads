import * as BooksAPI from './BooksAPI';
import { useEffect, useState } from 'react';


const Book = ({book, changeShelf})  => {
    const [ userBooks, setUserBook ] = useState([]);
    const [ currentShelf, setCurrentShelf ] = useState('');
    useEffect(() => {
        loadBooks();
        checkShelf(userBooks, book);
    }, []);
    
    const loadBooks = async () => {
        const res = await BooksAPI.getAll();
        setUserBook(res);
    }

    const checkShelf = (booksOnShelf, book) => {
        booksOnShelf.map((shelfBook) => {
            if (shelfBook.id === book.id){
                setCurrentShelf(shelfBook.shelf);
            }
        })
    }

    return (
        <li>
            <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${book.imageLinks && book.imageLinks.thumbnail?book.imageLinks.thumbnail:null})`,
                }}
                ></div>
                <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(e) => changeShelf(book, e.target.value)}>
                    <option value="none" disabled>
                    Move to...
                    </option>
                    <option value="currentlyReading">
                    Currently Reading
                    </option>
                    <option value="wantToRead" selected={currentShelf==="wantToRead"}>Want to Read</option>
                    <option value="currentlyReading" selected={currentShelf==="currentlyReading"}>Currently Reading</option>
                    <option value="read" selected={currentShelf==="read"}>Read</option>
                    <option value="none" selected={currentShelf===""}>None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.author && book.authors.map((author)=>
                <div className="book-authors">{author}</div>
            )}
            </div>
        </li>
    );
};

export default Book;