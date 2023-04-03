/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashed_password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}