import React from 'react';
import { AlertTriangle, ShieldCheck, MapPin } from 'lucide-react';

const IntroSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 px-20 pt-16 pb-12 flex flex-col justify-between overflow-hidden relative mx-auto my-auto shadow-2xl selection:bg-red-500 selection:text-white">
            {/* 배경 장식 (춘천 지도 실루엣 느낌) */}
            <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none text-slate-900">
                <MapPin size={600} strokeWidth={0.5} />
            </div>

            {/* 상단: 문제 정의 */}
            <section className="relative z-10">
                <div className="flex items-center gap-3 text-red-600 mb-6 font-bold tracking-widest uppercase">
                    <AlertTriangle size={32} />
                    <span>PAIN POINT : 도로 위의 시한폭탄</span>
                </div>
                <h1 className="text-6xl font-black leading-tight mb-8 text-slate-900">
                    당신의 1초가 <span className="text-red-600">평생의 후회</span>가 <br />
                    되지 않도록.
                </h1>
                <div className="grid grid-cols-3 gap-8">
                    <StatBox label="졸음운전 치사율" value="1.7배" sub="일반 사고 대비" />
                    <StatBox label="주시태만 사고 비중" value="67%" sub="고속도로 사고 원인 1위" />
                    <StatBox label="춘천시 사고 감소 목표" value="-20%" sub="2027년까지의 과제" />
                </div>
            </section>

            {/* 하단: 솔루션 제시 */}
            <section className="bg-slate-50 border border-slate-200 p-10 rounded-[40px] relative z-10 shadow-lg hover:shadow-xl transition-shadow duration-500 cursor-default">
                <div className="flex items-start justify-between gap-10">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-4 flex items-center gap-4 text-slate-900">
                            <ShieldCheck className="text-emerald-500" size={40} />
                            춘천 안심 드라이브 패키지
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Video Swin Transformer AI 모니터링으로 부주의를 <span className="text-slate-900 font-bold underline decoration-emerald-400 decoration-4 underline-offset-4">실시간 차단</span>하고,
                            안전 점수를 <span className="text-slate-900 font-bold underline decoration-emerald-400 decoration-4 underline-offset-4">지역 화폐와 보험 혜택</span>으로 환전합니다.
                        </p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <div className="bg-emerald-500 text-white px-6 py-3 rounded-full font-black text-xl shadow-lg shadow-emerald-500/30">
                            AI + ECONOMIC REWARD
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const StatBox = ({ label, value, sub }) => (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-red-100 hover:bg-red-50 transition-all duration-300 group">
        <p className="text-slate-500 text-sm mb-1 font-bold group-hover:text-red-500 transition-colors">{label}</p>
        <p className="text-4xl font-black text-slate-900 mb-1">{value}</p>
        <p className="text-xs text-slate-400 group-hover:text-slate-500 transition-colors">{sub}</p>
    </div>
);

export default IntroSlide;
