import { Button } from "@/components/ui/button"

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

export interface PaginationProps {
  page: number
  pageCount: number
  count: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}
   
  export function Pagination({
    page,
    count,
    onPageChange,
  }: PaginationProps) {
    const pages = Math.ceil(count / 10)

    return (
      <>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {count} item(s)
            </span>

              <div className="flex items-center gap-6 lg:gap-8">
                  <div className="text-sm font-medium">
                      Página {page + 1} de {pages}
                  </div>
                  <div className="flex items-center gap-2">
                        <Button
                          onClick={() => onPageChange(1)}
                          variant='outline'
                          className="h-8 w-8 p-0"
                          disabled={page === 0}
                        >
                            <ChevronsLeft className="h-4 w-4" />
                            <span className="sr-only">Primeira página</span>
                        </Button>

                        <Button
                          onClick={() => onPageChange(page - 1)}
                          variant='outline'
                          className="h-8 w-8 p-0"
                          disabled={page === 0}
                        >
                          <ChevronLeft className="h-4 w-4" />
                          <span className="sr-only">Página anterior</span>
                        </Button>

                        <Button
                          onClick={() => onPageChange(page + 1)}
                          variant="outline"
                          className="h-8 w-8 p-0"
                          disabled={pages <= page + 1}
                        >
                          <ChevronRight className="h-4 w-4" />
                          <span className="sr-only">Próxima página</span>
                        </Button>

                        <Button
                          onClick={() => onPageChange(pages - 1)}
                          variant="outline"
                          className="h-8 w-8 p-0"
                          disabled={pages <= page + 1}
                        >
                          <ChevronsRight className="h-4 w-4" />
                          <span className="sr-only">Última página</span>
                        </Button>
                  </div>
              </div>
          </div>
      </>
    )
  }