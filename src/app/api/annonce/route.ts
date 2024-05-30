import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const announce = await prisma.annonce.findMany({});
        return NextResponse.json(announce);
    } catch (error) {
        return NextResponse.error();
    }
}

