'use client'
import React, { useEffect, useState } from 'react';
import { DatePickerDemo } from '@/components/DatePicker';
import { SelectDemo } from '@/components/Select';
import { SelectDemoType } from '@/components/SelectedTYPE';
import { Button } from '@/components/ui/button';
import { AnnonceCard } from '@/components/AnnonceCard';

interface Annonce {
  id: string;
  titre: string;
  wilaya: string;
  date: string;
  description: string;
  types: string[]
}

const Annonce = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);

  useEffect(() => {
    fetch('annonce.json')
      .then(response => response.json())
      .then(data => setAnnonces(data));
  }, []);

  const renderAnnonceCards = () => {
    const rows = [];
    let currentRow = [];

    annonces.forEach((annonce, index) => {
      currentRow.push(
        <AnnonceCard
          key={annonce.id}
          id={annonce.id}
          title={annonce.titre}
          description={annonce.description}
          location={annonce.wilaya}
          date={annonce.date}
          types={annonce.types}
        />
      );

      if ((index + 1) % 3 === 0 || index === annonces.length - 1) {
        rows.push(
          <div key={`row-${index}`} className="flex gap-4 my-4">
            {currentRow}
          </div>
        );
        currentRow = [];
      }
    });

    return rows;
  };

  return (
    <div className='flex flex-col justify-center items-center py-2 px-3 md:py-10'>
      <div className='flex flex-wrap gap-2'>
        <SelectDemoType />
        <SelectDemo placeholder='Wilaya' Items='Wilaya.json' />
        <SelectDemo placeholder='Secteur' />
        <DatePickerDemo placeholder='Date publication Minimum' />
        <DatePickerDemo placeholder='Date publication Maximum' />
        <Button className='w-max'>Filtrer</Button>
      </div>
      <div className="flex flex-col my-10 justify-center items-center">
        {renderAnnonceCards()}
      </div>
    </div>
  );
};

export default Annonce;