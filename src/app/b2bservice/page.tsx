'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { B2BServiceCard } from '@/components/b2bserviceCard';

interface Annonce {
  id: number;
  titre: string;
  wilaya: string;
  description: string;
  sectors: string;
  contact: String;
  documents: string;
}

const B2BService = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [sectors, setSectors] = useState("");
  const [filteredAnnonces, setFilteredAnnonces] = useState<Annonce[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    fetch('/api/b2b')
      .then(response => response.json())
      .then(data => {
        setAnnonces(data);
        setFilteredAnnonces(data); // Initialize filtered data with all announcements
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (isFiltering) {
      filterAnnounces();
      setIsFiltering(false); // Reset the flag after filtering
    }
  }, [isFiltering]);

  const filterAnnounces = () => {
    if (sectors !== "") {
      const filtered = annonces.filter(annonce => annonce.sectors === sectors);
      setFilteredAnnonces(filtered);
    } else {
      setFilteredAnnonces(annonces); // If no sector is selected, show all announcements
    }
  };
  
  const handleFilter = () => {
    setIsFiltering(true); // Set flag to indicate filtering is triggered
  };
  
  
  return (
    <div className='min-h-screen flex flex-col items-center py-2 px-3 md:py-10 overflow-hidden'>
      <div className='flex flex-wrap gap-2'>
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
        <Button className='w-max' onClick={handleFilter}>Filter</Button>
      </div>
      <div className="flex flex-col gap-4 md:px-40 lg:px-80 my-10 w-full">
        {filteredAnnonces.map((annonce) => (
          <B2BServiceCard
            key={annonce.id}
            id={annonce.id}
            titre={annonce.titre}
            description={annonce.description}
            wilaya={annonce.wilaya}
            sectors={annonce.sectors}
            contact={annonce.contact}
            documents={annonce.documents}
          />
        ))}
      </div>
    </div>
  );
};

export default B2BService;
