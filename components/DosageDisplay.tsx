
import React from 'react';
import { DosageResult } from '../types';

interface Props {
  result: DosageResult | null;
  isWarning?: boolean;
}

const DosageDisplay: React.FC<Props> = ({ result, isWarning }) => {
  if (!result) return null;

  const bgGradient = isWarning 
    ? "from-orange-500 to-red-600" 
    : "from-blue-600 to-blue-700";

  const borderColor = isWarning
    ? "border-orange-400/30"
    : "border-blue-400/30";

  return (
    <div className={`mt-4 bg-gradient-to-br ${bgGradient} rounded-xl p-4 shadow-md text-white transition-colors duration-500`}>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className={`border-r ${borderColor} pr-2`}>
          <p className="text-[10px] font-bold uppercase opacity-80 mb-1">Kerta-annos</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black">{result.mg.toFixed(1)}</span>
            <span className="text-xs font-medium opacity-90">mg</span>
          </div>
        </div>

        <div className="pl-2">
          <p className="text-[10px] font-bold uppercase opacity-80 mb-1">Tilavuus</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black">{result.ml.toFixed(1)}</span>
            <span className="text-sm font-bold opacity-90">ml</span>
          </div>
        </div>
      </div>
      
      <div className={`mt-3 pt-2 border-t ${borderColor} flex items-center gap-2`}>
        <i className={`fa-solid ${isWarning ? 'fa-triangle-exclamation text-orange-200' : 'fa-syringe text-blue-200'} text-xs`}></i>
        <p className="text-[10px] font-medium leading-tight opacity-90">
          {isWarning && <span className="font-bold block mb-0.5 uppercase tracking-tighter">Huom: Epätyypillinen paino lapselle</span>}
          Suositeltu kerta-annos {result.weight} kg painoiselle on {result.ml.toFixed(1)} ml.
        </p>
      </div>
    </div>
  );
};

export default DosageDisplay;
