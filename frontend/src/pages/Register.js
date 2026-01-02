import { useState } from "react";
import API from "../services/api";

import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully!");
      navigate("/login"); // 🔥 REDIRECT
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };


  return (
    <form onSubmit={submit}>
      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password"
             onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button>Register</button>
    </form>
  );
}
