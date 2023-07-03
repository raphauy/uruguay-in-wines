import Link from "next/link"

import { Data, columns } from "./columns"
import { DataTable } from "./data-table"
import { PlusCircle } from "lucide-react"
 

export default async function WinesPage() {
  
  const wines: Data[]= []

  return (
    <div className="w-full p-5">      

      <div className="flex justify-end my-5 text-lg font-semibold text-grey-800">
        <Link href={`/sss`} 
          className="flex items-center justify-center px-3 py-1 bg-green-400 border border-green-700 rounded-md cursor-pointer hover:opacity-80 focus-visible:outline-tinta-marron focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          <PlusCircle size={22} className="mr-2"/><p>Add</p>
        </Link>
      </div>

      <div className="container p-3 py-10 mx-auto bg-white border rounded-md">
        <DataTable columns={columns} data={wines} />      
      </div>
    </div>
)
}
