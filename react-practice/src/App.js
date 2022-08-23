import { element } from "prop-types";

import { BrowserRouter, Routes, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie' element={<Detail />} />
        </Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
