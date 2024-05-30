import { NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client";
import {hash} from 'bcrypt'

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try{
        const data = await request.json();
        console.log(data);
        const {societe,Non, Email,Telephone,Region,Nomutil,MotdePase} = data;

        const hashedPassword = await hash(MotdePase,10);

        const newIns = await prisma.inscription.create({
            data: {
                societe,
                Non,
                Email,
                Telephone,
                Region,
                Nomutil,
                MotdePase: hashedPassword
            }
        })


        return NextResponse.json(newIns);

    } catch(error){
        console.log("Error creating user:", error);
        return NextResponse.error();
    }
}