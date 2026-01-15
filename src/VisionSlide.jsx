import React from 'react';
import { Globe, TrendingUp, Award, Rocket } from 'lucide-react';

const VisionSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 p-20 flex flex-col justify-between overflow-hidden relative shadow-2xl border-8 border-slate-100">

            {/* 배경 원형 그라데이션 (미래 지향적 느낌) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/50 rounded-full blur-[120px]"></div>

            {/* 상단 섹션 */}
            <div className="relative z-10">
                <div className="flex items-center gap-3 text-indigo-600 mb-4 font-bold tracking-[0.4em]">
                    <Rocket size={24} />
                    <span>FUTURE VISION</span>
                </div>
                <h1 className="text-7xl font-black leading-[1.1] mb-6 text-slate-900">
                    춘천의 안전이<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">대한민국의 표준</span>이 됩니다.
                </h1>
            </div>

            {/* 비전 포인트 3가지 */}
            <div className="relative z-10 grid grid-cols-3 gap-10 mt-10">
                <VisionCard
                    icon={<Globe className="text-indigo-600" size={32} />}
                    title="National Expansion"
                    desc="춘천시 성공 모델을 기반으로 전국 226개 지자체 맞춤형 챌린지 확대"
                />
                <VisionCard
                    icon={<TrendingUp className="text-emerald-500" size={32} />}
                    title="Data Platform"
                    desc="국내 최대 규모의 운전자 행동 데이터셋 구축 및 보험 요율 표준화 선도"
                />
                <VisionCard
                    icon={<Award className="text-yellow-500" size={32} />}
                    title="Smart City Core"
                    desc="자율주행 및 지능형 교통 시스템(ITS)과 연동된 안전 관제 허브로 도약"
                />
            </div>

            {/* 하단 클로징 문구 */}
            <div className="relative z-10 flex justify-between items-end pt-10 border-t border-slate-200">
                <div>
                    <p className="text-slate-500 font-medium mb-1 italic">"안전이 가치가 되는 세상"</p>
                    <p className="text-2xl font-black tracking-tighter uppercase text-slate-800">Chuncheon Safe Drive Package</p>
                </div>
                <div className="text-right">
                    <p className="text-slate-400 text-sm">Presenting by C-Team</p>
                </div>
            </div>
        </div>
    );
};

const VisionCard = ({ icon, title, desc }) => (
    <div className="bg-white/80 border border-slate-200 p-10 rounded-[40px] backdrop-blur-md shadow-lg hover:-translate-y-2 transition-transform duration-500">
        <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default VisionSlide;
