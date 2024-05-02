import Image from "next/image";
import AccueilImagesCarousel from "@/components/AccueilImagesCarousel";
import APCDALS from '../../public/APCDALs.png'
import baosem from '../../public/baosem.png'
import bomop from '../../public/bomop.png'
import logo from '../../public/Logo_du_ministre_de_la_dfense_nationale2.png'
import press from '../../public/presse.jpg'
import news from '../../public/newpaper.jpg'

export default function Home() {
  return (
   <div className="overflow-hidden">
    <div className="flex flex-col justify-center items-center md:px-8 lg:px-10 py-10 h-[100vh]">
      <AccueilImagesCarousel/>
    </div>
    <div className="flex flex-col justify-center items-center px-1 md:px-8 lg:px-10 py-20">
      <h1 className="text-4xl font-bold text-center">Qui sommes-nous ?</h1>
      <p className="w-full md:w-2/3 py-4 text-xl text-center">Nous sommes une plateforme électronique dédiée aux avis d'appels d'offres et consultations publics et privés en Algérie. Notre engagement consiste à agréger, analyser, et valoriser des données précieuses pour vous.</p>
      <p className="w-full md:w-2/3 py-4 text-xl text-center">En plus de cela, nous vous offrons la possibilité de trouver les partenaires idéaux - collaborateurs, donneurs d'ordres, sous-traitants, fournisseurs et investisseurs - pour saisir ensemble des opportunités lucratives. Rejoignez-nous et prospérez grâce à des collaborations harmonieuses !</p>
    </div>
    <div className="flex flex-col justify-center items-center px-5 md:px-8 py-20 lg:px-10 pb-20 relative">
    <Image src={news} alt="" layout="fill" objectFit="cover" className="bg-black opacity-70" priority/>
      <h1 className="text-4xl font-bold text-center z-20">Nos sources d'information</h1>
      <p className="w-full md:w-2/3 py-4 text-xl text-center z-20">
      Avec notre service, vous ne manquerez aucun marché pertinent grâce à une analyse quotidienne de centaines de sources, telles que la presse algérienne, les consultations de plusieurs APC et Wilayas, ainsi que différentes directions, en plus des revues spécialisées telles que le Bulletin Officiel des Marchés de l'Opérateur Public (BOMOP) et le Bulletin des Appels d'Offres du Secteur de l'Énergie et des Mines (BAOSEM), ainsi que la consultation des appels d’offres exclusifs de nos partenaires. Pour une prise de décision rapide et efficace, notre service rassemble les informations provenant de multiples sources pour enrichir vos données et éviter les doublons.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-10 relative">
  <Image alt="" src={press} className="w-52 max-w-full" priority/>
  <Image alt="" src={logo} className="w-28 max-w-full" priority/>
  <Image alt="" src={APCDALS} className="w-28 max-w-full" priority/>
  <Image alt="" src={baosem} className="w-28 max-w-full" priority/>
  <Image alt="" src={bomop} className="w-28 max-w-full" priority/>
</div>


    </div>
   </div>
  );
}
