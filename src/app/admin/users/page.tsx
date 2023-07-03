import Link from "next/link"

import { columns } from "./columns"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import getUsers from "@/services/userService"
import { DataTable } from "@/components/data-table/data-table"
 
export default async function WinesPage() {
  
  const users= await getUsers()

  return (
    <div className="w-full p-5">      

      <div className="flex justify-end my-5 text-lg font-semibold text-grey-800">
        <Link href={`/admin/users/add`} 
          className="flex items-center justify-center">
          <Button><PlusCircle size={22} className="mr-2"/>Add</Button>
        </Link>
      </div>

      <div className="container p-3 py-10 mx-auto bg-white border rounded-md">
        <DataTable columns={columns} data={users} />      
      </div>
    </div>
)
}
