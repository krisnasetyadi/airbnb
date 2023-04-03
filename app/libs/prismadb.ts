/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;

// why => because next js 13 hot reloading can cause a bunch of
// new Prisma client intances to be created giving us warning in the terminal
// with this way assign prisma client to a global this variable
// which is not affected by hot reload
