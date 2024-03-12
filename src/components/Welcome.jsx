import Alert from "react-bootstrap/Alert";

function MyWelcomeAlert() {
  return (
    <Alert variant="dark" className="text-center">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Discover the magic of words and embark on a literary journey with us. At EpiBooks, we're passionate about
        bringing the joy of reading to your fingertips. Whether you're a seasoned bookworm or just starting your
        literary adventure, our shelves are filled with treasures waiting to be explored.
      </p>
      <hr />
      <p className="mb-0">Happy reading!</p>
    </Alert>
  );
}

export default MyWelcomeAlert;
