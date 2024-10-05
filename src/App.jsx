import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Sign-in";
import Home from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
