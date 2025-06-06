"use client"

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
import { ArrowUpDown, ChevronDown, ChevronsLeft, ChevronsRight, MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DialogForm } from "./create-transaction"
import { TableSkeleton } from "./skeleton-table"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { toast } from "sonner"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export type Payment = {
  id: string
  amount: number
  type: boolean
  name: string
  method: "credit" | "debit" | "pix" | "money"
  createdAt?: Date
  link?: string
}


// eslint-disable-next-line react-refresh/only-export-components
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="ml-2"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: unknown) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="ml-2"
        checked={row.getIsSelected()}
        onCheckedChange={(value: unknown) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("type") === true ? <TrendingUp className="w-4" color="green" /> : <TrendingDown className="w-4" color="red" />}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-semibold">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Criado em",
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date | string;
      return (
        <span>
          {date
            ? new Date(date).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            : ""}
        </span>
      );
    },
  },
  {
    accessorKey: "method",
    header: "Método",
    cell: ({ row }) => {
      const method = row.getValue("method");
      let label = "";
      switch (method) {
        case "credit":
          label = "Crédito";
          break;
        case "debit":
          label = "Débito";
          break;
        case "pix":
          label = "PIX";
          break;
        case "money":
          label = "Dinheiro";
          break;
        default:
          label = String(method);
      }
      return <div>{label}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Valor</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copie o ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {payment.link && <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.link ?? "")}>Link da compra</DropdownMenuItem>}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTable({ data = [], onAddTransaction, onDeleteTransactions }: { data?: Payment[], onAddTransaction: (t: { name: string; amount: number; type: boolean; method: "credit" | "debit" | "pix" | "money"; }) => void, onDeleteTransactions?: (ids: string[]) => void }) {
  const [loading, setLoading] = React.useState(true)
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

  React.useEffect(() => {
      // Simule o carregamento dos dados (substitua pelo seu fetch real)
      const timer = setTimeout(() => setLoading(false), 3000)
      return () => clearTimeout(timer)
    }, [])
  
    if (loading) {
      return <TableSkeleton onAddTransaction={onAddTransaction} />
    }

  return (
    <div className="w-[1300px] mt-7">
      <div className="flex items-center gap-4 py-4">

        <Input
          placeholder="Filtrar transações..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <Select
          value={
            (table.getColumn("method")?.getFilterValue() as string) ?? ""
          }
          onValueChange={(value) => {
            table.getColumn("method")?.setFilterValue(
              value === "" ? undefined : value
            );
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar método..." className="text-gray-600" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Métodos</SelectLabel>
              <SelectItem value="debit">Débito</SelectItem>
              <SelectItem value="credit">Crédito</SelectItem>
              <SelectItem value="pix">PIX</SelectItem>
              <SelectItem value="money">Dinheiro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button 
        variant="default"
        onClick={() => {
          table.getColumn("name")?.setFilterValue(""); // Limpa o filtro de nomes
          table.getColumn("method")?.setFilterValue(undefined); // Limpa o filtro do select de método
          toast.success("Filtros foram limpos") // Exibe mensagem de sucesso
        }}
        >
            Limpar filtros
        </Button>

        <DialogForm onAddTransaction={onAddTransaction} />

        {/* Botão extra aparece se houver linhas selecionadas */}
        {table.getSelectedRowModel().rows.length > 0 && (
          <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive"><Trash/> Deletar transação</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Você tem certeza que deseja deletar esta transação?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
          className="bg-red-700 text-white hover:bg-red-500"
          onClick={() => {
              // Obtenha os IDs das linhas selecionadas
              const selectedIds = table.getSelectedRowModel().rows.map(row => row.original.id);
              // Atualize o estado (ou chame uma função do pai, se necessário)
              if (typeof onDeleteTransactions === "function") {
                onDeleteTransactions(selectedIds);
              }
              // Se não houver função, você pode usar um setData se o estado estiver aqui
              // Limpe a seleção
              table.resetRowSelection();
              toast.success("Transação deletada.");
            }}

          >Deletar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        )}

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
        <Table className="rounded-md">
          <TableHeader className="bg-[#171717]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                  colSpan={columns?.length ?? 1}
                  className="h-24 text-center"
                >
                  Nenhuma transação encontrada.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} transações selecionadas.
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
