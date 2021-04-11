import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Characters from "./components/Characters.js";
import CharactersId from "./components/CharactersId.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <header className="Header-Grid">
          <div className="Top-Menu">
            <Header />
            <Nav />
          </div>
        </header>
        <main className="Main-Grid">
          <Switch>
            <Route path="/character/:id">
              <CharactersId />
            </Route>

            <Route path="/characters">
              <Characters />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>

        <footer className="Footer-Grid">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
