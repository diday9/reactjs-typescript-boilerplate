import { Route, Routes } from "react-router-dom";
import AnotherPage from "./components/pages/AnotherPage";
import Page1 from "./components/pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<AnotherPage />} />
      </Routes>
    </div>
  );
}

export default App;
