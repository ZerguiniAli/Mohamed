import Image from "next/image";
import AccueilImagesCarousel from "@/components/AccueilImagesCarousel";

export default function Home() {
  return (
   <div className="overflow-hidden px-4">
    <div className="flex flex-col justify-center items-center md:px-8 lg:px-10 py-10 h-[100vh]">
      <AccueilImagesCarousel/>
    </div>
    <div className="flex flex-col justify-center items-center px-1 md:px-8 lg:px-10 py-20">
      <h1 className="text-4xl font-bold text-center">Qui sommes-nous ?</h1>
      <p className="w-full md:w-2/3 py-4 text-xl text-center">Nous sommes une plateforme électronique dédiée aux avis d'appels d'offres et consultations publics et privés en Algérie. Notre engagement consiste à agréger, analyser, et valoriser des données précieuses pour vous.</p>
      <p className="w-full md:w-2/3 py-4 text-xl text-center">En plus de cela, nous vous offrons la possibilité de trouver les partenaires idéaux - collaborateurs, donneurs d'ordres, sous-traitants, fournisseurs et investisseurs - pour saisir ensemble des opportunités lucratives. Rejoignez-nous et prospérez grâce à des collaborations harmonieuses !</p>
    </div>
   </div>
  );
}
