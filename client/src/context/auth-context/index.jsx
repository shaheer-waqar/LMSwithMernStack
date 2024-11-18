import axiosInstance from "@/api/axiosInstance";
import { initalSinginData, intialSignupData } from "@/config";
import { loginService, registerSevice } from "@/services/authService";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [signUpFormData, setSignUpFormData] = useState(intialSignupData);
  const [signInFormData, setSignInFormData] = useState(initalSinginData);
  const [activeTab, setActiveTab] = useState("signin");
  const navigate = useNavigate("");

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const data = await registerSevice(signUpFormData);
      setActiveTab("signin");
      console.log(data);
    } catch (error) {
      console.log("failed to login");
      alert(error.response.data.message || "failed to login");
    }
  };

  const loginUser = async (event) => {
    event.preventDefault();
    try {
      const data = await loginService(signInFormData);
      console.log(data);

      const token = localStorage.setItem("token", data.token);
      const role = localStorage.setItem("role", data.role);

      if (data.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
      
    } catch (error) {
      console.log(error);
      alert(error?.response?.data.message || "failed to login");
    }
  };

  useEffect(() => {
    const checkauth = async () => {
      const response = await axiosInstance.get("api/auth/checkout");
      console.log(response);
      console.log("first");
    };

    checkauth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        registerUser,
        loginUser,
        setActiveTab,
        activeTab,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
