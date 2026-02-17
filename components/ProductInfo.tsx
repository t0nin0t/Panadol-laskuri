
import React, { useState } from 'react';

interface InfoSectionProps {
  title: string;
  icon: string;
  content: string;
  defaultOpen?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, icon, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-50 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-4 text-left transition-colors hover:bg-gray-50/50 active:bg-gray-100/50"
      >
        <div className="flex items-center gap-2.5">
          <div className={`w-6 h-6 rounded-md flex items-center justify-center ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'} transition-colors`}>
            <i className={`fa-solid ${icon} text-[10px]`}></i>
          </div>
          <span className={`text-[11px] font-bold uppercase tracking-tight ${isOpen ? 'text-blue-700' : 'text-gray-700'}`}>
            {title}
          </span>
        </div>
        <i className={`fa-solid fa-chevron-down text-[10px] text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}></i>
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 animate-fadeIn">
          <div className="pl-8">
            <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductInfo: React.FC = () => {
  const sections = [
    {
      title: "Käyttötarkoitus",
      icon: "fa-stethoscope",
      content: "Lasten särky- ja kuumetilojen oireenmukainen hoito (esim. hampaiden puhkeaminen, päänsärky, hammassärky, korvasärky, vilustuminen, influenssa ja rokotusreaktiot)."
    },
    {
      title: "Annosteluohjeet",
      icon: "fa-clock",
      content: "Parasetamolin annos lapsille (yli 3 kk) on 15 mg/painokilo, korkeintaan 3 kertaa vuorokaudessa. Ei enempää kuin kolme annosta 24 tunnin aikana. Kerta-annosta ei saa antaa useammin kuin 4 tunnin välein. Yli kolmen päivän yhtäjaksoiseen käyttöön vain lääkärin määräyksellä."
    },
    {
      title: "Käyttöohje",
      icon: "fa-hand-holding-droplet",
      content: "Ravista pulloa ennen käyttöä. Pullossa on turvakorkki (paina alas ja käännä). Käytä pakkauksen mittaruiskua."
    },
    {
      title: "Huomioitavaa",
      icon: "fa-triangle-exclamation",
      content: "Sisältää parasetamolia. Älä käytä samanaikaisesti muiden parasetamolia sisältävien valmisteiden kanssa yliannostusvaaran vuoksi."
    },
    {
      title: "Haittavaikutukset & Säilytys",
      icon: "fa-box-archive",
      content: "Ohjeenmukaisessa käytössä ei todettu yleisiä haittavaikutuksia. Säilytä huoneenlämmössä (+15°C - +25°C)."
    }
  ];

  return (
    <div className="mt-2 border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
      <div className="bg-gray-50/50 py-2.5 px-4 border-b border-gray-100">
         <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">Tuotetiedot ja ohjeet</span>
      </div>
      <div className="flex flex-col">
        {sections.map((section, idx) => (
          <InfoSection 
            key={idx} 
            title={section.title} 
            icon={section.icon} 
            content={section.content} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
