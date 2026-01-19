import React from 'react';
import { AlertCircle, Activity, Skull } from 'lucide-react';
import news1 from './assets/drowsy_news_1.png';
import news2 from './assets/drowsy_news_2.png';

const DrowsinessSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 px-20 pt-10 pb-8 flex flex-col overflow-hidden relative mx-auto my-auto shadow-2xl selection:bg-red-500 selection:text-white">
            {/* Header */}
            <div className="flex items-center gap-3 text-red-600 mb-4 font-bold tracking-widest uppercase">
                <AlertCircle size={28} />
                <span>FATAL DANGER : 졸음운전의 위험성</span>
            </div>

            {/* Main Title Area */}
            <div className="mb-8 relative z-10">
                <h1 className="text-4xl font-black leading-tight mb-2 text-slate-900">
                    졸음운전 교통사고 치사율, <br />
                    일반 교통사고의 <span className="text-red-600 text-5xl">약 2배</span>
                </h1>
                <p className="text-xl text-slate-500 font-medium">
                    "깜빡하는 1초 동안 시속 100km 주행 시 <span className="text-slate-900 font-bold underline decoration-red-400 decoration-4 underline-offset-4">약 28m 무방비 질주</span>와 같습니다."
                </p>
            </div>

            {/* Content Grid */}
            <div className="flex-1 grid grid-cols-2 gap-8 relative">

                {/* Stats / Context (Left Side) */}
                <div className="flex flex-col justify-center space-y-3">
                    <DangerCard
                        icon={<Skull size={24} className="text-slate-800" />}
                        title="높은 치사율 (2.7명)"
                        desc="일반 교통사고 치사율(1.4명) 대비 약 2배 높은 사망 위험"
                    />
                    <DangerCard
                        icon={<Activity size={24} className="text-red-500" />}
                        title="봄철/야간 취약"
                        desc="기온 상승으로 인한 춘곤증 및 야간 운행 시 사고 발생 집중"
                    />

                    <div className="mt-2 p-4 bg-red-50 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <AlertCircle size={80} className="text-red-600" />
                        </div>
                        <p className="relative z-10 text-lg font-bold text-red-900 leading-relaxed">
                            "졸음운전은 전방 주시 태만으로 이어져<br />
                            <span className="bg-red-200 px-1">브레이크 없는 충돌</span>을 유발합니다."
                        </p>
                    </div>
                </div>

                {/* News Image Stack (Right Side) */}
                <div className="relative h-full flex items-center justify-center">
                    <div className="absolute -top-6 right-4 w-[85%] z-10 shadow-xl rounded-xl overflow-hidden border border-slate-200 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img src={news1} alt="News 1" className="w-full object-cover" />
                    </div>
                    <div className="absolute top-16 right-20 w-[85%] z-20 shadow-xl rounded-xl overflow-hidden border border-slate-200 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img src={news2} alt="News 2" className="w-full object-cover" />
                    </div>
                </div>

            </div>
        </div>
    );
};

const DangerCard = ({ icon, title, desc }) => (
    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-red-300 transition-all cursor-default group">
        <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-red-100 transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
        </div>
    </div>
);

export default DrowsinessSlide;
