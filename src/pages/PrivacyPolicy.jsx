import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#f1f5f9] min-h-screen text-slate-800 pb-24">
            <Helmet>
                <title>Privacy Policy | Ironvale Works</title>
                <meta name="description" content="Privacy Policy for Ironvale Works describing how we handle and protect data within our execution ecosystem." />
            </Helmet>

            <section className="bg-slate-950 text-[#f1f5f9] pt-24 pb-16 px-4 border-b-4 border-emerald-500 relative">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-emerald-500 text-slate-950 font-mono font-bold px-4 py-2 text-sm mb-6 tracking-widest border-2 border-emerald-400">
                        LEGAL DOCUMENT
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                        Privacy Policy
                    </h1>
                    <p className="font-mono text-slate-400">LAST UPDATED: {new Date().toLocaleDateString()}</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 mt-16 prose prose-slate prose-emerald lg:prose-lg max-w-none">
                <div className="bg-white border-4 border-slate-900 p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6">1. Introduction</h2>
                    <p className="mb-6 font-medium">
                        At Ironvale Works, accessible from <a href="https://ironvale.works" className="text-emerald-600 hover:underline">ironvale.works</a>, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by Ironvale Works and how we use it.
                    </p>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">2. Information We Collect</h2>
                    <p className="mb-4 font-medium">We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 font-medium">
                        <li><strong>Personal Information Provided by You.</strong> We collect names; phone numbers; email addresses; job titles; contact preferences; and other similar information via our project inquiry forms.</li>
                        <li><strong>Project Details.</strong> Information regarding your business context, budgets, and project timelines for the purpose of scoping software development work.</li>
                    </ul>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">3. How We Use Your Information</h2>
                    <p className="mb-4 font-medium">We use the information we collect in various ways, including to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 font-medium">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails relating to your project inquiries</li>
                        <li>Find and prevent fraud</li>
                    </ul>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">4. Third-Party Services & Data Storage</h2>
                    <p className="mb-6 font-medium">
                        We use Google Firebase (Firestore) as our database provider to store inquiry information securely. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your explicit consent, except for trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.
                    </p>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">5. Contact Us</h2>
                    <p className="mb-6 font-medium">
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>ironvale.works</strong>.
                    </p>
                </div>
            </section>
        </div>
    );
}
