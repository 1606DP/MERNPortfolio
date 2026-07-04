import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import { useState } from "react";

function App() {
  const [showLoading , setShowLoading] = useState(false);
  return (
    <BrowserRouter>
    {showLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
