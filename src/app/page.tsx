import getWines from "@/services/getWines";
import { columns } from "./admin/wines/columns";
import { DataTable } from "./admin/wines/data-table";

export default async function IndexPage() {
  const wines= await getWines()

  return (
    <section className="grid items-center justify-center w-full gap-6 pt-6 pb-8 md:py-10">
      
      <div className="flex flex-col items-center w-full gap-7">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter text-center md:text-4xl">
          Uruguay in Wines
        </h1>
        <p className="max-w-2xl text-lg text-justify text-muted-foreground">
          Explore the richness of Uruguayan wine guided by Gabi Zimmer, our site offers an extensive database of uruguayan wines complete with Gabi`s professional tasting notes. Delve into our powerful search engine to find and learn about the wines that delight your taste buds. Join us and uncork the allure of Uruguayan wine!
        </p>
      </div>
      
      <div className="w-full p-3 border rounded-md">
        <DataTable columns={columns} data={wines} />      
      </div>

    </section>
  )
}
