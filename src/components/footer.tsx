'use client'
import React from 'react';
import { Separator } from '@radix-ui/react-separator';

const Footer = () => {
  return (
    <div className='bottom-0 w-full bg-black flex flex-col md:flex-row justify-evenly py-6 px-1 md:px-5 lg:px-10 items-center gap-3 overflow-hidden'>
      <div className='flex flex-col gap-6 md:gap-10 min-w-[150px] md:w-1/3 px-4'>
        <p className='text-white text-center'>Votre plateforme d’appels d’offres et d’opportunités business.</p>
      </div>
      <div className='flex flex-col gap-6 md:gap-10 min-w-[150px] px-4 py-6 md:w-1/3 md:border-x-2 border-y-2 md:border-y-0 border-solid border-gray-600'>
        <p className='text-white text-center'>Numéro de compte CCP : <br />0000000000 clé 00</p>
        <p className='text-white text-center'>Payement en ligne baridi mob: <br />RIP: 007999990000000000</p>
      </div>
      <div className='flex flex-col gap-6 md:gap-10 min-w-[150px] px-4 md:w-1/3'>
        <p className='text-white text-center'>Adresse <br /> @</p>
        <p className='text-white text-center'>Contact <br /> Tel: +213552809810 <br /> Email : mohamedsoltani080@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
