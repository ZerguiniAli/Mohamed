import React from 'react';
import Image from 'next/image';
import cahier from '../../public/cahier.jpg';
import planet from '../../public/planet.jpg';
import coffe from '../../public/coffe.jpg';
import sahm from '../../public/sahm.jpg';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const AccueilImagesCarousel = () => {
    return (
        <Carousel className="w-full h-full">
            <CarouselContent>
                <CarouselItem>
                    <div className="h-screen relative overflow-hidden">
                        <Image alt="" src={planet} layout="fill" objectFit="cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                            <h1 className="text-4xl font-bold mb-4 w-2/3">Votre plateforme d’appels d’offres et d’opportunités business</h1>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="h-screen relative overflow-hidden">
                        <Image alt="" src={cahier} layout="fill" objectFit="cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
                            <h1 className="text-4xl font-bold mb-4 w-2/3">Un Accompagnement pour tout retrait de cahier de charge, dépôt de soumission et ouverture des plis</h1>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="h-screen relative overflow-hidden">
                        <Image alt="" src={sahm} layout="fill" objectFit="cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                            <h1 className="text-4xl font-bold mb-4 w-2/3">Vous cherchez un partenaire de confiance pour votre entreprise ?
Ms marches est votre meilleure solution</h1>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="h-screen relative overflow-hidden">
                        <Image alt="" src={coffe} layout="fill" objectFit="cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                            <h1 className="text-4xl font-bold mb-4 w-2/3">votre meilleur partenaire en service après vente, veille à apporter un suivi de qualité à ses abonnés.</h1>
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
