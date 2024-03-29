import SingleBook from "./SingleBook";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// const BookList = ({ books }) => {
//   return books.map((book) => {
//     return <SingleBook key={book.asin} book={book} />;
//   });
// };

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const SearchBar = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Row className="justify-content-center">
        <Col xs="auto">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="gap-4 justify-content-center">
        {SearchBar.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    </>
  );
};
export default BookList;
