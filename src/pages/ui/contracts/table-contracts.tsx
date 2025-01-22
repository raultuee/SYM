import { Pagination } from "./pag"; 

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getContracts } from "@/api/get-contracts";
import { ContractTableRow } from "./contract-table-row";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { ContractTableSkeleton } from "./contract-table-skeleton";

export function TableContracts() {

  const [searchParams, setSearchParams] = useSearchParams()

  const nome_adquirente = searchParams.get('nome')
  const cidade = searchParams.get('cidade')
  const cpf_adquirente = searchParams.get('cpf')

  const page = z.coerce
  .number()
  .transform(page => page - 1)
  .parse(searchParams.get('page') ?? '1')

  const { data: result, isLoading: isLoadingContracts, error } = useQuery({
    queryKey: ['contract', page, nome_adquirente, cidade, cpf_adquirente ],
    queryFn: () => getContracts({ page, nome_adquirente, cidade, cpf_adquirente })
  })

  function handlePaginate(page: number) {
    setSearchParams(state => {
      state.set('page', (page + 1).toString())

      return state
    })
  }

    return (
        <Card className="flex items-center justify-center w-[1400px] overflow-y-auto p-2 pb-5 mb-10 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">
          <Table>
                <TableCaption className="text-left pl-6">
              {result && (
                <Pagination 
                count={result?.meta.count} 
                onPageChange={handlePaginate} 
                page={result?.meta.page} 
                pageCount={result?.meta.pageCount}
                />
              )}
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[170px]">Cidade</TableHead>
                      <TableHead className="w-[500px]">Contratos de Financiamento</TableHead>
                      <TableHead className="w-[120px] pr-3">Em análise</TableHead>
                      <TableHead className="w-[120px] pr-3">Aguard. CFD</TableHead>
                      <TableHead className="w-[120px] pr-3">Assinados</TableHead>
                      <TableHead className="w-[120px] pr-3">Associativo</TableHead>
                      <TableHead className="w-[100px]">Ação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>

                    {isLoadingContracts && <ContractTableSkeleton />}

                    { result?.records.map(contract => {
                      return <ContractTableRow key={contract.id} contract={contract}/>
                    })}

                    {error && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center font-semibold">Nenhum contrato encontrado.</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
        </Card>
    )
}