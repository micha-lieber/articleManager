import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import {
  ArticlesPage,
  HomePage,
  ContactPage,
  NewPost,
  Success,
  ThemeSelector,
} from "./components/index";
import { Navbar } from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
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
