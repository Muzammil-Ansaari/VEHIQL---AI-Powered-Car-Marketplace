import { PrismaClient } from "./generated/prisma";

export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// This global variable ensures that the Prisma client instance is reused across hot reloads in development. Without this, each time your application reloads, a new Prisma client instance would be created, leading to potential issues with connection limits and performance.