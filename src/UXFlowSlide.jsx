import React from 'react';
import { Smartphone, MapPin, Video, PieChart, ChevronRight } from 'lucide-react';

const UXFlowSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-slate-50 text-slate-900 p-16 flex flex-col justify-between overflow-hidden shadow-2xl border-8 border-slate-100">

            {/* 헤더 섹션 */}
            <div className="flex justify-between items-end border-b-2 border-slate-200 pb-6">
                <div>
                    <h2 className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-widest">User Experience</h2>
                    <h1 className="text-5xl font-black text-slate-800">Premium UX & <span className="text-indigo-600">User Journey</span></h1>
                </div>
                <div className="text-right text-slate-400 font-medium">
                    Mobile-First Strategy
                </div>
            </div>

            {/* 사용자 여정 3단계 카드 */}
            <div className="flex justify-between items-center gap-6 mt-8">

                <StepCard
                    icon={<MapPin className="text-white" />}
                    title="01. Onboarding"
                    desc="Kakao API 기반 주소 입력으로 지역 특화 챌린지 자동 매칭"
                    color="bg-blue-500"
                />

                <ChevronRight className="text-slate-300" size={40} />

                <StepCard
                    icon={<Video className="text-white" />}
                    title="02. Drive Mode"
                    desc="실시간 카메라 피드 및 AI 위험 감지 아이콘 피드백"
                    color="bg-indigo-600"
                />

                <ChevronRight className="text-slate-300" size={40} />

                <StepCard
                    icon={<PieChart className="text-white" />}
                    title="03. Summary"
                    desc="주행 종료 직후 즉각적인 안전 점수 및 리워드 리포트 제공"
                    color="bg-emerald-500"
                />
            </div>

            {/* UI 특징 강조 섹션 (Glassmorphism) */}
            <div className="mt-12 flex gap-12 items-center bg-white p-8 rounded-[40px] shadow-sm border border-slate-200">
                <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
                        <Smartphone className="text-indigo-600" />
                        Glassmorphism & Mobile Optimized
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        최대 너비 430px의 모바일 환경에 최적화된 레이아웃을 적용했습니다.
                        투명도와 블러 효과를 활용한 UI는 복잡한 데이터를 **심미적이고 직관적**으로 전달하여 사용자의 신뢰도를 높입니다.
                    </p>
                    <div className="flex gap-3">
                        <span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-bold text-slate-600 shadow-sm border border-slate-200">iOS/Android</span>
                        <span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-bold text-slate-600 shadow-sm border border-slate-200">Tailwind CSS</span>
                        <span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-bold text-slate-600 shadow-sm border border-slate-200">Lucide Icons</span>
                    </div>
                </div>

                {/* 가상의 폰 화면 목업 느낌 */}
                <div className="w-48 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="text-white font-black italic">UI PREVIEW</span>
                </div>
            </div>
        </div>
    );
};

const StepCard = ({ icon, title, desc, color }) => (
    <div className="flex-1 bg-white p-8 rounded-[32px] shadow-lg border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
            {icon}
        </div>
        <h4 className="text-xl font-black mb-3 text-slate-800">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
);

export default UXFlowSlide;
