import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <h1>Welcome To This Shop App</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
