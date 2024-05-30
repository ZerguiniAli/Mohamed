import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    try {
        // Extract query parameters from the URL
        const url = new URL(request.url);
        const sectors = url.searchParams.getAll('sectors');  // Assuming sectors can be multiple values

        // Define the filters object with proper types
        const filters: Prisma.annonceWhereInput = {};
        if (sectors.length > 0) filters.sectors = { in: sectors };

        // Fetch the filtered announces from the database
        const announces = await prisma.annonce.findMany({
            where: filters,
        });

        return NextResponse.json(announces);
    } catch (error) {
        console.error('Error fetching announces:', error);
        return NextResponse.error();
    }
}
