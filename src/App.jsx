import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./assets/pages/NotFound";
import Home from "./assets/pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
