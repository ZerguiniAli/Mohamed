import React from 'react';
import Image from 'next/image';
import cahier from '../../public/folder.jpg';
import planet from '../../public/sahres.jpg';
import coffe from '../../public/desktop.jpg';
import sahm from '../../public/shares2.jpg';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const AccueilImagesCarousel = () => {
    return (
        <Carousel className="w-full h-full rounded-lg">
            <CarouselContent>
                <CarouselItem>
                    <div className="h-screen relative overflow-hidden rounded-lg">
                        <Image alt="" src={planet} layout="fill" objectFit="cover" priority/>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black opacity-80">
                            <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-4 w-2/3 ">Votre plateforme d’appels d’offres et d’opportunités business</h1>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="h-screen relative overflow-hidden rounded-lg">
                        <Image alt="" src={cahier} layout="fill" objectFit="cover" priority/>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black opacity-80">
                            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 w-2/3">Un Accompagnement pour tout retrait de cahier de charge, dépôt de soumission et ouverture des plis</h1>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="h-screen relative overflow-hidden rounded-lg">
                        <Image alt="" src={sahm} layout="fill" objectFit="cover" priority/>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black opacity-80">
                            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 w-2/3">Vous recherchez un partenaire de confiance pour votre entreprise ? Nous sommes votre meilleure solution.</h1>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="h-screen relative overflow-hidden rounded-lg">
                        <Image alt="" src={coffe} layout="fill" objectFit="cover" priority/>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black opacity-80">
                            <h1 className="text-xl  md:text-4xl lg:text-4xl font-bold mb-4 w-2/3">votre meilleur partenaire en service après vente, veille à apporter un suivi de qualité à ses abonnés.</h1>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
        </Carousel>
    );
};

export default AccueilImagesCarousel;
