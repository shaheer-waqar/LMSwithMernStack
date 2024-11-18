import DynamicForm from "@/components/dynamic-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInForm, SignUpForm } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { GraduationCap } from "lucide-react";
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

function AuthPage() {
  if (localStorage?.getItem("token") &&localStorage.getItem("role") == "admin") {
    return <Navigate to={"/dashboard"} />;
  }
  if ( localStorage?.getItem("token") && localStorage.getItem("role") == "user" ) {
    return <Navigate to={"/"} />;
  }

  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    registerUser,
    loginUser,
    setActiveTab,
    activeTab,
  } = useContext(AuthContext);

  const handleChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="px-4 lg:px-6 h-14  py-2 flex items-center border-b">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">Lms</span>
        </Link>
      </header>

      <div className="flex items-center  justify-center min-h-[400px] mt-[90px]">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleChange}
          className="w-full max-w-lg"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <Card className="px-4 space-y-">
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Welcome back!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <DynamicForm
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  handleSubmit={loginUser}
                  buttonText="sign in"
                  formContol={signInForm}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="px-4 space-y-">
              <CardHeader>
                <CardTitle>Sign up</CardTitle>
                <CardDescription>Get started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <DynamicForm
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  handleSubmit={registerUser}
                  buttonText="sign up"
                  formContol={SignUpForm}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;
