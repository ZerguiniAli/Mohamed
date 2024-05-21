'use client';
import React, { useEffect, useState } from 'react';
import { DatePickerDemo } from '@/components/DatePicker';
import { SelectDemo } from '@/components/Select';
import { SelectDemoType } from '@/components/SelectedTYPE';
import { Button } from '@/components/ui/button';
import { B2BServiceCard } from '@/components/b2bserviceCard';

interface Annonce {
  id: number;
  titre: string;
  wilaya: string;
  description: string;
  sectors: string[];
  contact: {
    nom: string;
    email: string;
    telephone: string;
  };
  documents: string[];
}

const B2BService = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);

  useEffect(() => {
    fetch('b2b.json')
      .then(response => response.json())
      .then(data => setAnnonces(data.annonces))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div className='min-h-screen flex flex-col items-center py-2 px-3 md:py-10 overflow-hidden'>
      <div className='flex flex-wrap gap-2'>
        <SelectDemo placeholder='Secteur' Items='secteurs.json'/>
        <Button className='w-max'>Filtrer</Button>
      </div>
      <div className="flex flex-col gap-4 md:px-40 lg:px-80 my-10 w-full">
        {annonces.map((annonce) => (
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
