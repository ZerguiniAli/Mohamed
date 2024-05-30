import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import position from "../../public/location.png";
import calendar from "../../public/calendar.png";
import { getSession } from "@/lib/session";

interface AnnonceCardProps {
  id: Number;
  title: string;
  wilaya: string;
  date_preemption: string;
  description: string;
  sectors: string;
  type:string;
}

export async function AnnonceCard({ id, title, wilaya, date_preemption, description, sectors }: AnnonceCardProps) {


  const offer = await getSession()

  return (
    <Card className="w-[350px] flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="w-full flex flex-col justify-between">
          <div className="flex gap-2">
              <Image alt="calendar" src={position} className="w-6" />
              <h2 className="font-bold">Emplacement :</h2>
            </div>
            <p className="text-end">{wilaya}</p>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2">
              <Image alt="calendar" src={calendar} className="w-6" />
              <h2 className="font-bold">Date de péremption :</h2>
            </div>
            <p className="text-end">{date_preemption}</p>
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
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full" >Voir les détails</Button>
      </CardFooter>
    </Card>
  );
}
