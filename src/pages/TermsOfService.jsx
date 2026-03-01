import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#f1f5f9] min-h-screen text-slate-800 pb-24">
            <Helmet>
                <title>Terms of Service | Ironvale Works</title>
                <meta name="description" content="Terms of Service for Ironvale Works outlining the rules and guidelines for using our website and services." />
            </Helmet>

            <section className="bg-slate-950 text-[#f1f5f9] pt-24 pb-16 px-4 border-b-4 border-emerald-500 relative">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-emerald-500 text-slate-950 font-mono font-bold px-4 py-2 text-sm mb-6 tracking-widest border-2 border-emerald-400">
                        LEGAL DOCUMENT
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                        Terms of Service
                    </h1>
                    <p className="font-mono text-slate-400">LAST UPDATED: {new Date().toLocaleDateString()}</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 mt-16 prose prose-slate prose-emerald lg:prose-lg max-w-none">
                <div className="bg-white border-4 border-slate-900 p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6">1. Agreement to Terms</h2>
                    <p className="mb-6 font-medium">
                        By accessing our website at <a href="https://ironvale.works" className="text-emerald-600 hover:underline">ironvale.works</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">2. Services Rendered</h2>
                    <p className="mb-4 font-medium">Ironvale Works provides custom software development, web applications, and marketing website design. The specifics of any project, including deliverables, timelines, and costs, will be outlined in a separate Statement of Work (SOW) or project agreement.</p>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">3. Ironclad Guarantee & Refunds</h2>
                    <p className="mb-6 font-medium">
                        We offer a full refund guarantee on our services. If you are not satisfied with the work provided, you may request a refund according to the terms specified in your individual project agreement. Once a project is completed and handed over, or if work has progressed significantly past the agreed-upon milestones without issue, refund requests are evaluated on a case-by-case basis.
                    </p>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">4. Intellectual Property</h2>
                    <p className="mb-6 font-medium">
                        Unless otherwise stated in a project agreement, the code, designs, and intellectual property created uniquely for a client during a project belong to the client upon full payment. The materials contained on the Ironvale Works website (text, graphics, logos) are protected by applicable copyright and trademark law and belong to Ironvale Works.
                    </p>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">5. Limitations of Liability</h2>
                    <p className="mb-6 font-medium">
                        In no event shall Ironvale Works or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ironvale Works' website or the software produced, even if Ironvale Works or a Ironvale Works authorized representative has been notified orally or in writing of the possibility of such damage.
                    </p>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">6. Revisions and Errata</h2>
                    <p className="mb-6 font-medium">
                        The materials appearing on Ironvale Works' website could include technical, typographical, or photographic errors. Ironvale Works does not warrant that any of the materials on its website are accurate, complete or current. Ironvale Works may make changes to the materials contained on its website at any time without notice.
                    </p>

                    <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 mt-10">7. Governing Law</h2>
                    <p className="mb-6 font-medium">
                        These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>
                </div>
            </section>
        </div>
    );
}
