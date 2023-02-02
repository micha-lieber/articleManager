import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import {
  ArticlesPage,
  HomePage,
  ContactPage,
  NewPost,
  Success,
} from "./components/index";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/articles/:id" element={<ArticlesPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
