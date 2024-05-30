'use client'
import React, { useEffect, useState } from 'react';
import { DatePickerDemo } from '@/components/DatePicker';
import { SelectDemo } from '@/components/Select';
import { SelectDemoType } from '@/components/SelectedTYPE';
import { Button } from '@/components/ui/button';
import { AnnonceCard } from '@/components/AnnonceCard';

interface Annonce {
  id: number;
  title: string;
  wilaya: string;
  date_preemption: string;
  description: string;
  type: string;
  sectors: string;
}

const Annonce = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [wilaya, setWilaya] = useState("");
  const [type, setType] = useState("");
  const [sectors, setSectors] = useState("");

  useEffect(() => {
    fetch('/api/annonce')
      .then(response => response.json())
      .then(data => setAnnonces(data));
  }, []);

  const handleFilter = () => {
    const queryParams = new URLSearchParams();
    if (wilaya) queryParams.append('wilaya', wilaya);
    if (type) queryParams.append('type', type);
    if (sectors) queryParams.append('sectors', sectors);

    fetch(`/api/annonce?${queryParams.toString()}`)
      .then(response => response.json())
      .then(data => setAnnonces(data));
  };

  const renderAnnonceCards = () => {
    const rows: JSX.Element[] = [];
    let currentRow: JSX.Element[] = [];

    annonces.forEach((annonce, index) => {
      currentRow.push(
        <AnnonceCard
          key={annonce.id}
          id={annonce.id}
          title={annonce.title}
          wilaya={annonce.wilaya}
          date_preemption={annonce.date_preemption}
          description={annonce.description}
          sectors={annonce.sectors}
          type={annonce.type}
        />
      );

      if ((index + 1) % 3 === 0 || index === annonces.length - 1) {
        rows.push(
          <div key={`row-${index}`} className="flex flex-wrap items-center justify-center gap-4 my-4">
            {currentRow}
          </div>
        );
        currentRow = [];
      }
    });

    return rows;
  };

  return (
    <div className='min-h-screen flex flex-col items-center py-2 px-3 md:py-10 overflow-hidden'>
      <div className='flex flex-wrap gap-2'>
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select Type</option>
          <option value="L’appel d’offres national ouvert">L’appel d’offres national ouvert</option>
          <option value="L’appel d’offres international ouvert">L’appel d’offres international ouvert</option>
          <option value="L’appel d’offres national restreint">L’appel d’offres national restreint</option>
          <option value="L’appel d’offres international restreint">L’appel d’offres international restreint</option>
          <option value="L’appel d’offres national et international ouvert">L’appel d’offres national et international ouvert</option>
          <option value="L’appel d’offres national et international restreint">L’appel d’offres national et international restreint</option>
          <option value="Concours national ouvert">Concours national ouvert</option>
          <option value="Concours international ouvert">Concours international ouvert</option>
          <option value="Concours national restreint">Concours national restreint</option>
          <option value="Concours international restreint">Concours international restreint</option>
          <option value="Concours national et international ouvert">Concours national et international ouvert</option>
          <option value="Concours national et international restreint">Concours national et international restreint</option>
          <option value="Consultation nationale ouverte">Consultation nationale ouverte</option>
          <option value="Consultation internationale ouverte">Consultation internationale ouverte</option>
          <option value="Consultation nationale restreinte">Consultation nationale restreinte</option>
          <option value="Consultation internationale restreinte">Consultation internationale restreinte</option>
          <option value="Consultation nationale et internationale ouverte">Consultation nationale et internationale ouverte</option>
          <option value="Consultation nationale et internationale restreinte">Consultation nationale et internationale restreinte</option>
          <option value="Présélection nationale ouverte">Présélection nationale ouverte</option>
          <option value="Présélection internationale ouverte">Présélection internationale ouverte</option>
          <option value="Présélection nationale restreinte">Présélection nationale restreinte</option>
          <option value="Présélection internationale restreinte">Présélection internationale restreinte</option>
          <option value="Présélection nationale et internationale ouverte">Présélection nationale et internationale ouverte</option>
          <option value="Présélection nationale et internationale restreinte">Présélection nationale et internationale restreinte</option>
        </select>

        <select
          value={wilaya}
          onChange={e => setWilaya(e.target.value)}
          className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select Wilaya</option>
          <option value="Adrar">Adrar</option>
          <option value="Chlef">Chlef</option>
          <option value="Laghouat">Laghouat</option>
          <option value="Oum El Bouaghi">Oum El Bouaghi</option>
          <option value="Batna">Batna</option>
          <option value="Béjaïa">Béjaïa</option>
          <option value="Biskra">Biskra</option>
          <option value="Béchar">Béchar</option>
          <option value="Blida">Blida</option>
          <option value="Bouira">Bouira</option>
          <option value="Tamanrasset">Tamanrasset</option>
          <option value="Tébessa">Tébessa</option>
          <option value="Tlemcen">Tlemcen</option>
          <option value="Tiaret">Tiaret</option>
          <option value="Tizi Ouzou">Tizi Ouzou</option>
          <option value="Alger">Alger</option>
          <option value="Djelfa">Djelfa</option>
          <option value="Jijel">Jijel</option>
          <option value="Sétif">Sétif</option>
          <option value="Saïda">Saïda</option>
          <option value="Skikda">Skikda</option>
          <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
          <option value="Annaba">Annaba</option>
          <option value="Guelma">Guelma</option>
          <option value="Constantine">Constantine</option>
          <option value="Médéa">Médéa</option>
          <option value="Mostaganem">Mostaganem</option>
          <option value="M'Sila">M'Sila</option>
          <option value="Mascara">Mascara</option>
          <option value="Ouargla">Ouargla</option>
          <option value="Oran">Oran</option>
          <option value="El Bayadh">El Bayadh</option>
          <option value="Illizi">Illizi</option>
          <option value="Bordj Bou Arreridj">Bordj Bou Arreridj</option>
          <option value="Boumerdès">Boumerdès</option>
          <option value="El Tarf">El Tarf</option>
          <option value="Tindouf">Tindouf</option>
          <option value="Tissemsilt">Tissemsilt</option>
          <option value="El Oued">El Oued</option>
          <option value="Khenchela">Khenchela</option>
          <option value="Souk Ahras">Souk Ahras</option>
          <option value="Tipaza">Tipaza</option>
          <option value="Mila">Mila</option>
          <option value="Aïn Defla">Aïn Defla</option>
          <option value="Naâma">Naâma</option>
          <option value="Aïn Témouchent">Aïn Témouchent</option>
          <option value="Ghardaïa">Ghardaïa</option>
          <option value="Relizane">Relizane</option>
          <option value="Timimoun">Timimoun</option>
          <option value="Bordj Badji Mokhtar">Bordj Badji Mokhtar</option>
          <option value="Ouled Djellal">Ouled Djellal</option>
          <option value="Béni Abbès">Béni Abbès</option>
          <option value="In Salah">In Salah</option>
          <option value="In Guezzam">In Guezzam</option>
          <option value="Touggourt">Touggourt</option>
          <option value="Djanet">Djanet</option>
          <option value="El M'Ghair">El M'Ghair</option>
          <option value="El Meniaa">El Meniaa</option>
        </select>

        <select
          value={sectors}
          onChange={e => setSectors(e.target.value)}
          className="block w-[180px] py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select Sector</option>
          <option value="Électroménager">Électroménager</option>
          <option value="Énergie et services pétroliers">Énergie et services pétroliers</option>
          <option value="Équipements industriels">Équipements industriels</option>
          <option value="Équipements scientifiques">Équipements scientifiques</option>
          <option value="Industrie électrique électrotechnique et équipements">Industrie électrique électrotechnique et équipements</option>
          <option value="Travaux de montage de charpente métallique">Travaux de montage de charpente métallique</option>
          <option value="Automatismes et informatique industrielle">Automatismes et informatique industrielle</option>
          <option value="Décoration intérieur, extérieur et design">Décoration intérieur, extérieur et design</option>
          <option value="Trousseaux et mobilier scolaire">Trousseaux et mobilier scolaire</option>
          <option value="Mine, agrégats et granulats">Mine, agrégats et granulats</option>
          <option value="Ustensile et mobilier de cuisine">Ustensile et mobilier de cuisine</option>
          <option value="Logiciels et matériel informatique">Logiciels et matériel informatique</option>
        </select>
        <Button className='w-max' onClick={handleFilter}>Filtrer</Button>
      </div>
      <div className="flex flex-col my-10 justify-center items-center">
        {renderAnnonceCards()}
      </div>
    </div>
  );
};

export default Annonce;
