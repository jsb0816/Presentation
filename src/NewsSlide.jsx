import React from 'react';
import { Target, TrendingDown, AlertTriangle } from 'lucide-react';
import news1 from './assets/news_1.png';
import news2 from './assets/news_2.png';
import news3 from './assets/news_3.png';

const NewsSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 px-20 pt-12 pb-10 flex flex-col overflow-hidden relative mx-auto my-auto shadow-2xl selection:bg-red-500 selection:text-white">
            {/* Header */}
            <div className="flex items-center gap-3 text-red-600 mb-6 font-bold tracking-widest uppercase">
                <Target size={28} />
                <span>WHY CHUNCHEON : 시급한 해결 과제</span>
            </div>

            {/* Main Title Area */}
            <div className="mb-6">
                <h1 className="text-4xl font-black leading-tight mb-3 text-slate-900">
                    춘천시, 2027년까지 <br />
                    <span className="text-red-600">생활권 교통사고 20% 감축</span> 목표
                </h1>
                <p className="text-xl text-slate-500 font-medium">
                    교통안전지수 최하위권(D등급) 탈출을 위한 <span className="text-slate-900 font-bold underline decoration-red-400 decoration-4 underline-offset-4">종합 대책 추진</span>
                </p>
            </div>

            {/* Content Grid */}
            <div className="flex-1 grid grid-cols-2 gap-10 relative">
                {/* News Image Stack */}
                <div className="relative h-full flex items-center justify-center">
                    <div className="absolute top-4 left-4 w-[80%] z-10 shadow-xl rounded-xl overflow-hidden border border-slate-200 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img src={news1} alt="News 1" className="w-full object-cover" />
                    </div>
                    <div className="absolute top-24 left-16 w-[80%] z-20 shadow-xl rounded-xl overflow-hidden border border-slate-200 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img src={news3} alt="News 3" className="w-full object-cover" />
                    </div>
                </div>

                {/* Stats / Context */}
                <div className="flex flex-col justify-center space-y-4">
                    <NewsCard
                        icon={<AlertTriangle size={24} className="text-orange-500" />}
                        title="현황: 교통안전지수 D등급"
                        desc="강원도 내 18개 시군 중 최하위권 기록, 보행자 및 고령자 사고 비중이 매우 높음"
                    />
                    <NewsCard
                        icon={<TrendingDown size={24} className="text-emerald-500" />}
                        title="목표: 사고 20% 감축"
                        desc="2027년까지 사망자 수와 사고 건수를 획기적으로 줄이기 위한 지자체 차원의 강력한 드라이브"
                    />

                    <div className="mt-2 p-5 bg-slate-50 rounded-2xl border-l-4 border-red-500 shadow-sm">
                        <p className="text-lg font-bold text-slate-800 leading-relaxed">
                            "단순 네비게이션을 넘어, <br />
                            <span className="text-red-600">지자체 정책 목표와 직접 연동된</span> <br />
                            시민 참여형 안전 운전 솔루션이 필요합니다."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NewsCard = ({ icon, title, desc }) => (
    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all cursor-default group">
        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-red-50 transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
        </div>
    </div>
);

export default NewsSlide;
