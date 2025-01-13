import { PrismaClient } from "@prisma/client";

//@ts-ignore
const prisma = globalThis.prisma ?? new PrismaClient();

//@ts-ignore
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

export default prisma;

// Alrighty Abhishek why do we need this? --> Coz this will allow us to create prisma client just once
// Means... There will be only one connection from prisma to database agar mei har page mei use kru
// toh mei bohat baar client ka connection bna dunga to database and jb bhi hum debug krenge 
// aur file ko run krenge har baar ek connection create hoga aur eventually humei error aayega ki we have reached
// maximum limit for the connection
