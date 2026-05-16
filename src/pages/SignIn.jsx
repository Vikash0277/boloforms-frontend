import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Navbar from "../components/Navbar";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail",email);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-purple-200">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden pt-24">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-10 rounded-3xl shadow-2xl w-full max-w-md relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-sm text-gray-500">Sign in to continue to Bolosign</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all duration-200"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all duration-200"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600 cursor-pointer">
                <input type="checkbox" className="mr-2 rounded text-purple-600 focus:ring-purple-500 border-gray-300" />
                Remember me
              </label>
              <a href="#" className="text-purple-600 font-semibold hover:text-purple-700 hover:underline transition-colors">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg flex justify-center items-center gap-2"
            >
              Sign In
              <span className="material-symbols-outlined text-[20px]">login</span>
            </button>
            
            <div className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-purple-600 font-bold hover:text-purple-700 hover:underline transition-colors">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
