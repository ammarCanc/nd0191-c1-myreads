import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';


const SearchBook = ({changeShelf}) => {
    const [userSearch, setUserSearch] = useState('');
    const [retrievedBooks, setRetrievedBooks] = useState([]);
    
    
    useEffect(() => {
        const searchBooks = async (query) => {
            const res = await BooksAPI.search(query, 5);
            if (res !== undefined && res.length){
                setRetrievedBooks(res);
            }
            else{
                setRetrievedBooks([]);
            }
        };
        if (userSearch.length>0){
        searchBooks(userSearch);
        }else{
            setRetrievedBooks([]);
        }
    }, [userSearch]);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to ='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" value={userSearch} placeholder="Search by title, author, or ISBN" onChange={ (e) => setUserSearch(e.target.value) } />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {retrievedBooks.length > 0 && retrievedBooks.map((book, key) => <Book id={key} book={book} changeShelf={changeShelf} />) }
                </ol>
            </div>
        </div>
    );
};

export default SearchBook;
