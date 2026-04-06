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
import {
  ArrowUpDown, ChevronDown, ChevronsLeft, ChevronsRight,
  MoreHorizontal, TrendingDown, TrendingUp, Trash,
} from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import { DialogForm } from "./create-transaction"
import { TableSkeleton } from "./skeleton-table"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"
import {
  Select, SelectContent, SelectGroup, SelectItem,
  SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select"

export type Payment = {
  id: string
  amount: number
  type: boolean
  name: string
  method: "credit" | "debit" | "pix" | "money"
  createdAt?: Date
  link?: string
}

const methodLabel: Record<string, string> = {
  credit: "Crédito",
  debit: "Débito",
  pix: "PIX",
  money: "Dinheiro",
};

const methodBadge: Record<string, string> = {
  credit: "rgba(123,97,255,0.15)",
  debit: "rgba(0,201,255,0.12)",
  pix: "rgba(0,255,178,0.12)",
  money: "rgba(255,214,0,0.12)",
};
const methodColor: Record<string, string> = {
  credit: "#7B61FF",
  debit: "#00C9FF",
  pix: "#00FFB2",
  money: "#FFD600",
};

// eslint-disable-next-line react-refresh/only-export-components
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        style={{ marginLeft: 8, accentColor: "#00FFB2" }}
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(v: unknown) => table.toggleAllPageRowsSelected(!!v)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        style={{ marginLeft: 8, accentColor: "#00FFB2" }}
        checked={row.getIsSelected()}
        onCheckedChange={(v: unknown) => row.toggleSelected(!!v)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: "TIPO",
    cell: ({ row }) =>
      row.getValue("type") === true
        ? <TrendingUp size={16} color="#00FFB2" />
        : <TrendingDown size={16} color="#FF6B6B" />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: "rgba(240,238,230,0.5)", fontSize: 11,
          letterSpacing: "0.12em", fontFamily: "inherit",
          display: "flex", alignItems: "center", gap: 6,
        }}
      >
        NOME <ArrowUpDown size={12} />
      </button>
    ),
    cell: ({ row }) => (
      <span style={{ fontWeight: 600, color: "#F0EEE6", fontSize: 14 }}>
        {row.getValue("name")}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <span style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(240,238,230,0.5)" }}>CRIADO EM</span>,
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date | string;
      return (
        <span style={{ fontSize: 12, color: "rgba(240,238,230,0.4)", fontVariantNumeric: "tabular-nums" }}>
          {date ? new Date(date).toLocaleString("pt-BR", {
            day: "2-digit", month: "2-digit", year: "numeric",
            hour: "2-digit", minute: "2-digit",
          }) : "—"}
        </span>
      );
    },
  },
  {
    accessorKey: "method",
    header: () => <span style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(240,238,230,0.5)" }}>MÉTODO</span>,
    cell: ({ row }) => {
      const m = row.getValue("method") as string;
      return (
        <span style={{
          display: "inline-block",
          background: methodBadge[m] || "rgba(255,255,255,0.06)",
          color: methodColor[m] || "#F0EEE6",
          borderRadius: 4, padding: "3px 10px",
          fontSize: 11, letterSpacing: "0.08em", fontWeight: 600,
        }}>
          {methodLabel[m] || m}
        </span>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div style={{ textAlign: "right", fontSize: 11, letterSpacing: "0.12em", color: "rgba(240,238,230,0.5)" }}>VALOR</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL",
      }).format(amount);
      return (
        <div style={{
          textAlign: "right", fontWeight: 700,
          color: amount >= 0 ? "#00FFB2" : "#FF6B6B",
          fontVariantNumeric: "tabular-nums", fontSize: 14,
        }}>
          {formatted}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button style={{
              background: "none", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 4, width: 32, height: 32, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(240,238,230,0.4)", transition: "all 0.15s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLButtonElement).style.color = "#F0EEE6";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(240,238,230,0.4)";
              }}
            >
              <MoreHorizontal size={14} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            style={{
              background: "#0e0e1a", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 6, fontFamily: "'DM Mono', monospace",
              color: "#F0EEE6", fontSize: 13,
            }}
          >
            <DropdownMenuLabel style={{ color: "rgba(240,238,230,0.35)", fontSize: 10, letterSpacing: "0.12em" }}>
              AÇÕES
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
              style={{ cursor: "pointer" }}
            >
              Copiar ID
            </DropdownMenuItem>
            <DropdownMenuSeparator style={{ background: "rgba(255,255,255,0.06)" }} />
            {payment.link && (
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.link ?? "")}
                style={{ cursor: "pointer" }}
              >
                Link da compra
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 4, color: "#F0EEE6",
  fontFamily: "'DM Mono', monospace", fontSize: 13,
  padding: "8px 14px", outline: "none",
  transition: "border-color 0.2s",
};

