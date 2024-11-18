import axiosInstance from "@/api/axiosInstance";

const registerSevice = async (formdata) => {
  const response = await axiosInstance.post("api/auth/register", {
    ...formdata,
    role: "user",
  });
  return response.data;
};

const loginService = async (formdata) => {
    console.log(formdata);
  const response = await axiosInstance.post("api/auth/login",formdata);
  
  return response.data;
};

export { registerSevice ,loginService };
