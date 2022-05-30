import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI';
import MyBooks from "./MyBooks";
import {Route, Routes} from 'react-router-dom';
import SearchBook from "./SearchBook";

function App() {
  const [books, setBooks] = useState([]);
  const loadBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };
  useEffect(() => {
    
    loadBooks();
  }, []);

  const changeShelf = (book, shelf) => {
    const updateShelf = async () => {
      const res = await BooksAPI.update(book, shelf);
      console.log(res);
    }
    updateShelf();
    loadBooks();
  }

  return (
    <Routes>
      <Route path='/' element={
        <MyBooks books={books} changeShelf={changeShelf} />
      } />
      <Route path='/search' element={<SearchBook changeShelf={changeShelf} />} />
    </Routes>
  );
}

export default App;
