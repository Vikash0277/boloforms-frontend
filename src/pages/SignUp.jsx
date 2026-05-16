import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Navbar from "../components/Navbar";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", data.token); 
      localStorage.setItem("userEmail",email);
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <div className="flex-1 flex pt-[72px]">
        <div className="hidden lg:flex flex-col justify-between w-1/2 bg-purple-900 text-white p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-500 blur-[100px]"></div>
            <div className="absolute bottom-[0%] -right-[10%] w-[70%] h-[70%] rounded-full bg-pink-500 blur-[120px]"></div>
          </div>
          
          <div className="relative z-10 mt-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight">Join the future of digital signatures.</h1>
            <p className="text-lg text-purple-200 max-w-md leading-relaxed">Experience seamless, bank-grade secure document signing with Bolosign. Fast, legal, and hassle-free.</p>
          </div>

          <div className="relative z-10 bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl mb-8">
             <div className="flex items-center gap-4 mb-5">
                <img className="w-16 h-16 rounded-full object-cover border-2 border-purple-400 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGPkZjsmPpktiT8flNt0kxA13_atlt53LCZK2hCKVTRN9vZ7gIiDONay4U0sZ1lwMlfDMq4Q0KrHkJCepJJmoN-avR699apjmqYlDyH5C-ogVwtJuNNKm6qAWKM3SEzXJSEE8hxU5Hud0jNbM-y4gCXGpv1vHG3chjdeCCifq3U5pzBQvuj2pFqnCtVRU5qsArO499G1JYhBzIeOu-Ypj-G17S8tHyI4R0Z19u9spiC9LL0KrXxkQK2bhqALaAKgvbON9bOQXybbE" alt="Testimonial User" />
                <div>
                  <h4 className="text-lg font-bold text-white">Sarah Jenkins</h4>
                  <p className="text-sm text-purple-300 font-medium">CEO of TechFlow</p>
                </div>
             </div>
             <p className="italic text-purple-50 leading-relaxed text-lg">"Bolosign transformed our contract process from days to minutes. Reliable, secure, and incredibly easy to use."</p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 sm:p-12 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-30 lg:hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200 blur-[80px]"></div>
          </div>

          <div className="w-full max-w-md relative z-10 bg-white p-10 rounded-[32px] shadow-xl border border-slate-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Create an Account</h2>
              <p className="text-slate-500 font-medium">Join Bolosign to start signing securely</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                     <span className="material-symbols-outlined text-slate-400 text-[20px]">person</span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all font-medium text-slate-900"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                     <span className="material-symbols-outlined text-slate-400 text-[20px]">mail</span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all font-medium text-slate-900"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                     <span className="material-symbols-outlined text-slate-400 text-[20px]">lock</span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all font-medium text-slate-900"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-purple-700 active:scale-[0.98] transition-all shadow-md hover:shadow-xl mt-8 flex justify-center items-center gap-2 group"
              >
                Sign Up
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              
              <div className="mt-8 text-center pt-6 border-t border-slate-100">
                <p className="text-slate-600 font-medium">
                  Already have an account?{' '}
                  <Link to="/signin" className="text-purple-600 font-bold hover:text-purple-800 transition-colors">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
