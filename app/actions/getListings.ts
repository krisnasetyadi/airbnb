/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import prisma from '@/app/libs/prismadb';

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}
