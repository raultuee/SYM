import * as React from "react"
import {
  ColumnDef, ColumnFiltersState, SortingState, VisibilityState,
  flexRender, getCoreRowModel, getFilteredRowModel,
  getPaginationRowModel, getSortedRowModel, useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, ChevronsLeft, ChevronsRight } from "lucide-react"
import {
  DropdownMenu, DropdownMenuCheckboxItem,
  DropdownMenuContent, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "sonner"
import { DialogForm } from "./create-transaction"
import {
  Select, SelectContent, SelectGroup, SelectItem,
  SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select"

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

// Skeleton shimmer cell
function SkeletonCell({ width = 120 }: { width?: number }) {
  return (
    <div style={{
      height: 14, width, borderRadius: 3,
      background: "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
    }} />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const columns: ColumnDef<Transações>[] = [
  { id: "select", header: () => <SkeletonCell width={20} />, cell: () => <SkeletonCell width={20} /> },
  { accessorKey: "nome", header: () => <SkeletonCell width={60} />, cell: () => <SkeletonCell width={140} /> },
  { accessorKey: "email", header: () => <SkeletonCell width={60} />, cell: () => <SkeletonCell width={180} /> },
  { accessorKey: "crn", header: () => <SkeletonCell width={60} />, cell: () => <SkeletonCell width={100} /> },
  { accessorKey: "telefone", header: () => <SkeletonCell width={60} />, cell: () => <SkeletonCell width={100} /> },
  { accessorKey: "Criação/Atualização", header: () => <SkeletonCell width={80} />, cell: () => <SkeletonCell width={140} /> },
  { id: "actions", header: () => <SkeletonCell width={40} />, cell: () => <SkeletonCell width={32} /> },
]

const SKELETON_ROWS = 6;

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 4, color: "rgba(240,238,230,0.3)",
  fontFamily: "'DM Mono', monospace", fontSize: 13,
  padding: "8px 14px", outline: "none",
  cursor: "not-allowed",
};

export function TableSkeleton({
  data = [],
  onAddTransaction,
}: {
  data?: Transações[];
  onAddTransaction: (t: { name: string; amount: number; type: boolean; method: "credit" | "debit" | "pix" | "money" }) => void;
  onDeleteTransactions?: (ids: string[]) => void;
}) {
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

  return (
    <div style={{ width: "100%", fontFamily: "'DM Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500;700&display=swap');
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Toolbar (disabled state) */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <input
          disabled
          placeholder="Filtrar transações..."
          style={{ ...inputStyle, width: 220 }}
        />

        <Select disabled>
          <SelectTrigger style={{ ...inputStyle, width: 160 }}>
            <SelectValue placeholder="Método..." />
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

        <button
          disabled
          onClick={() => toast.success("Filtros limpos")}
          style={{
            background: "transparent", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 4, color: "rgba(240,238,230,0.2)", padding: "8px 16px",
            fontSize: 12, letterSpacing: "0.08em", cursor: "not-allowed",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          LIMPAR
        </button>

        <DialogForm onAddTransaction={onAddTransaction} />

        <div style={{ marginLeft: "auto" }}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "transparent", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 4, color: "rgba(240,238,230,0.2)", padding: "8px 14px",
                fontSize: 12, letterSpacing: "0.08em", cursor: "pointer",
                fontFamily: "'DM Mono', monospace",
              }}>
                COLUNAS <ChevronDown size={12} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" style={{
              background: "#0e0e1a", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 6, color: "#F0EEE6", fontFamily: "'DM Mono', monospace",
            }}>
              {table.getAllColumns().filter(c => c.getCanHide()).map(column => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={v => column.toggleVisibility(!!v)}
                  style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase" }}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table skeleton */}
      <div style={{
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 8, overflow: "hidden",
        background: "rgba(255,255,255,0.015)",
      }}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(hg => (
              <TableRow key={hg.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {hg.headers.map(header => (
                  <TableHead key={header.id} style={{
                    background: "rgba(255,255,255,0.02)", padding: "14px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {/* Fake skeleton rows */}
            {Array.from({ length: SKELETON_ROWS }).map((_, i) => (
              <TableRow key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", opacity: 1 - i * 0.12 }}>
                {columns.map((_col, j) => (
                  <TableCell key={j} style={{ padding: "16px 16px" }}>
                    <SkeletonCell width={[20, 60, 140, 120, 80, 120, 32][j] ?? 100} />
                  </TableCell>
                ))}
              </TableRow>
            ))}

            {/* Loading indicator */}
            <TableRow>
              <TableCell colSpan={columns.length} style={{ padding: "24px 0", textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24"
                    style={{ animation: "spin 0.9s linear infinite", flexShrink: 0 }}
                  >
                    <circle cx="12" cy="12" r="10" stroke="rgba(0,255,178,0.2)" strokeWidth="3" fill="none" />
                    <path d="M4 12a8 8 0 018-8" stroke="#00FFB2" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                  <span style={{ fontSize: 11, letterSpacing: "0.12em", color: "rgba(240,238,230,0.3)" }}>
                    CARREGANDO TRANSAÇÕES...
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingTop: 16,
      }}>
        <span style={{ fontSize: 12, color: "rgba(240,238,230,0.2)", letterSpacing: "0.06em" }}>
          — de — transações selecionadas
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          {[ChevronsLeft, ChevronsRight].map((Icon, i) => (
            <button
              key={i}
              disabled
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 4, color: "rgba(240,238,230,0.15)",
                width: 34, height: 34, cursor: "not-allowed",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Icon size={14} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}