import React from 'react';
import { Search, AlertTriangle, Terminal } from 'lucide-react';
import demoImage from './assets/model_demo_searching.png';

const ModelDemoSearchingSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 p-16 flex flex-col justify-between overflow-hidden relative shadow-2xl border-8 border-slate-100">
            {/* 헤더 */}
            <div className="border-b-4 border-slate-900 pb-4">
                <h2 className="text-sm font-mono text-slate-500 mb-2 tracking-[0.3em] font-bold">REAL-TIME INFERENCE</h2>
                <h1 className="text-5xl font-black text-slate-900">Model Demo #3</h1>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="flex-1 flex gap-10 mt-8 min-h-0">

                {/* 왼쪽: 데모 이미지 프레임 */}
                <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-300 bg-black group">
                    <img src={demoImage} alt="Searching Detection Demo" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />

                    {/* 오버레이 효과 */}
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold animate-pulse">
                        REC ●
                    </div>
                </div>

                {/* 오른쪽: 상태 설명 & 코드 */}
                <div className="w-1/3 flex flex-col justify-center space-y-6">
                    {/* 상황 설명 */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-yellow-600 font-bold text-xl uppercase tracking-wider">
                            <Search size={28} />
                            <span>Visual Distraction</span>
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 leading-tight">
                            "주행 중 딴짓/물건 찾기"
                        </h3>
                        <p className="text-slate-500 font-medium">
                            운전자의 시선이 전방을 벗어나 주변을 탐색하는 <br />
                            <span className="text-slate-900 font-bold underline decoration-yellow-400">집중력 저하 행동</span>을 실시간 감지
                        </p>
                    </div>

                    {/* 터미널 코드 박스 */}
                    <div className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-700 font-mono text-sm relative">
                        {/* 터미널 상단 바 */}
                        <div className="flex gap-2 mb-4 opacity-50">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex gap-2 text-emerald-400">
                                <Terminal size={16} className="mt-0.5" />
                                <span>Wait for Input...</span>
                            </div>
                            <div className="pl-6 pt-2 text-white font-bold animate-pulse">
                                &gt;&gt; Return Status Code: <span className="text-yellow-500 text-xl">3</span> (Searching)
                            </div>
                        </div>

                        <div className="absolute top-4 right-4 text-xs text-slate-600 font-bold border border-slate-700 px-2 py-1 rounded">
                            JSON OUTPUT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelDemoSearchingSlide;
