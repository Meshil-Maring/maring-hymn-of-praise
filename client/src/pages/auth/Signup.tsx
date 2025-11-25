import { useState, useEffect } from "react";

import Button from "./component/Button";
import Label from "./component/Label";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const formHandler = async (e: any) => {
    e.preventDefault();

    // prevent submit if invalid
    if (!validForm) return;

    const res = await fetch(
      "https://maring-hymn-of-praise-server.onrender.com/auth/send-otp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();
    console.log("Server response:", data);
  };

  // track if user touched the input
  const [firstTouch, setFirstTouch] = useState({
    username: false,
    email: false,
  });

  const [validForm, setValidForm] = useState(false);

  const inputHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setFirstTouch({
      ...firstTouch,
      [e.target.name === "name" ? "username" : "email"]: true,
    });
  };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isNameValid = formData.name.length >= 3;
    const isEmailValid = emailRegex.test(formData.email);

    setValidForm(isNameValid && isEmailValid);
  }, [formData]);

  return (
    <form className="flex flex-col p-8 gap-2" onSubmit={formHandler}>
      {/* username */}
      <Label title="User name" />
      <input
        onChange={inputHandler}
        className="bg-black/10 p-2"
        value={formData.name}
        type="text"
        name="name"
      />

      {firstTouch.username && formData.name.length < 3 && (
        <label className="text-[10px] text-red-500">
          Username must have at least 3 characters
        </label>
      )}

      {/* email */}
      <Label title="Email" />
      <input
        onChange={inputHandler}
        className="bg-black/10 p-2"
        value={formData.email}
        type="email"
        name="email"
      />

      {firstTouch.email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
          <label className="text-[10px] text-red-500">
            Please enter a valid email
          </label>
        )}

      <Button title="Send OTP" valid={validForm} />
    </form>
  );
};

export default Signup;
