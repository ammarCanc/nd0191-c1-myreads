
const Book = ({book, changeShelf})  => {
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
                    `url(${book.imageLinks.thumbnail})`,
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
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            {console.log(book.title)}
            <div className="book-title">{book.title}</div>
            {book.authors.map((author)=>
                <div className="book-authors">{author}</div>
            )}
            </div>
        </li>
    );
};

export default Book;