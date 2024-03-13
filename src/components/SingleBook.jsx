import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  bookSelected = () => {
    this.setState((changed) => ({
      selected: !changed.selected,
    }));
  };

  render() {
    const { book } = this.props;
    return (
      <Col xs={8} md={4} lg={3} xl={2}>
        <Card id="book" className={this.state.selected ? "selected-book" : ""} onClick={this.bookSelected}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title id="title">{book.title}</Card.Title>
            <Card.Text id="price">{book.price} €</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
