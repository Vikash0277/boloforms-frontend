import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        navigate("/");
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-slate-200">
            <nav className="flex items-center justify-between px-6 py-4 max-w-[1280px] mx-auto">
                <div 
                    className="flex items-center gap-3 cursor-pointer group" 
                    onClick={() => navigate('/')}
                >
                    <img alt="Bolosign Logo" className="h-8 w-8 object-contain group-hover:scale-105 transition-transform" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAI8UlEQVR4AeycC2xb1RnHv3Pt2DR2XqOQkLZIk1YKXUdbQJs2QLSlbpI2ddoJqrLu0Y1pmjT2KCoam4Q2iUlTx9qtY9NAG2slxh5lapu0asiTaIhqbGqbPpg2aQxI49Q80thJ7MROfA/f/wansePrtx1f7Kv7+dx7zne+c77fPY97z72JQilsTofL6XQMPu90uM62bHINtDgG/RxKI4tzk8vndLje5vCMk31jX7amgIQSAtxyj6eGjT7V4nCNCUGtQogvCkFruZBlJMQiDg29C6Jy9udmDu8Q7Bs709biGPTAZ/jO53F3XYAPrpQWp2PwUVP5+BtsYS8JsnNYHLsQVezoXvjesmlwD1jwecw9JkDn3e9VBJa42vmK7BckamLmLILIGd/FgcDSoSNgEsvleQC33z94C9mC/xJCbIiVoRjjBFELM/mnc71rRbT/EQAZ3vUhhU5yhnmK0RmL7ZyZ3CrM1LZ13dDiub7PAly3TppVkzjBLW/5XIXS8RwCgm4RZfI4WIVjZwFWWa7s5cjPspT2OASEoLs/ZKVpaQDRLCXJH2oxpZ+EBJjVD5qartwARQ2gUqb+hPt4BSJKkpgAs6q0TIeehKbS1DRcyfd4X8VJSZInIAXtBjvFHArw7YqwJJ+1pAkCgoQV7BRFqo2IKCLJmqtghzFwTdYsFp+hNQxQ1BWf39nyWNQpUsgSwDR5gp2CwTDN/EWfDey4Cxc9h4wAlABmhI8Sr0hnaP8jn/0j3QLr6k0EyeVVNATA6hqFvvdYDR3+Sx0d76hPWp45VEuQPd+vIdjIBUhDAHz4m1W0buOitCHct2ERwUbRArzrM9aMff/cvdeR1SoythNtwBAtcCoYXe3Uz00mQWZz6vkS5TAEwAv9gUR+JJXu88mk9FJRMgTA3//WS309E+T1qqn4lhddQwD0jKj0y5+N0Fd2uGlbw9CsbG8cou4Of15A6RViCICxKs8vd+hbe6ppY0N5rOS8xRkSYKHAw1UyHMBCgmdIgI8k6LY9eR4TDdMC0fIeebSa7o8z5mFCefqABw0jb2IIgICXaMIAvF/nGR6uUsEDLGR4BQ+w0OEVNMBM4I2Nzn9iiRUHAJlKwXbhRLNt10t+0hvzzp+b/+zcf3Z+XKbwkD93AGE9Tfl2gtkW8H7zC/3ZFs/Of++d0J6d8Rj4cpefEJdmdeJmKyiA6LbJ3KrEgwdvAe3AvhHt2Xn3Tjcd/LmHvJ753Rq6mUpBAcyk22YKIt38BQEwWy0vXQiZ5CsIgN/ZG39VZaFukpMBu+AAv/tYNa3fqL8kVcjwAHhBAeLxLB48VNDvy83gD9vZkAUDCHiORv2WF3bO+Xm7tnAaPi+0cEEA4lYlGXhhWNBFnvB5IYV5B4iWl84yPPIgbyHBQ13yChCtCK0JBccSLIb28lNDrDTEIS9s4LhQJG8AMduiFek5/nK3n7AY+it+anilb0JPTXuJBFu6CnlOyAtAOBxvtgW8g09de7bd/9MRigcRtmAzz6xiFhcBMKZGhpFwFA7rmYmGF9YzCsScAkwXnpEg5gxgpvCMAjEnAHftrkz4eDZ3zAvD0gvRnXs69T/hwBDx0JcX5m8lsw7QZhP0wE6bHgvCmKe3kqybiROe3u+JO7E8sNOek+//uOi4e9YBms2ChBAxCwW8VFpetBG0RL3ZGd//KaboHLk/zzpAfIIW62YYqyqZwAujAMRY3RnL/BP+7H//Fy5XL8w6QBSEm+E/POulQEDS5ISk557x6r4Agj66/a0rLXTnp610z32LtJvl5m02evAhuyY4xk040qDTecpPzx+KtJ9omR/l5EJyAhAVbTvqo4d3uelrX3DTiWM+REVIRYVCKz9loYYt5bSVV1zW3Gml5SsstPRmMy2+0UR2TjfxcADBMeKQBp21d1mprEyhFw6P0r4nr2rjaoTxPJ7kDCB8GB+T5J/TrfCnBqtWW6hpq422cAu7fY2Vaj6W/sBVblNoBbfc5m12amy2EWxXVefUJbgVIVkvTWGL+BreXiEYjkK1dSZafYeVmltsM07ebqVcOKldHLaNi4OyVq+10o21Jq0OqAvqRDnY2N3sWF3GXW+z00Y7dlXQ9h12Qqto2GKj9Y5yuu2TFrJXxi/qHXeILp0P0GunJ6mPFxZOtfnob38e0wTHiEMadKBLcTaUddsqC23YVM5DhE2rC+q080sVhDqirnGyp5QU36sUTK1abaXKquTNjQyH6D+vBzVYR14YI7z8vnQhSG++MUXuKyEa9ao0PU2a4BhxSIMOdF/80xj19fjpv/8OEmxRkhvqiLqG1TMNFUkyN988RNUsMClp4K0peu3VSTp2ZJw6eCbF5xYAo6bx2iMUInIPhejcmYBmCzZhe4DLCPLsH1V8Tk7BThFSuLNhHV1rfFSlYFDSVW5dcOTSBe6SDKzzlI+OvThOp1+ZpDf/P6Xd3mSjzLk2cMsE2yjjKF+grnafdrFe5zqgLqgT6ub1qHSxPzttBuy4z8msALw8ME0nW3109K/jhPs0OHLpPHdJBnZ1OI0mNpdOGsfD76vaxbrIdUBdUCfUrf2EjwYv89iQhs35WaSbAVI/lbZ0CfQrqlBeSjd3seeTqnJcmTZZezEYFjuM1P2XQZfnph6lvf36USHpMJW21AhIOnTmjJjCGEhSLfuRlHIyNQvFqw1WQbPpCRDQALb11L7DJ8+ylPYkCAgSB9vbb3oPqhpAHJDf+gSPhRe049KPLgFuff/wTtX/OKwwC7Dt1RvG1OnrNhPJwXBiKYwkIEn+z6RSc1+fmB3uZgFC9WTvYhep5s28rjuK85JcIyAlva9MlzUe61k6fC2W5v/jndbuuosBoX6clU6zFOK+EHXqDijqiuO9tfiv7hHlR7TAcEpHx7KrrZ319/ID2NeZPCaYcFJxhZLelar4BrNoAJNYzscEOKMo1BOdS54jv2U5SdrHMj4TXwS/UnrZ333Sb/lEW3f974gEtyWKucUBOKOPyaW1a8njLHhz7eRZ6I88Rp7lljnAoX9Gy8C/UuJTsMvszznNN0ktrV1Lq9nfx+F7Is8+AAAA///w2ZdAAAAABklEQVQDABiF+1xRpOjcAAAAAElFTkSuQmCC"/>
                    <span className="text-2xl font-bold text-gray-900">Bolosign</span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-semibold text-gray-800 hover:text-purple-600 transition-colors" href="#">Features</a>
                    <a className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors" href="#">How it Works</a>
                    <a className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors" href="#">Pricing</a>
                </div>
                <div className="flex items-center gap-4">
                    {token ? (
                        <>
                            <button 
                                onClick={() => navigate('/dashboard')} 
                                className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                            >
                                Dashboard
                            </button>
                            <button 
                                onClick={handleLogout} 
                                className="text-sm font-semibold bg-red-50 text-red-600 px-5 py-2.5 rounded-lg hover:bg-red-100 active:scale-95 transition-all shadow-sm"
                            >
                                Log out
                            </button>
                        </>
                    ) : (
                        <>
                            <button 
                                onClick={() => navigate('/signin')} 
                                className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                            >
                                Log In
                            </button>
                            <button 
                                onClick={() => navigate('/signup')} 
                                className="text-sm font-semibold bg-purple-600 text-white px-5 py-2.5 rounded-lg hover:bg-purple-700 active:scale-95 transition-all shadow-sm hover:shadow-md"
                            >
                                Get Started
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}