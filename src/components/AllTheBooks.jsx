import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import items from "../data/horror.json";

const AllTheBooks = () => {
  return (
    <Container fluid>
      <Row className="row-gap-3 justify-content-between">
        {items.map((book, i) => {
          if (i < 12) {
            return (
              <Col lg={2}>
                <Card id="book">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title id="title">{book.title}</Card.Title>
                    <Card.Text id="price">{book.price} €</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
