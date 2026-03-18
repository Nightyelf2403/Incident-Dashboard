import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@components/Ui/button";
import Card from "@components/Ui/card";
import Label from "@components/Ui/label";
import Input from "@components/Ui/input";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // For now just simulate signup
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card className="w-96 space-y-4">
        <h1 className="text-xl font-bold text-center">Signup</h1>

        <div>
          <Label text="Name" />
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

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

        <Button onClick={handleSignup} className="w-full">
          Signup
        </Button>

        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </Card>
    </div>
  );
};

export default Signup;
