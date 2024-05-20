import React from 'react'
import { Button } from '@/components/ui/button'

const Offre = () => {
  return (
    <div className='flex justify-center items-center flex-wrap gap-10 px-3 py-6 md:py-12'>
      <div 
        className='py-10 px-5 flex flex-col justify-center items-center gap-10 rounded-lg transition min-w-min' 
        style={{ background: 'linear-gradient(to left, #8e9eab, #eef2f3)' }} // Silver gradient
      >
        <h1 className='text-xl md:text-4xl font-bold'>Silver</h1>
        <p>Appels d’offres et consultations <br />
          Concours<br />
          Alertes par e-mail<br />
          Prorogation de délai<br />
          Avis d’attribution<br />
          Avis d’annulation<br />
          Avis d’infructuosité<br />
          Avis d’adjudications et vente aux enchères<br />
          Mises en demeure et Résiliations
        </p>
        <Button className='w-full rounded-lg'>Devis</Button>
      </div>
      <div 
        className='py-10 px-5 flex flex-col justify-center items-center gap-10 rounded-lg transition min-w-min' 
        style={{ background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' }} // Gold gradient
      >
        <h1 className='text-xl md:text-4xl font-bold'>Gold</h1>
        <p>Appels d’offres et consultations <br />
            Concours<br />
            Alertes par e-mail<br />
            Prorogation de délai<br />
            Avis d’attribution<br />
            Avis d’annulation<br />
            Avis d’infructuosité<br />
            Avis d’adjudications et vente aux enchères<br />
            Mises en demeure et Résiliations
        </p>
        <Button className='w-full rounded-lg'>Devis</Button>
      </div>
      <div 
        className='py-10 px-5 flex flex-col justify-center items-center gap-10 rounded-lg transition min-w-min' 
        style={{ background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)' }} // Platinum gradient
      >
        <h1 className='text-xl md:text-4xl font-bold'>Platinum</h1>
        <p>Appels d’offres et consultations <br />
          Concours<br />
          Alertes par e-mail<br />
          Prorogation de délai<br />
          Avis d’attribution<br />
          Avis d’annulation<br />
          Avis d’infructuosité<br />
          Avis d’adjudications et vente aux enchères<br />
          Mises en demeure et Résiliations
        </p>
        <Button className='w-full rounded-lg'>Devis</Button>
      </div>
      <div 
        className='py-10 px-5 flex flex-col justify-center items-center gap-10 rounded-lg hover:bg-purple-600 transition min-w-min' 
        style={{ background: 'linear-gradient(to right, #efefbb, #d4d3dd)' }} // Platinum gradient
      >
        <h1 className='text-xl md:text-4xl font-bold'>V.I.P</h1>
        <p>Appels d’offres et consultations<br />
              Concours<br />
              Alertes par e-mail<br />
              Prorogation de délai<br />
              Avis d’attribution<br />
              Avis d’annulation<br />
              Avis d’infructuosité<br />
              Avis d’adjudications et vente aux enchères<br />
              Mises en demeure et Résiliations<br />
              Compte Business<br />
        </p>
        <Button className='w-full rounded-lg'>Devis</Button>
      </div>
    </div>
  )
}

export default Offre
