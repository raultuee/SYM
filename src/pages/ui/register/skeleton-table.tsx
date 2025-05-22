// IMPORTS

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, ChevronsLeft, ChevronsRight } from "lucide-react"
 
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { DialogForm } from "./create-transaction"

// ARRAYS/OBJECTS OU REQUISIÇÕES
 

// TYPES

export type Transações = {
  id: string
  nome: string
  crn: string
  senha: string
  telefone: string
  createdAt: Date | string
  updatedAt: Date | string
  email: string
}

// COLUNAS DA TABELA
 
// eslint-disable-next-line react-refresh/only-export-components
export const columns: ColumnDef<Transações>[] = [
  {
    id: "select",
    header: () => <Skeleton className="h-6 w-[120px]" />,
    cell: () => <Skeleton className="h-6 w-[120px]" />,
  },
  {
    accessorKey: "nome",
    header: () => <Skeleton className="h-6 w-[120px]" />,
    cell: () => <Skeleton className="h-6 w-[120px]" />,
  },
  {
    accessorKey: "email",
    header: () => <Skeleton className="h-6 w-[120px]" />,
    cell: () => <Skeleton className="h-6 w-[120px]" />,
  },
  {
    accessorKey: "crn",
    header: () => <Skeleton className="h-6 w-[120px]" />,
    cell: () => <Skeleton className="h-6 w-[120px]" />,
  },
  {
    accessorKey: "telefone",
    header: () => <Skeleton className="h-6 w-[120px]" />,
    cell: () => <Skeleton className="h-6 w-[120px]" />,
  },
  {
    accessorKey: "Criação/Atualização",
    header: () => <Skeleton className="h-6 w-[120px]" />,
    cell: () => <Skeleton className="h-6 w-[120px]" />
  },
  {
    id: "actions",
    header: () => <Skeleton className="h-6 w-[120px]" />,
    cell: () => <Skeleton className="h-6 w-[120px]" />,
  },
]

// TABELA

export function TableSkeleton({
  data = [],
  onAddTransaction
}: {
  data?: Transações[],
  onAddTransaction: (t: { name: string; amount: number; type: boolean }) => void,
  onDeleteTransactions?: (ids: string[]) => void
}) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
 
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

    //FILTROS

    <div className="w-full">
      <div className="flex items-center py-4 gap-3">
        <Input
        placeholder="Filtrar por ID..."
        value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("id")?.setFilterValue(event.target.value)
        }
        className="w-[120px] bg-white dark:bg-zinc-950"
      />

      <Input
        placeholder="Filtrar transações..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm bg-white dark:bg-zinc-950"
      />

      <Button 
      variant="default"
      onClick={() => {
      table.getColumn("nome")?.setFilterValue(""); // Limpa o filtro de nomes
      table.getColumn("email")?.setFilterValue(""); // Limpa o filtro de emails
      table.getColumn("crn")?.setFilterValue(""); // Limpa o filtro de crn 
      toast.success("Filtros foram limpos") // Exibe mensagem de sucesso
      }}
      >
          Limpar filtros
      </Button>

      <DialogForm onAddTransaction={onAddTransaction} />
        

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table className="w-[1200px] bg-white dark:bg-zinc-950 rounded-md p-3">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="ml-3">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                    <svg className="animate-spin h-8 w-8 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    <span className="block mt-2 text-muted-foreground">Carregando...</span>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de {" "}
          {table.getFilteredRowModel().rows.length} transações(s) selecionado(s)
        </div>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft/>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight/>
          </Button>
        </div>
      </div>
    </div>
  )
}