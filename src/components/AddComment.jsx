import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComment extends Component {
  state = {
    newComments: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  onSubmitComment = (e) => {
    e.preventDefault();

    fetch(`https://striveschool-api.herokuapp.com/api/comments/` + this.props.asin, {
      method: "POST",
      body: JSON.stringify(this.state.newComments),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTJlNDRjNTllYzAwMTk5MGQ3MTgiLCJpYXQiOjE3MDkyODYxMTcsImV4cCI6MTcxMDQ5NTcxN30.NH_9_0FJ5pLz6avw0ePB0b6Pb7fBKAU5QygujI6cibA",
      },
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            newComments: {
              comment: "",
              rate: "",
              elementId: "",
            },
          });
        } else {
          throw new Error("Problema inaspettato nella ricezione dati!");
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitComment}>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control defaultValue={this.props.asin} />
          <Form.Label>Comment</Form.Label>
          <Form.Control
            placeholder="what do you think about this book?"
            required
            onChange={(e) => {
              this.setState({
                newComments: {
                  ...this.state.newComments,
                  comment: e.target.value,
                },
              });
            }}
            value={this.state.newComments.comment}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your rating</Form.Label>
          <Form.Select
            onChange={(e) => {
              this.setState({
                newComments: {
                  ...this.state.newComments,
                  rate: e.target.value,
                },
              });
            }}
            value={this.state.newComments.rate}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default AddComment;
