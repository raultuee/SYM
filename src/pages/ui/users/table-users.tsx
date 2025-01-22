// import { PaginationDemo } from "../contracts/pag"; 

import {
    Table,
    TableBody,
    TableCell,
    // TableCaption,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/get-users";
import { User, UsersTableRow } from "./users-table-row";
import { useSearchParams } from "react-router-dom";
import { UserTableSkeleton } from "./user-table-skeleton";


export function TableUsers() {
  const [searchParams] = useSearchParams()

  const nome = searchParams.get('nome')

  const { data: result, isLoading: isLoadingUser, error } = useQuery({
    queryKey: ['users', nome],
    queryFn: () => getUsers({ nome })
  })

    return (
        <Card className="flex items-center justify-center w-[1400px] p-2 pb-5 mb-20 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">
            <Table>
                    {/* <TableCaption className="text-left pl-6"><PaginationDemo /></TableCaption> */}
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Código</TableHead>
                        <TableHead className="w-[120px]">Login</TableHead>
                        <TableHead className="w-[250px]">Nome</TableHead>
                        <TableHead className="w-[100px]">Setor</TableHead>
                        <TableHead className="w-[100px]">Ativo</TableHead>
                        <TableHead className="w-[120px]">Último Acesso</TableHead>
                        <TableHead className="w-[100px] pl-10">Ação</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>

                      {isLoadingUser && <UserTableSkeleton />}

                      { result && result.records.map((users: User) => {
                          return <UsersTableRow key={users.id} user={users}/>
                        })}

                      {error && (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center font-semibold">Nenhum usuário encontrado.</TableCell>
                          </TableRow>
                        )}
                    </TableBody>
                  </Table>
        </Card>
    )
}