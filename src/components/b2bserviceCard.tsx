import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import position from "../../public/location.png";
import calendar from "../../public/calendar.png";

interface B2BServiceCardProps {
  id: number;
  titre: string;
  description: string;
  wilaya: string;
  sectors: string;
  contact: String;
  documents: string;
}

export function B2BServiceCard({
  titre,
  description,
  wilaya,
  sectors,
  contact,
  documents
}: B2BServiceCardProps) {
  return (
    <Card className="flex flex-col justify-between w-full">
      <CardHeader>
        <CardTitle>{titre}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2">
              <Image alt="location" src={position} className="w-6" />
              <h2 className="font-bold">Emplacement :</h2>
            </div>
            <p className="text-end">{wilaya}</p>
          </div>
          <div className="py-2 px-2 rounded-lg bg-slate-100 w-full">
            <p className="text-center break-words">
              {description}
            </p>
          </div>
          <div className="w-full">
            <h4 className="font-bold">Secteur(s):</h4>
            <p className="text-end">{sectors}</p>
          </div>
          <div className="w-full">
            <h4 className="font-bold">Contact :</h4>
            <p className="text-end">{contact}</p>
          </div>
          <div className="w-full">
            <h4 className="font-bold">Documents :</h4>
            <p className="text-end">{documents}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">Voir les détails</Button>
      </CardFooter>
    </Card>
  );
}
