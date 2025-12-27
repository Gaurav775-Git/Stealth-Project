import React, { useState } from "react";
import Navbar from "../reuasblecomponents/navbar/Navbar";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [semester, setSemester] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter a valid email");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await API.post("/api/signup", {
        name,
        email,
        password,
        college,
        semester: Number(semester),
      });
      setMessage("Signup successful. Redirecting...");
      setTimeout(() => {
        navigate("/signin");
      }, 1000);

      
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-160 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-80 max-h-120"
        >
          <h2 className="text-2xl font-bold text-center mb-5">Create Account</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 px-3 py-2 border rounded focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none"
          />

          <input
            type="text"
            placeholder="College Name"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00ADB5] text-[#EEEEEE] font-medium shadow hover:bg-[#009aa2]"
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
          </div>

          <div className="flex items-center justify-center">
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            {message && <p className="text-green-500 text-sm mb-2">{message}</p>}
          </div>
          

          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </span>
          </p>

        </form>
      </div>
    </>
  );
};

export default Signup;
