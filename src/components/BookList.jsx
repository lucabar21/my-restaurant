import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return books.map((book) => {
    return <SingleBook key={book.asin} book={book} />;
  });
};
export default BookList;
