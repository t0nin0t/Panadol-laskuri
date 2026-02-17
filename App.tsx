import React, { useState, useCallback, useMemo } from 'react';
import { PANADOL_CONFIG, MIN_WEIGHT, MAX_WEIGHT } from './constants';
import { DosageResult } from './types';
import DosageDisplay from './components/DosageDisplay';
import ProductInfo from './components/ProductInfo';

const App: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<DosageResult | null>(null);

  const calculateDosage = useCallback((w: number) => {
    if (isNaN(w) || w < MIN_WEIGHT || w > MAX_WEIGHT) {
      setResult(null);
      return;
    }
    const mg = w * PANADOL_CONFIG.dosagePerKg;
    const ml = mg / PANADOL_CONFIG.concentration;
    setResult({
      weight: w,
      mg,
      ml,
      timestamp: new Date()
    });
  }, []);

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    // Poista piste lopusta jos käyttäjä kirjoittaa esim "6."
    if (val.endsWith('.') && val.length > 1) {
      val = val.slice(0, -1);
    }
    setWeight(val);
    const num = parseFloat(val);
    calculateDosage(num);
  };

  const isInvalidWeight = useMemo(() => {
    const w = parseFloat(weight);
    return weight !== '' && (isNaN(w) || w < MIN_WEIGHT || w > MAX_WEIGHT);
  }, [weight]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-3 px-4 sticky top-0 z-20 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <i className="fa-solid fa-pills text-white text-sm"></i>
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900 leading-tight">Panadol Laskuri</h1>
              <p className="text-xs text-gray-500 font-medium tracking-tight">24 mg/ml • 15 mg/kg</p>
            </div>
          </div>
          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-100 uppercase tracking-tighter">
            Annos-opas
          </span>
        </div>
      </header>

      <main className="flex-1 px-4 py-4 overflow-y-auto space-y-4">
        {/* Main Input Area */}
        <section className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
          <div className="mb-4">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">
              Lapsen paino (kg)
            </label>
            <div className="relative">
              <input
                type="number"
                inputMode="decimal"
                value={weight}
                onChange={handleWeightChange}
                placeholder="0.0"
                className={`w-full border-2 text-gray-900 text-2xl font-black rounded-xl focus:ring-2 block p-4 transition-all outline-none ${
                  isInvalidWeight 
                  ? 'bg-red-50 border-red-200 focus:ring-red-400 focus:border-red-500' 
                  : 'bg-gray-50 border-gray-100 focus:ring-blue-400 focus:border-blue-500'
                }`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                <span className={`font-bold text-sm ${isInvalidWeight ? 'text-red-400' : 'text-gray-400'}`}>kg</span>
              </div>
            </div>
          </div>

          <DosageDisplay result={result} />

          {isInvalidWeight && (
            <div className="mt-3 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 animate-fadeIn">
              <i className="fa-solid fa-triangle-exclamation text-red-500 text-xs"></i>
              <p className="text-xs text-red-800 font-bold leading-tight uppercase">
                Virhe: Painon on oltava {MIN_WEIGHT}-{MAX_WEIGHT} kg.
              </p>
            </div>
          )}
        </section>

        {/* Detailed Product Info */}
        <ProductInfo />

        {/* Safety Info */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm p-5 border border-blue-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-shield-halved text-white text-xs"></i>
            </div>
            <h3 className="text-xs font-black text-blue-900 uppercase tracking-wider">Turvallisuusohjeita</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-blue-100">
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-clock text-blue-600 text-xs mt-0.5"></i>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-1">Annosväli</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Odota vähintään 4-6 tuntia annosten välillä. Enimmäisannos on 3 annosta vuorokaudessa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-blue-100">
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-triangle-exclamation text-amber-600 text-xs mt-0.5"></i>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-1">Yliannostus</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Parasetamolin yliannostus voi aiheuttaa vakavia maksavaurioita. Noudata tarkkaan annosta.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-blue-100">
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-user-doctor text-blue-600 text-xs mt-0.5"></i>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-1">Ota yhteyttä lääkäriin</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    Jos kuume jatkuu yli 3 päivää tai oireet pahenevat, ota yhteyttä terveydenhuoltoon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-white border-t border-gray-100">
        <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-3">
          <p className="text-amber-900 text-xs font-bold mb-1 flex items-center gap-1 text-center justify-center">
            <i className="fa-solid fa-user-doctor"></i>
            TÄRKEÄ HUOMAUTUS
          </p>
          <p className="text-[11px] text-amber-800 leading-tight italic text-center">
            Tämä sovellus on vain ohjeellinen. Varmista annostus aina lääkkeen pakkausselosteesta. Parasetamolin yliannostus on hengenvaarallista.
          </p>
        </div>
        <div className="mt-3 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.1em]">
            MedCalc Nordic • Versio 2.3
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
