import ListGroup from "react-bootstrap/ListGroup";

const CommentsList = ({ dataComment }) => {
  return dataComment.map((comment) => {
    return (
      <ListGroup>
        <ListGroup.Item key={comment._id}>
          Author:{comment.author}
          Comment: {comment.comment}
        </ListGroup.Item>
      </ListGroup>
    );
  });
};
export default CommentsList;
