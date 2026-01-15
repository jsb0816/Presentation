import React from 'react';
import { Cpu, Activity, Database, Zap } from 'lucide-react';

const TechStackSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 p-16 flex flex-col justify-between border-8 border-slate-100 shadow-2xl">

            {/* 헤더 섹션 */}
            <div className="border-b border-slate-200 pb-3">
                <h2 className="text-sm font-mono text-indigo-500 mb-2 tracking-[0.3em] font-bold">TECHNICAL ARCHITECTURE</h2>
                <h1 className="text-5xl font-black text-slate-900">How It Works</h1> {/* italic 클래스 제거 및 "AI & Data Logic" 삭제 */}
            </div>

            {/* items-center 제거 및 섹션별 mt- 값 조정 */}
            <div className="grid grid-cols-2 gap-12 flex-1 mt-6"> {/* items-center를 제거했습니다. */}

                {/* 왼쪽: Video Swin Transformer 설명 */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-100 text-indigo-700 p-2 rounded-lg"><Cpu size={24} /></div>
                        <h3 className="text-2xl font-bold font-mono text-slate-800">Video Swin Transformer (3D-T)</h3>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex gap-3">
                                <Zap className="text-yellow-500 shrink-0" size={20} />
                                <span className="text-xl"><strong className="text-slate-900">시공간 맥락 분석:</strong> 단일 프레임이 아닌 프레임 간의 흐름을 파악하여 행동 의도 파악</span> {/* text-lg를 text-xl로 변경 */}
                            </li>
                            <li className="flex gap-3">
                                <Zap className="text-yellow-500 shrink-0" size={20} />
                                <span className="text-xl"><strong className="text-slate-900">Shifted Window Attention:</strong> 연산 효율을 극대화하여 모바일 환경에서도 실시간성 유지</span> {/* text-lg를 text-xl로 변경 */}
                            </li>
                            <li className="flex gap-3">
                                <Zap className="text-yellow-500 shrink-0" size={20} />
                                <span className="text-xl"><strong className="text-slate-900">AI Hub 데이터 학습:</strong> 운전자 부주의 상황(졸음/폭행/휴대폰)에 최적화된 가중치 적용</span> {/* text-lg를 text-xl로 변경 */}
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 오른쪽: 스코어링 알고리즘 */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg"><Activity size={24} /></div>
                        <h3 className="text-2xl font-bold font-mono text-slate-800">Real-time Scoring Algorithm</h3>
                    </div>

                    <div className="relative">
                        {/* 알고리즘 흐름 시각화 박스 */}
                        <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 p-8 rounded-3xl text-center">
                            <div className="flex justify-around items-center mb-6 text-slate-700">
                                <div className="text-sm">GPS & T-Map<br /><span className="text-xl font-bold text-slate-900">도로 규정</span></div> {/* text-xs를 text-sm으로, text-lg를 text-xl로 변경 */}
                                <div className="text-3xl font-light text-slate-400">+</div> {/* text-2xl을 text-3xl로 변경 */}
                                <div className="text-sm">IMU Sensor<br /><span className="text-xl font-bold text-slate-900">G-Force</span></div> {/* text-xs를 text-sm으로, text-lg를 text-xl로 변경 */}
                                <div className="text-3xl font-light text-slate-400">+</div> {/* text-2xl을 text-3xl로 변경 */}
                                <div className="text-sm">AI Inference<br /><span className="text-xl font-bold text-slate-900">상태 코드</span></div> {/* text-xs를 text-sm으로, text-lg를 text-xl로 변경 */}
                            </div>

                            <div className="bg-indigo-600 text-white py-4 rounded-xl text-2xl font-black tracking-tighter shadow-lg shadow-indigo-500/30"> {/* text-2xl을 text-3xl로 변경 */}
                                DYNAMIC SAFETY SCORE
                            </div>
                        </div>
                        {/* 배경 아이콘 */}
                        <Database className="absolute -bottom-10 -right-10 opacity-[0.03] text-indigo-900" size={200} />
                    </div>
                </section>
            </div>

            {/* 하단 기술 요약 배지 */}
            <div className="flex gap-4">
                {['PyTorch', 'FastAPI', 'Vercel', 'AWS EC2', 'T-Map API'].map(tech => (
                    <span key={tech} className="px-4 py-1 bg-white rounded-full text-sm font-mono text-slate-500 border border-slate-200 shadow-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechStackSlide;