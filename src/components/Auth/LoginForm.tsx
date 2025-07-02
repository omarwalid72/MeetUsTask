import { FiMail, FiLock } from "react-icons/fi";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { loginUser } from "../../store/slices/authSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {token, error } = useAppSelector(state => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

 return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-[350px] space-y-6">
        <div className="text-center space-y-6">
          <p className="text-4xl sm:text-5xl font-semibold text-[#1A1A1E]">
            Welcome back
          </p>
          <p className="text-[#848490] text-base sm:text-lg leading-relaxed font-normal">
            Step into our shopping metaverse for an unforgettable shopping experience
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center h-14 bg-[#EEEEF9] rounded-lg px-4 gap-3">
            <FiMail className="text-gray-500" size={22} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#EEEEF9] w-full text-black text-base placeholder:text-gray-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center h-14 bg-[#EEEEF9] rounded-lg px-4 gap-3">
            <FiLock className="text-gray-500" size={22} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#EEEEF9] w-full text-black text-base placeholder:text-gray-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-base font-medium transition duration-200"
        >
          Login
        </button>

        {error && (
          <p className="text-center text-red-500 text-sm">{error}</p>
        )}

        <p className="text-center text-sm sm:text-base text-gray-500">
          Don't have an account?{" "}
          <span className="text-purple-600 underline cursor-pointer">
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
