"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

export type Wine = {
  id: string
  name: string | null
  email: string
  emailVerified: Date | null
  role: string
}

export const columns: ColumnDef<Wine>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
        return (
          <Button variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Name
            <ArrowUpDown className="w-4 h-4 ml-1" />
          </Button>
    )
    },
    cell: ({ row }) => {
      const data = row.original      
      return (<p className="pl-3">{data.name}</p>)
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
  )
    },
    cell: ({ row }) => {
      const data = row.original      
      return (<p className="pl-3">{data.email}</p>)
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Role
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
  )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    cell: ({ row }) => {
      const data = row.original      
      return (<p className="pl-3">{data.role}</p>)
    },
  },
  {
    accessorKey: "emailVerified",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button variant="ghost" 
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Email Verified
            <ArrowUpDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const data = row.original     
      if (!data.emailVerified) return <div></div>
 
      return (
        <div className="text-center">
          {data.emailVerified.toDateString()}  
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data= row.original     
 
      return (
        <div className="flex items-center justify-end gap-2">
          <Link href={`/admin/users/edit?userId=${data.id}`} className="flex items-center">
              <Edit size={30} className="pr-2 hover:cursor-pointer text-sky-400"/>
          </Link>
          <Link href={`/admin/users/delete?userId=${data.id}`} className="flex items-center">
            <Trash2 className="text-red-400 hover:cursor-pointer"/>
          </Link>
        </div>

      )
    },
  },
]
