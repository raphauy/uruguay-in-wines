"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal, Trash2 } from "lucide-react"
import Link from "next/link"
import { Edit } from "lucide-react"


export type Data = {
  id: string
  winery: string
  wine: string
  winemaker: string | null
  region: string
  vintage: string  
  status: string  
}

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "winery",
    header: ({ column }) => {
        return (
          <Button variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Winery
            <ArrowUpDown className="w-4 h-4 ml-1" />
          </Button>
        )
    },
  },
  {
    accessorKey: "wine",
    header: ({ column }) => {
      return (
        <Button variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Wine
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
      )
    },
  },
  {
    accessorKey: "winemaker",
    header: ({ column }) => {
      return (
        <Button variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Winemaker
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
      )
    },
  },
  {
    accessorKey: "region",
    header: ({ column }) => {
      return (
        <Button variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Region
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
      )
    },
  },
  {
    accessorKey: "vintage",
    header: ({ column }) => {
      return (
        <Button variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Vintage
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Vintage
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original     
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Link href={`/admin/wines/edit?wineId=${data.id}`} className="flex items-center">
                    <Edit size={22} className="pr-2 hover:cursor-pointer text-sky-400"/>Editar
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href={`/admin/wines/delete?wineId=${data.id}`} className="flex items-center">
                    <Trash2 size={22} className="text-red-400 hover:cursor-pointer"/>Eliminar
                </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
