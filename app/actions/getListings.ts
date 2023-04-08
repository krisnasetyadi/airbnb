/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import prisma from '@/app/libs/prismadb';

export interface IListingsParams {
  userId: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const { userId } = params;

    const query: any = {};
    if (userId) {
      query.userId = userId;
    }

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
