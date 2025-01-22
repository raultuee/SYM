// import { PaginationDemo } from "../contracts/pag"; 

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

import { getRobots } from "@/api/get-robots.ts"
import { RobotsTableRow } from "./robot-table-row";
import { RobotTableSkeleton } from "./robot-table-skeleton";


export function TableRobots() {
  const { data: result, isLoading: isLoadingRobots, error } = useQuery({
    queryKey: ['robots'],
    queryFn: getRobots
  })

    return (
        <Card className="flex items-center justify-center w-[1400px] p-2 pb-5 mb-20 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">
            <Table>
                    {/* <TableCaption className="text-left pl-6"><PaginationDemo /></TableCaption> */}
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Código</TableHead>
                        <TableHead className="w-[300px]">Descrição</TableHead>
                        <TableHead className="w-[120px]">Status</TableHead>
                        <TableHead className="w-[100px] pl-10">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>

                      {isLoadingRobots && <RobotTableSkeleton />}

                      { result && result.records.map(robot => {
                        return <RobotsTableRow key={robot.id} robot={robot}/>
                      })}

                      {error && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center font-semibold">Nenhum robô encontrado.</TableCell>
                        </TableRow>
                      )}   
                    </TableBody>
                  </Table>
        </Card>
    )
}