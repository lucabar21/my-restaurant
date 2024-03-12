import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const MyFooter = () => {
  return (
    <Container fluid className="bg-dark text-white text-center p-2 mt-3">
      <p className="mt-2">&#169; All rights reserved.</p>
    </Container>
  );
};

export default MyFooter;
