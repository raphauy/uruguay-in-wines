import { WineFormValues } from "@/app/admin/wines/add/wineForm";
import { prisma } from "@/utils/server/db";

export default async function getWines() {

  const found = await prisma.wine.findMany({
    orderBy: {
      vintage: 'asc',
    },
  })

  return found;
};


export async function getWine(id: string) {

  const found = await prisma.wine.findUnique({
    where: {
      id
    },
  })

  return found
}

export async function createWine(data: WineFormValues) {
  
  const created= await prisma.wine.create({
    data
  })

  return created
}

export async function editWine(id: string, data: WineFormValues) {
  console.log(data);
  
  const created= await prisma.wine.update({
    where: {
      id
    },
    data
  })

  return created
}

export async function deleteWine(id: string) {
  
  const deleted= await prisma.wine.delete({
    where: {
      id
    },
  })

  return deleted
}