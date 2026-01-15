import React from 'react';
import { Database, ArrowRight, Tag } from 'lucide-react';

const ModelLearningSlide = () => {
    return (
        <div className="w-[1280px] h-[720px] bg-white text-slate-900 p-16 flex flex-col overflow-hidden relative shadow-2xl border-8 border-slate-100">
            {/* 배경 장식 */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl"></div>

            {/* 헤더 */}
            <div className="relative z-10 border-b border-slate-200 pb-4">
                <h2 className="text-sm font-mono text-indigo-600 mb-2 tracking-[0.3em] font-bold">MODEL-LEARNING</h2>
                <h1 className="text-5xl font-black text-slate-900">Preprocessing</h1>
            </div>

            {/* 중앙 콘텐츠 영역 */}
            <div className="relative z-10 flex-1 flex items-center gap-8 mt-6">
                {/* 왼쪽: AI Hub 데이터셋 */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-indigo-100 text-indigo-700 p-2 rounded-lg"><Database size={24} /></div>
                        <h3 className="text-2xl font-bold text-slate-800">AI Hub 운전자 이상행동 데이터 셋</h3>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left">
                            <tbody className="space-y-2">
                                <tr className="border-b border-slate-200">
                                    <td className="py-3 pr-8 font-bold text-slate-700 text-lg">데이터 소스</td>
                                    <td className="py-3 text-slate-600 text-lg">AI Hub (공개 데이터)</td>
                                </tr>
                                <tr className="border-b border-slate-200">
                                    <td className="py-3 pr-8 font-bold text-slate-700 text-lg">영상 수</td>
                                    <td className="py-3 text-slate-600 text-lg">약 300,000개</td>
                                </tr>
                                <tr className="border-b border-slate-200">
                                    <td className="py-3 pr-8 font-bold text-slate-700 text-lg">해상도</td>
                                    <td className="py-3 text-slate-600 text-lg">가변 → 224×224 리사이즈</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-8 font-bold text-slate-700 text-lg">FPS</td>
                                    <td className="py-3 text-slate-600 text-lg">30fps 기준</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 중간: 화살표와 Labeling */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <ArrowRight className="text-indigo-500" size={48} />
                    <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-200">
                        <Tag className="text-indigo-600" size={20} />
                        <span className="text-lg font-bold text-indigo-700">Labeling</span>
                    </div>
                </div>

                {/* 오른쪽: Sliding Window 샘플 생성 */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg"><Database size={24} /></div>
                        <h3 className="text-2xl font-bold text-slate-800">Sliding Window 샘플 생성</h3>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex gap-3">
                                <span className="text-emerald-600 font-bold shrink-0">•</span>
                                <span className="text-lg"><strong className="text-slate-900">윈도우 크기:</strong> 30프레임 (1초 @ 30fps)</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-emerald-600 font-bold shrink-0">•</span>
                                <span className="text-lg"><strong className="text-slate-900">이동 간격:</strong> 15프레임 (50% 겹침)</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-emerald-600 font-bold shrink-0">•</span>
                                <span className="text-lg"><strong className="text-slate-900">영상당 샘플 수:</strong> (총프레임 - 30) / 15 + 1</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelLearningSlide;
