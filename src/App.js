import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import items from "./data/horror.json";
import BookList from "./components/BookList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div>
      <MyNav />
      <Container id="container" fluid>
        <Row className="justify-content-center gap-4">
          <Welcome />
          <BookList books={items} />
          {/* <AllTheBooks /> */}
        </Row>
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
