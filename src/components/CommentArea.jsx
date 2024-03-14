import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    CommentsContainer: [],
  };

  fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/` + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTJlNDRjNTllYzAwMTk5MGQ3MTgiLCJpYXQiOjE3MDkyODYxMTcsImV4cCI6MTcxMDQ5NTcxN30.NH_9_0FJ5pLz6avw0ePB0b6Pb7fBKAU5QygujI6cibA",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema inaspettato nella ricezione dati!");
        }
      })
      .then((Comment) => {
        this.setState({ CommentsContainer: Comment });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <>
        <CommentsList dataComment={this.state.CommentsContainer} />
        <AddComment asin={this.props.asin} />
      </>
    );
  }
}
export default CommentArea;
