import { Routes, Route } from "react-router-dom";
import './App.css';
import { Routers } from "./static/router"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          {
            Routers?.map(el => <Route key={el.id} path={el.path} element={el.element} />)
          }
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
