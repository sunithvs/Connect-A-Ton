import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      console.log("Token stored in localStorage:", token);
      window.location.href = "/home";
    } else {
      window.location.href = `${
        import.meta.env.VITE_API_BASE_URL
      }/authentication?next=http://localhost:3000`;
    }
  }, []);

  return null;
};

export default Login;
