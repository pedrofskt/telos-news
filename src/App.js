import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Home />} exact/>
              <Route path="/noticia" element={<News />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
