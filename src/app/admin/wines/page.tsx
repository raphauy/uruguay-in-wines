import Link from "next/link"

import { columns } from "./columns"
import getWines from "@/services/getWines"
import { PlusCircle } from "lucide-react"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button"
 
export default async function WinesPage() {
  
  const wines= await getWines()

  return (
    <div className="w-full">      

      <div className="flex justify-end my-5 text-lg font-semibold">
        <Link href={`/admin/wines/add`} 
          className="flex items-center justify-center">
          <Button><PlusCircle size={22} className="mr-2"/>Add</Button>
        </Link>
      </div>

      <div className="container p-3 py-10 mx-auto border rounded-md">
        <DataTable columns={columns} data={wines} />      
      </div>
    </div>
)
}
