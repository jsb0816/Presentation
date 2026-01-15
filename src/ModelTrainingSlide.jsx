import React from 'react';
import { Cpu, Activity } from 'lucide-react';

const ModelTrainingSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 p-12 flex flex-col justify-between overflow-hidden relative shadow-2xl border-8 border-slate-100">
            {/* 배경 장식 */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl"></div>

            {/* 헤더 */}
            <div className="relative z-10 border-b border-slate-200 pb-4">
                <h2 className="text-sm font-mono text-indigo-600 mb-2 tracking-[0.3em] font-bold">MODEL-LEARNING</h2>
                <h1 className="text-4xl font-black text-slate-900">Model Learning</h1>
            </div>

            {/* 중앙 콘텐츠 영역 */}
            <div className="relative z-10 flex-1 flex items-start gap-6 mt-2 min-h-0">
                {/* 왼쪽: 학습 설정 */}
                <div className="w-1/2 flex flex-col min-h-0">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-indigo-100 text-indigo-700 p-2 rounded-lg"><Cpu size={20} /></div>
                        <h3 className="text-xl font-bold text-slate-800">학습 설정</h3>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200 shadow-sm">
                        <p className="text-lg text-slate-600 mb-2">하드웨어: NVIDIA A6000 48GB × 2 (DistributedDataParallel)</p>
                        <table className="w-full text-left">
                            <tbody className="space-y-0">
                                <tr className="border-b border-slate-200">
                                    <td className="py-2 pr-6 font-bold text-slate-700 text-lg">배치 크기</td>
                                    <td className="py-2 text-slate-600 text-lg">32 (16 × 2 GPU)</td>
                                </tr>
                                <tr className="border-b border-slate-200">
                                    <td className="py-2 pr-6 font-bold text-slate-700 text-lg">Gradient Accumulation</td>
                                    <td className="py-2 text-slate-600 text-lg">4 (실효 배치: 128)</td>
                                </tr>
                                <tr className="border-b border-slate-200">
                                    <td className="py-2 pr-6 font-bold text-slate-700 text-lg">Mixed Precision</td>
                                    <td className="py-2 text-slate-600 text-lg">FP16</td>
                                </tr>
                                <tr className="border-b border-slate-200">
                                    <td className="py-2 pr-6 font-bold text-slate-700 text-lg">Optimizer</td>
                                    <td className="py-2 text-slate-600 text-lg">AdamW (lr=1e-3, wd=0.05)</td>
                                </tr>
                                <tr className="border-b border-slate-200">
                                    <td className="py-2 pr-6 font-bold text-slate-700 text-lg">Scheduler</td>
                                    <td className="py-2 text-slate-600 text-lg">OneCycleLR (warmup 1 에폭)</td>
                                </tr>
                                <tr className="border-b border-slate-200">
                                    <td className="py-2 pr-6 font-bold text-slate-700 text-lg">Loss</td>
                                    <td className="py-2 text-slate-600 text-lg">CrossEntropy + Label Smoothing 0.1</td>
                                </tr>
                                <tr className="border-b border-slate-200">
                                    <td className="py-2 pr-6 font-bold text-slate-700 text-lg">에폭</td>
                                    <td className="py-2 text-slate-600 text-lg">2</td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-6 font-bold text-slate-700 text-lg">클래스 가중치</td>
                                    <td className="py-2 text-slate-600 text-lg">불균형 보정 (Inverse Frequency)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 오른쪽: 실시간 추론 시스템 */}
                <div className="w-1/2 flex flex-col min-h-0">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg"><Activity size={20} /></div>
                        <h3 className="text-xl font-bold text-slate-800">실시간 추론 시스템</h3>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                        {/* 추론 파이프라인 */}
                        <div>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">추론 파이프라인</h4>
                            <div className="text-lg text-slate-700 space-y-0 leading-relaxed">
                                <div>카메라 30fps → Circular Buffer (30프레임)</div>
                                <div className="pl-4">│</div>
                                <div className="pl-4">▼</div>
                                <div>모델 추론</div>
                                <div className="pl-4">│</div>
                                <div className="pl-4">▼</div>
                                <div>앱에서 경고/알람 처리</div>
                            </div>
                        </div>

                        {/* 보수적 판단 로직 */}
                        <div className="pt-2 border-t border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-2">보수적 판단 로직</h4>
                            <ul className="space-y-1.5 text-lg text-slate-600">
                                <li className="flex gap-2">
                                    <span className="text-green-600 font-bold shrink-0">•</span>
                                    <span>정상(0) 예측 → 무조건 정상</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-orange-600 font-bold shrink-0">•</span>
                                    <span>이상행동(1~4) + confidence ≥ threshold → <span className="text-red-600 font-bold">경고</span></span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-600 font-bold shrink-0">•</span>
                                    <span>이상행동(1~4) + confidence &lt; threshold → 정상</span>
                                </li>
                            </ul>
                        </div>

                        {/* 다수결 스무딩 */}
                        <div className="pt-2 border-t border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-2">다수결 스무딩</h4>
                            <ul className="space-y-1.5 text-lg text-slate-600">
                                <li className="flex gap-2">
                                    <span className="text-purple-600 font-bold shrink-0">•</span>
                                    <span>최근 5회 예측 중 가장 빈도 높은 클래스 선택</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelTrainingSlide;
