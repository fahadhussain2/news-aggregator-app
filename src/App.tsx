import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import NewsDesc from "./pages/NewsDesc";
import RootLayout from "./components/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<News />} />
        <Route path="/:id" element={<NewsDesc />} />
      </Route>
    </Routes>
  );
};

export default App;