export function DataTable({
  data = [],
  onAddTransaction,
  onDeleteTransactions,
}: {
  data?: Payment[];
  onAddTransaction: (t: { name: string; amount: number; type: boolean; method: "credit" | "debit" | "pix" | "money" }) => void;
  onDeleteTransactions?: (ids: string[]) => void;
}) {
  const [loading, setLoading] = React.useState(true);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data, columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <TableSkeleton onAddTransaction={onAddTransaction} />;

  const selectedCount = table.getSelectedRowModel().rows.length;

  return (
    <div style={{ width: "100%", fontFamily: "'DM Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500;700&display=swap');
        .sym-table tr:hover td { background: rgba(255,255,255,0.02) !important; }
        .sym-table tr[data-state=selected] td { background: rgba(0,255,178,0.04) !important; }
        .sym-input:focus { border-color: #00FFB2 !important; box-shadow: 0 0 0 2px rgba(0,255,178,0.08) !important; }
      `}</style>

      {/* Toolbar */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <input
          className="sym-input"
          placeholder="Filtrar transações..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={e => table.getColumn("name")?.setFilterValue(e.target.value)}
          style={{ ...inputStyle, width: 220 }}
        />

        <Select
          value={(table.getColumn("method")?.getFilterValue() as string) ?? ""}
          onValueChange={v => table.getColumn("method")?.setFilterValue(v === "" ? undefined : v)}
        >
          <SelectTrigger style={{ ...inputStyle, width: 160 }}>
            <SelectValue placeholder="Método..." />
          </SelectTrigger>
          <SelectContent style={{
            background: "#0e0e1a", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 6, color: "#F0EEE6", fontFamily: "'DM Mono', monospace",
          }}>
            <SelectGroup>
              <SelectLabel style={{ fontSize: 10, letterSpacing: "0.12em", color: "rgba(240,238,230,0.3)" }}>MÉTODOS</SelectLabel>
              <SelectItem value="debit">Débito</SelectItem>
              <SelectItem value="credit">Crédito</SelectItem>
              <SelectItem value="pix">PIX</SelectItem>
              <SelectItem value="money">Dinheiro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <button
          onClick={() => {
            table.getColumn("name")?.setFilterValue("");
            table.getColumn("method")?.setFilterValue(undefined);
            toast.success("Filtros limpos");
          }}
          style={{
            background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 4, color: "rgba(240,238,230,0.5)", padding: "8px 16px",
            fontSize: 12, letterSpacing: "0.08em", cursor: "pointer",
            fontFamily: "'DM Mono', monospace", transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.25)";
            (e.currentTarget as HTMLButtonElement).style.color = "#F0EEE6";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(240,238,230,0.5)";
          }}
        >
          LIMPAR
        </button>

        <DialogForm onAddTransaction={onAddTransaction} />

        {selectedCount > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,107,107,0.12)", border: "1px solid rgba(255,107,107,0.3)",
                borderRadius: 4, color: "#FF6B6B", padding: "8px 16px",
                fontSize: 12, letterSpacing: "0.08em", cursor: "pointer",
                fontFamily: "'DM Mono', monospace", transition: "all 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,107,0.2)"}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,107,107,0.12)"}
              >
                <Trash size={13} />
                DELETAR ({selectedCount})
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent style={{
              background: "#0e0e1a", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10, color: "#F0EEE6",
              fontFamily: "'DM Mono', monospace",
            }}>
              <AlertDialogHeader>
                <AlertDialogTitle style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20 }}>
                  Confirmar exclusão
                </AlertDialogTitle>
                <AlertDialogDescription style={{ color: "rgba(240,238,230,0.45)", fontSize: 13 }}>
                  Você está prestes a deletar {selectedCount} transaç{selectedCount > 1 ? "ões" : "ão"}. Esta ação não pode ser desfeita.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter style={{ gap: 10 }}>
                <AlertDialogCancel style={{
                  background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
                  color: "#F0EEE6", borderRadius: 4, fontFamily: "'DM Mono', monospace", fontSize: 12,
                }}>
                  CANCELAR
                </AlertDialogCancel>
                <AlertDialogAction
                  style={{
                    background: "#FF6B6B", color: "#080810", borderRadius: 4,
                    fontFamily: "'DM Mono', monospace", fontSize: 12,
                    fontWeight: 700, letterSpacing: "0.08em", border: "none",
                  }}
                  onClick={() => {
                    const ids = table.getSelectedRowModel().rows.map(r => r.original.id);
                    if (typeof onDeleteTransactions === "function") onDeleteTransactions(ids);
                    table.resetRowSelection();
                    toast.success("Transações deletadas.");
                  }}
                >
                  DELETAR
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}

        {/* Colunas toggle */}
        <div style={{ marginLeft: "auto" }}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4, color: "rgba(240,238,230,0.5)", padding: "8px 14px",
                fontSize: 12, letterSpacing: "0.08em", cursor: "pointer",
                fontFamily: "'DM Mono', monospace",
              }}>
                COLUNAS <ChevronDown size={12} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" style={{
              background: "#0e0e1a", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 6, color: "#F0EEE6", fontFamily: "'DM Mono', monospace", fontSize: 12,
            }}>
              {table.getAllColumns().filter(c => c.getCanHide()).map(column => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={v => column.toggleVisibility(!!v)}
                  style={{ letterSpacing: "0.06em", textTransform: "uppercase", fontSize: 11 }}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table */}
      <div style={{
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 8, overflow: "hidden",
        background: "rgba(255,255,255,0.015)",
      }}>
        <Table className="sym-table">
          <TableHeader>
            {table.getHeaderGroups().map(hg => (
              <TableRow key={hg.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {hg.headers.map(header => (
                  <TableHead
                    key={header.id}
                    style={{
                      background: "rgba(255,255,255,0.02)", padding: "14px 16px",
                      fontSize: 11, letterSpacing: "0.12em", color: "rgba(240,238,230,0.4)",
                      fontFamily: "'DM Mono', monospace", borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    transition: "background 0.15s",
                  }}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      key={cell.id}
                      style={{ padding: "14px 16px", color: "#F0EEE6", fontSize: 13 }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  style={{
                    textAlign: "center", padding: "56px 0",
                    color: "rgba(240,238,230,0.3)", fontSize: 13,
                    letterSpacing: "0.06em",
                  }}
                >
                  <div style={{ marginBottom: 8, fontSize: 28, opacity: 0.3 }}>◎</div>
                  NENHUMA TRANSAÇÃO ENCONTRADA
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingTop: 16, flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ fontSize: 12, color: "rgba(240,238,230,0.35)", letterSpacing: "0.06em" }}>
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} transações selecionadas
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { label: <ChevronsLeft size={14} />, action: () => table.previousPage(), disabled: !table.getCanPreviousPage() },
            { label: <ChevronsRight size={14} />, action: () => table.nextPage(), disabled: !table.getCanNextPage() },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={btn.action}
              disabled={btn.disabled}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4, color: btn.disabled ? "rgba(240,238,230,0.2)" : "rgba(240,238,230,0.6)",
                width: 34, height: 34, cursor: btn.disabled ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s",
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}