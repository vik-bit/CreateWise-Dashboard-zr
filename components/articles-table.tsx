"use client"

import { useState } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Define the article data type
type Article = {
  id: string
  title: string
  keyword: string
  traffic: string
  words: number
  createdOn: string
}

// Sample data based on the image
const data: Article[] = [
  {
    id: "1",
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends",
    traffic: "[2240000]",
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    id: "2",
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends",
    traffic: "[2240000]",
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    id: "3",
    title: "7 Tips for Better Roaming in League of Legends",
    keyword: "league of legends",
    traffic: "[2240000]",
    words: 3518,
    createdOn: "2 days ago",
  },
  {
    id: "4",
    title: "Top Virtual Executive Assistant Services [2024]",
    keyword: "virtual executive assistant",
    traffic: "[2900]",
    words: 2408,
    createdOn: "1 Oct 24",
  },
  {
    id: "5",
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services",
    traffic: "[310]",
    words: 1753,
    createdOn: "30 Sep 24",
  },
  {
    id: "6",
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods",
    traffic: "[5200]",
    words: 2547,
    createdOn: "29 Sep 24",
  },
  {
    id: "7",
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks",
    traffic: "[8100]",
    words: 2290,
    createdOn: "28 Sep 24",
  },
  {
    id: "8",
    title: "7 Leading AI SEO Tools in 2024 [Ranked & Compared]",
    keyword: "ai seo software",
    traffic: "[680]",
    words: 1843,
    createdOn: "27 Sep 24",
  },
  {
    id: "9",
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services",
    traffic: "[310]",
    words: 1974,
    createdOn: "26 Sep 24",
  },
]

// Define the columns for the table
export const columns: ColumnDef<Article>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Article Title",
    cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "keyword",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1"
        >
          Keyword/Traffic
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span>{row.getValue("keyword")}</span>
        <span className="text-muted-foreground">{row.original.traffic}</span>
      </div>
    ),
  },
  {
    accessorKey: "words",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1"
        >
          Words
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("words")}</div>,
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center gap-1"
        >
          Created On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("createdOn")}</div>,
  },
  {
    id: "action",
    header: "Action",
    cell: () => (
      <Button variant="outline" size="sm" className="h-8 px-4 bg-primary/10 hover:bg-primary/20 border-primary/20">
        View
      </Button>
    ),
  },
  {
    id: "publish",
    header: "Publish",
    cell: () => (
      <div className="flex justify-center">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-primary"
          >
            <path d="M12 2v20" />
            <path d="M2 12h20" />
          </svg>
        </Button>
      </div>
    ),
  },
]

export function ArticlesTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border-primary/20 hover:bg-primary/10"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border-primary/20 hover:bg-primary/10"
          >
            Next
          </Button>
        </div>
      </div>
      <div className="rounded-md border border-primary/20">
        <Table>
          <TableHeader className="bg-primary/5">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">Total {table.getFilteredRowModel().rows.length} articles</div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </p>
        </div>
      </div>
    </div>
  )
}
