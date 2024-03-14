import ListGroup from "react-bootstrap/ListGroup";

const CommentsList = ({ dataComment }) => {
  return dataComment.map((comment) => {
    return (
      <ListGroup key={comment._id}>
        <ListGroup.Item>
          Author:{comment.author}
          Comment: {comment.comment}
          Rate: {comment.rate}
        </ListGroup.Item>
      </ListGroup>
    );
  });
};
export default CommentsList;
