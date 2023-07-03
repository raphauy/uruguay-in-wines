import Link from "next/link"

import { Data, columns } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/data-table"
import { PlusCircle } from "lucide-react"
 

export default async function WinesPage() {
  
  const wines: Data[]= []

  return (
    <div className="w-full p-5">      
      <p className="text-2xl font-bold">Admin page</p>
    </div>
)
}
