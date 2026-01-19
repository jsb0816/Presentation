import React from 'react';
import { Landmark, Briefcase, Users, TrendingDown, Repeat } from 'lucide-react';

const BusinessModelSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 p-16 flex flex-col justify-between overflow-hidden relative shadow-2xl border-8 border-slate-100">
            {/* 배경 장식 */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl"></div>

            {/* 헤더 */}
            <div className="relative z-10 border-b border-slate-200 pb-4">
                <h2 className="text-sm font-mono text-emerald-600 mb-2 tracking-[0.3em] font-bold">BUSINESS MODEL & SOCIAL VALUE</h2>
                <h1 className="text-5xl font-black text-slate-900">Sustainable <span className="text-emerald-500 font-normal">Safety Ecosystem</span></h1>
            </div>

            {/* 중앙 순환 구조 섹션 */}
            <div className="relative z-10 grid grid-cols-3 gap-10 my-8">
                <BMLogicCard
                    icon={<Landmark size={32} className="text-emerald-600" />}
                    actor="지자체"
                    shortTerm="지역 상품권/주차권 지원"
                    impact="사고 행정 비용 절감 및 지역 경제 활성화"
                />
                <BMLogicCard
                    icon={<Briefcase size={32} className="text-blue-600" />}
                    actor="보험사"
                    shortTerm="데이터 기반 보험료 할인"
                    impact="우량 고객 확보 및 사고 손해율 감소"
                />
                <BMLogicCard
                    icon={<Users size={32} className="text-yellow-500" />}
                    actor="사용자"
                    shortTerm="실시간 경제적 리워드"
                    impact="안전 운전 습관 형성 및 고정비 절감"
                />
            </div>

            {/* 하단 요약 슬로건 */}
            <div className="relative z-10 bg-gradient-to-r from-emerald-50 to-blue-50 border border-slate-200 px-10 py-6 rounded-full flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-6">
                    <Repeat className="text-emerald-500 animate-spin-slow" size={40} />
                    <div>
                        <p className="text-2xl font-bold tracking-tight text-slate-800">
                            "지자체는 <span className="text-emerald-600 font-black decoration-emerald-200">예산</span>을 아끼고,
                            보험사는 <span className="text-blue-600 font-black decoration-blue-200">손해</span>를 줄이며,
                            사용자는 <span className="text-yellow-600 font-black decoration-yellow-200">이득</span>을 봅니다"
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
                    <TrendingDown className="text-red-500" />
                    <span className="font-bold text-slate-700">Social Cost Reduction</span>
                </div>
            </div>
        </div>
    );
};

const BMLogicCard = ({ icon, actor, shortTerm, impact }) => (
    <div className="bg-slate-50 border border-slate-200 p-8 rounded-[40px] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">{icon}</div>
        <h3 className="text-3xl font-black mb-4 text-slate-900 group-hover:text-emerald-600 transition-colors">{actor}</h3>
        <div className="space-y-4">
            <div>
                <p className="text-sm uppercase text-slate-400 font-bold mb-1">Incentive</p>
                <p className="text-lg font-medium text-slate-700">{shortTerm}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
                <p className="text-sm uppercase text-slate-400 font-bold mb-1">Social Value</p>
                <p className="text-lg font-medium text-slate-500 italic">"{impact}"</p>
            </div>
        </div>
    </div>
);

export default BusinessModelSlide;
