import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContentPage from "./pages/ContentPage";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state) => state.todo.isAuth);

  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={isAuth ? <ContentPage /> : <LoginPage />}
        ></Route>
        <Route
          path="/register"
          element={isAuth ? <ContentPage /> : <RegisterPage />}
        ></Route>
        <Route
          path="/content"
          element={isAuth ? <ContentPage /> : <LoginPage />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
