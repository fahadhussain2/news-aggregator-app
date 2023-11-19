import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import RootLayout from "./components/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<News />} />
      </Route>
    </Routes>
  );
};

export default App;
