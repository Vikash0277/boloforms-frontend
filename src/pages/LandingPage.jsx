import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 text-slate-900 font-sans selection:bg-purple-200 selection:text-purple-900 min-h-screen">
            <Navbar />
            <main className="pt-24">
                <section className="relative px-6 py-20 max-w-[1280px] mx-auto overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="z-10">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">Sign documents in seconds, anywhere</h1>
                            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
                                The fastest, most secure way to sign, send, and manage digital documents. Streamline your workflow with bank-grade encryption and legal validity.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => navigate('/signup')} className="bg-purple-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-md hover:bg-purple-700 hover:shadow-lg transition-all active:scale-95 cursor-pointer">Get Started for Free</button>
                                <button className="bg-white border border-slate-300 text-slate-700 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">View Demo</button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -z-10 inset-0 bg-purple-200 blur-[100px] rounded-full opacity-60"></div>
                            <div className="p-2 rounded-2xl shadow-2xl bg-white/70 backdrop-blur-md border border-slate-200/80">
                                <img className="rounded-xl w-full h-auto object-cover" data-alt="A high-end, professional studio shot of a modern tablet displaying a digital document for signing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq6cAAZsZB2Gmm7kJfDkoRUm8abvVj_hpW5hDfWBknlE_dvgeDuoSD6iNRLvPzb-zWuFb9gxg1H_usTqhNMAHQ9JTa1wtqs05o8xX4aHDHeihSljtq0A_WCEr4TzDbtDyEJcx2Vuufj3zhzWVTOBELpdRMo_AW3EJy8lvJfisWtTdnng22uFP9r3J1dmNtTfJfq8N71hnIf36iwK529w3rJL-sN2U_Yxw1pw6B0Nuu09qKl2ENQUq9-K_XjOO5o65JIsWp4anWJw8"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-slate-100 py-12">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Trusted by over 10,000+ businesses</p>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                                <span className="material-symbols-outlined text-purple-600 text-[18px]">verified_user</span>
                                <span className="text-sm font-semibold text-slate-700">Security First: SOC2 & GDPR Compliant</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale contrast-125">
                            <img className="h-8 object-contain" data-alt="Lumina logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF4DQf5klnYOztmeFDCIKX6B5t32aQnQlH0xRHiAkC7_6jy2NmwD5N1wh7oKLt77yV238107K8uDnHY_jDOes6S1QwdyUtE2gbo2SqfYLLkPSHPVP7QHuroImHRiIAwDW_ZZK8Kwfd0h9K0mZ0DQZLs_bXgiCW1ndqQ_21EUjqqop6GdO8c94YbReT4SVSyZi3zF1sXDOqPpybXDMIVn6PV97An6X67tN60vFQUBsOcNsLqUAeFM77l0GtsI-GVvsLzmBdx8k47no"/>
                            <img className="h-8 object-contain" data-alt="Nexus logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA95bidtO6FhGScWd_yqmUOIh-1jqPXfcIBIGOi0A4CRZvEcMbkQa0CY3IU9itWF7NbA0OvapZ7PKT-2NGm1_6hLVTn9mSsor40pvYy8a0OtFTe9XNUaKxQAtVK7LFv844sgfc3BHDcIdQrHOataA1qAO3BkwFEUVMbdmaBjJRTxfMbVQRK-iBNe9ndI-Rlc2vy9nGJXu9xLxKrMgs1KTXnDDC--i4kGMhrDAF74G-8bxmAirwa654i-kFxE5DZd_mjIyhoQUkyTm4"/>
                            <img className="h-8 object-contain" data-alt="Equitas logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVqmSNcXQnYfRLbxZi-e3ktFb1mptPCCEQ5pXB7UD55L18QR-6g23Q9sqG03bHwTmVrKt0CkkLTemXQRuu2sfQ9RYs4V-aVTsX4l7aw9zgTZ4UOAUDVo0B0g30qlKwan77mPYyRVHNZQEPon7K0FY7kktsvjBFmZlFADsE3-Fc-DHOMskkFglHbCvAvAXR-sg3dhd_-TreuqvKOMecoMqX2cAc_7uq9MPimje9iN6I00KeRALhPOkmz_RdUUOCdzkZ1OCOoARab3Q"/>
                            <img className="h-8 object-contain" data-alt="Vitalis logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDifFkXvxjoff2ufBPIlSzvi1QGMqRZ9c9EYnVqQZXNNK1qbmd_8J1ipkeldMx5PwnfWy30IhAz2HFAI-1liDzqUUk_33Snsqz95mekuqTvQuiAVZZEKzWbXPHlkXJiZHYkT6nDDPWhRyjrJPn1JvhFYrXPrqWEx45HQlp4s_N6zQ0QUSn0sV56Y0powYL9rbuCuK1CS3NcnUzUGr3wmqwt55NV5BVyWcPpfM_5qtgAD8pdHECD_n_j4NEdAR0Ciw0clKZQVOnLbCI"/>
                            <img className="h-8 object-contain" data-alt="Veritas logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGZQNxpE6Buq1zeUoBvxrK8oGewzLf-zDWHKJgRjeeU17zE6_MIFfPzeuQ25-zTyHn-xsbdDSNU3QrsOmwW1q3MOeUbWR06gqHY273s4TkH05XriCxg68DZYwBUr9idzY1zpuWjcM2Kc5LYD6qCm7E6X2FPszFxQ6nOaxSAOOFhbvqQArjXl5SYf8eVsdSEu6CRfOy3W2yHDoSIR2wBfr8Bw5YYuX5zOQeQS9sNxXZJmPpjxuHd38J1Sn44nDORmV_DUz-KV4iMXA"/>
                        </div>
                    </div>
                </section>
                <section className="py-20 max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Sign in 3 Simple Steps</h2>
                        <p className="text-lg text-slate-600">The most intuitive workflow in the industry.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-all shadow-sm">
                                <span className="material-symbols-outlined text-purple-600 text-[40px]">upload_file</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">1. Upload</h3>
                            <p className="text-slate-600 leading-relaxed">Select any PDF, Word doc, or image to get started immediately.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-all shadow-sm">
                                <span className="material-symbols-outlined text-purple-600 text-[40px]">draw</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">2. Sign</h3>
                            <p className="text-slate-600 leading-relaxed">Draw, type, or upload your legal signature in seconds with precision.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-all shadow-sm">
                                <span className="material-symbols-outlined text-purple-600 text-[40px]">send</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">3. Send</h3>
                            <p className="text-slate-600 leading-relaxed">Dispatch secure links to recipients instantly and track their status.</p>
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-slate-100">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div className="md:col-span-8 p-10 rounded-3xl flex flex-col justify-between overflow-hidden relative bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="z-10">
                                    <span className="material-symbols-outlined text-purple-600 mb-4 text-[32px]">devices</span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Mobile Signing</h3>
                                    <p className="text-slate-600 max-w-md leading-relaxed">Sign on any device, anywhere. Our responsive interface ensures a flawless experience on smartphones and tablets.</p>
                                </div>
                                <div className="mt-8 -mb-10 -mr-10">
                                    <img className="w-3/4 ml-auto rounded-tl-2xl shadow-xl border border-slate-200" data-alt="Smartphone signing UI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIQLYJmeQE8-kDEg60y8dbnphlKMRNG60qCJhcN7pEPtR99tPcod9nsvmVLrXZkbxjHyqkzXqnFxJQ9J0VGL1PABMrcyQw50P_sqrpxEf1W0RadDCaSHO7A6gvUp5zobIGhiEJDe_fXHu0ZQUwcjNanjNS32hqgnqZqxg85beJ-LLSfPyXM6KZfjULNHQsQekfewtTpd3HwEkjsXLtflY0uRowLAliOpWUfNxoY0kYKug1YuVt_HFY86V6s3y06wcjQBz3I1MzML4"/>
                                </div>
                            </div>
                            <div className="md:col-span-4 bg-purple-600 text-white p-10 rounded-3xl flex flex-col justify-center shadow-md">
                                <span className="material-symbols-outlined text-purple-200 mb-4 text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                                <h3 className="text-2xl font-bold mb-3">Bank-Grade Security</h3>
                                <p className="text-purple-100 leading-relaxed">SSL encryption and secure data storage protect your sensitive documents at every step.</p>
                            </div>
                            <div className="md:col-span-4 p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <span className="material-symbols-outlined text-purple-600 mb-4 text-[32px]">history_edu</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Audit Trails</h3>
                                <p className="text-slate-600 leading-relaxed">Track every change with tamper-proof logs and court-admissible certificates of completion.</p>
                            </div>
                            <div className="md:col-span-8 p-10 rounded-3xl flex flex-col md:flex-row gap-10 items-center bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-1">
                                    <span className="material-symbols-outlined text-purple-600 mb-4 text-[32px]">groups</span>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Team Management</h3>
                                    <p className="text-slate-600 leading-relaxed">Manage users and permissions across your organization with centralized administrative controls.</p>
                                </div>
                                <div className="flex-1">
                                    <img className="w-full rounded-2xl" data-alt="Team management illustration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwM7BeCResdB409vZzUxRoS4WrDE3CIFCOGOq6K_gZuACrmSTC0YrIs2wpNZrHXmTKb7314tGtf2H7PNq3DnHnRrGocjttjVkEhtYRPPfzrHMgkBVIdsjBcdlQckhiv3WifgD_sfig53SmhgaFipedx79ZBV9n28wJVA0oQaG2EGh-kyFc_W5pL8Ip9owjtD_q-tSquoewmqZWVG7mYoKep3r3ETzvoqw5yO7t8ihUSoH5-bTA3pJ-ltQ7xgPAwuivn1Jq-rFBBK4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 max-w-[1280px] mx-auto px-6">
                    <div className="bg-purple-50 border border-purple-100 p-16 rounded-[40px] text-center relative overflow-hidden">
                        <span className="material-symbols-outlined text-purple-200 absolute top-4 left-8 text-[120px]"></span>
                        <div className="relative z-10">
                            <p className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 max-w-4xl mx-auto italic leading-tight">
                                "Bolosign transformed our contract process from days to minutes. Reliable, secure, and incredibly easy to use."
                            </p>
                            <div className="flex flex-col items-center">
                                <img className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-white shadow-md" data-alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGPkZjsmPpktiT8flNt0kxA13_atlt53LCZK2hCKVTRN9vZ7gIiDONay4U0sZ1lwMlfDMq4Q0KrHkJCepJJmoN-avR699apjmqYlDyH5C-ogVwtJuNNKm6qAWKM3SEzXJSEE8hxU5Hud0jNbM-y4gCXGpv1vHG3chjdeCCifq3U5pzBQvuj2pFqnCtVRU5qsArO499G1JYhBzIeOu-Ypj-G17S8tHyI4R0Z19u9spiC9LL0KrXxkQK2bhqALaAKgvbON9bOQXybbE"/>
                                <p className="text-lg font-bold text-slate-900">Sarah Jenkins</p>
                                <p className="text-sm font-medium text-slate-500">CEO of TechFlow</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 px-6">
                    <div className="max-w-[1280px] mx-auto bg-slate-900 text-white p-16 rounded-[40px] text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-transparent"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to streamline your workflow?</h2>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Join 10,000+ businesses who trust Bolosign for their digital signing needs. Start your 14-day free trial today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button onClick={() => navigate('/signup')} className="bg-white text-slate-900 font-bold text-lg px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg active:scale-95 cursor-pointer">Start Free Trial</button>
                                <button className="bg-transparent border-2 border-slate-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer">Schedule a Demo</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-white border-t border-slate-200">
                <div className="max-w-[1280px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <img alt="Bolosign Logo" className="h-8 w-8 object-contain" src="data:image/png;base64,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"/>
                            <span className="text-xl font-bold text-slate-900">Bolosign</span>
                        </div>
                        <p className="text-slate-500 max-w-sm">© 2024 Bolosign Inc. All rights reserved. Legal validity guaranteed across 180+ countries.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-slate-900 mb-1">Product</p>
                            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">Features</a>
                            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">Integrations</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-slate-900 mb-1">Resources</p>
                            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">Security</a>
                            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">Contact Support</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-slate-900 mb-1">Legal</p>
                            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">Privacy Policy</a>
                            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">Terms of Service</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-slate-900 mb-1">Company</p>
                            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">About Us</a>
                            <a className="text-slate-600 hover:text-purple-600 transition-colors" href="#">Careers</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;