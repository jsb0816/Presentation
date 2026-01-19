import React from 'react';
import { UserCheck, Eye, Activity, Flag, Gift, ChevronRight } from 'lucide-react';

const UserFlowSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 p-16 flex flex-col justify-between overflow-hidden shadow-2xl border-8 border-slate-100">

            {/* 헤더 */}
            <div className="border-b-4 border-indigo-600 pb-4">
                <h2 className="text-sm font-mono text-indigo-600 mb-2 tracking-[0.3em] font-bold">SERVICE FLOW</h2>
                <h1 className="text-5xl font-black text-slate-900">WorkFlow</h1>
            </div>

            {/* 5단계 타임라인 흐름 */}
            <div className="flex justify-between items-start gap-2 relative mt-8 flex-1">
                {/* 연결 선 */}
                <div className="absolute top-12 left-10 right-10 h-1 bg-slate-100 -z-10"></div>

                <FlowStep
                    num="01"
                    icon={<UserCheck />}
                    title="Onboarding"
                    desc="Kakao API 로 주소 저장 → 주소 기반 챌린지 생성 & 대상자 등록"
                />
                <StepArrow />
                <FlowStep
                    num="02"
                    icon={<Eye />}
                    title="Monitoring"
                    desc="Swin Transformer AI 구동 → 졸음, 휴대폰 사용, 물건 찾기 시 경고 및 점수 차감"
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
                    desc="주행 종료 → 최종 점수, 주행 거리, 위험 이벤트 발생 횟수 알림"
                />
                <StepArrow />
                <FlowStep
                    num="05"
                    icon={<Gift />}
                    title="Retention"
                    desc="마이페이지 → 챌린지 상품권 QR & 보험료 할인 혜택 확인"
                />
            </div>

            {/* 하단 특징 강조 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex gap-4 items-center shadow-sm justify-center">
                <div className="w-12 h-12 flex items-center justify-center shrink-0"></div>
                <p className="text-2xl font-medium text-slate-600 leading-relaxed text-center">
                    "사용자가 해당하는 지역을 설정하면, 시스템이 해당 지역에서 진행하는 <span className="text-indigo-600 font-bold">챌린지</span>를 준비합니다"
                </p>
            </div>
        </div>
    );
};

const FlowStep = ({ num, icon, title, desc }) => (
    <div className="flex-1 flex flex-col items-center group">
        <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-[30px] shadow-lg flex items-center justify-center mb-6 group-hover:border-indigo-500 group-hover:shadow-indigo-200 transition-all duration-300 relative bg-white z-10">
            <span className="absolute -top-3 -left-3 bg-slate-800 text-white text-[20px] px-2 py-1 rounded-md font-bold shadow-md">{num}</span>
            <div className="text-indigo-600 transform group-hover:scale-110 transition-transform">{icon}</div>
        </div>
        <h4 className="text-2xl font-black mb-3 text-slate-800 group-hover:text-indigo-600 transition-colors">{title}</h4>
        <p className="text-xl text-slate-500 leading-relaxed text-center px-2 group-hover:text-slate-700 transition-colors">{desc}</p>
    </div>
);

const StepArrow = () => (
    <div className="pt-10">
        <ChevronRight className="text-slate-300" size={24} />
    </div>
);

export default UserFlowSlide;
