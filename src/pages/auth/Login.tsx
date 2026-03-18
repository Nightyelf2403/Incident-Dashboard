import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@components/Ui/button";
import Card from "@components/Ui/card";
import Label from "@components/Ui/label";
import Input from "@components/Ui/input";
import { useAuth } from "@src/context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ email });
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card className="w-96 space-y-4">
        <h1 className="text-xl font-bold text-center">Login</h1>

        <div>
          <Label text="Email" />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <Label text="Password" />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
      </Card>
    </div>
  );
};

export default Login;
