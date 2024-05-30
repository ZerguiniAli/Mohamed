import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, context: { params: { id: string } }) {
  const id = parseInt(context.params.id);
  try {
    const users = await prisma.user.findUnique({
        where:{
            id: id,
        }
    })
    return NextResponse.json(users);
  } catch (error) {
    
  }
}
