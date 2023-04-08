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
    console.log('listing', listings);
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    console.log('safe listings', safeListings);
    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
