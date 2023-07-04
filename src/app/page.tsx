import getWines, { getGrapes, getRegions, getVintages } from "@/services/getWines";
import { DataTable } from "./admin/wines/data-table";
import { columns } from "./columns";

export default async function IndexPage() {
  const wines= await getWines()
  const regions= await getRegions()
  const grapes= await getGrapes()
  const vintages= await getVintages()

  return (
    <div className="flex flex-col items-center w-full text-lg">
      <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tighter text-center md:text-4xl">
        Uruguay in Wines
      </h1>
      <h2 className="font-bold">
        A trip through the history and terroir of Uruguayan wine
      </h2>

      <div className="flex flex-col max-w-2xl gap-2 p-3 text-justify border rounded-md my-7">

        <p>
          Uruguay in wines is an independent communication project, created by Gabi Zimmer, whose main goal is to spread de word about Uruguayan viticulture and wines through content and phygital educational experiences.
        </p>

        <p>
          This site offers an extensive database of Uruguayan wines complete with Gabi`s professional tasting notes.
        </p>

      </div>
      
      <div className="container p-3 mx-auto border rounded-md">
        <DataTable columns={columns} data={wines} columnsOff={["winemaker", "price"]} 
          regions={regions} 
          grapes={grapes}
          vintages={vintages}
        />
      </div>
    </div>
  
)
}
