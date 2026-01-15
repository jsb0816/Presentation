import React from 'react';
import { UserCheck, Eye, Activity, Flag, Gift, ChevronRight } from 'lucide-react';

const UserFlowSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 p-12 flex flex-col justify-between overflow-hidden shadow-2xl border-8 border-slate-100">

            {/* 헤더 */}
            <div className="flex justify-between items-center border-b-4 border-indigo-600 pb-4">
                <h1 className="text-4xl font-black italic text-slate-900">ON-ROAD <span className="text-indigo-600 font-normal underline decoration-indigo-200">USER JOURNEY</span></h1>
                <div className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-sm font-bold border border-indigo-100">
                    Step-by-Step Experience
                </div>
            </div>

            {/* 5단계 타임라인 흐름 */}
            <div className="flex justify-between items-start gap-2 relative mt-10">
                {/* 연결 선 */}
                <div className="absolute top-12 left-10 right-10 h-1 bg-slate-100 -z-10"></div>

                <FlowStep
                    num="01"
                    icon={<UserCheck />}
                    title="Onboarding"
                    desc="Kakao API 주소 분석 → [춘천 안심 챌린지] 테마 및 상품권/주차권/주유권 자동 배치"
                />
                <StepArrow />
                <FlowStep
                    num="02"
                    icon={<Eye />}
                    title="Monitoring"
                    desc="Swin Transformer AI 구동 → 졸음·휴대폰 감지 시 즉각 경고 및 실시간 점수 차감"
                />
                <StepArrow />
                <FlowStep
                    num="03"
                    icon={<Activity />}
                    title="Analytics"
                    desc="GPS + T-Map API 연동 → 제한 속도 위반 실시간 판단 및 대시보드 업데이트"
                />
                <StepArrow />
                <FlowStep
                    num="04"
                    icon={<Flag />}
                    title="Summary"
                    desc="주행 종료 모달 → 위험 이벤트 통계 확인 및 95점 달성 시 챌린지 축하"
                />
                <StepArrow />
                <FlowStep
                    num="05"
                    icon={<Gift />}
                    title="Retention"
                    desc="마이페이지 → 획득 상품권 QR 사용 및 보험료 15% 감면 상승 곡선 관리"
                />
            </div>

            {/* 하단 특징 강조 */}
            <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex gap-4 items-center shadow-sm">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">Q</div>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                        "사용자가 춘천 시민임을 인증하면, 시스템은 즉시 <span className="text-indigo-600 font-bold">지역 특화 보상 모듈</span>을 로드합니다."
                    </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex gap-4 items-center shadow-sm">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">A</div>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                        "AI와 GPS의 교차 검증을 통해 <span className="text-emerald-600 font-bold">가장 객관적인 안전 점수</span>를 도출하고 즉각적인 리워드를 제공합니다."
                    </p>
                </div>
            </div>
        </div>
    );
};

const FlowStep = ({ num, icon, title, desc }) => (
    <div className="flex-1 flex flex-col items-center group">
        <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-[30px] shadow-lg flex items-center justify-center mb-6 group-hover:border-indigo-500 group-hover:shadow-indigo-200 transition-all duration-300 relative bg-white z-10">
            <span className="absolute -top-3 -left-3 bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md font-bold shadow-md">{num}</span>
            <div className="text-indigo-600 transform group-hover:scale-110 transition-transform">{icon}</div>
        </div>
        <h4 className="text-lg font-black mb-3 text-slate-800 group-hover:text-indigo-600 transition-colors">{title}</h4>
        <p className="text-[11px] text-slate-500 leading-relaxed text-center px-2 group-hover:text-slate-700 transition-colors">{desc}</p>
    </div>
);

const StepArrow = () => (
    <div className="pt-10">
        <ChevronRight className="text-slate-300" size={24} />
    </div>
);

export default UserFlowSlide;
