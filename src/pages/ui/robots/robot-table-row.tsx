import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogTrigger } from "@/components/ui/dialog";
import { RobotDetails } from "./robot-info/robot-details";
import { useState } from "react";

export interface Robot {
  id: number
  nome: string
  descricao: string
  cor: string
  status: number
  qtd_processadas: number
  qtd_error: number
  qtd_limit: number
  qtd_tentativas: number
  qtd_threads:string | null
  email: string
  cron: string
  createdAt: string
  updatedAt: string
}

interface RobotsTableRowProps {
  robot: Robot
}

export function RobotsTableRow({ robot }: RobotsTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  function ActiveBadge() {
    return (
      <Badge>
        Executando
      </Badge>
    )
  }

 function InativeBadge() {
    return (
      <Badge className="bg-red-600 hover:bg-red-900">
        Inativo
      </Badge>
    )
  }

    return (
        <>
          <TableRow>
            <TableCell>{robot.id}</TableCell>
            <TableCell className="font-medium">{robot.descricao}</TableCell>
            <TableCell>
              { robot.status === 1 ? <InativeBadge /> : <ActiveBadge /> }
            </TableCell>
            <TableCell className="text-right inline-flex items-center">
              
            <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
              
                  <DialogTrigger className="ml-4">
                    <Button variant='outline'>Editar</Button>
                  </DialogTrigger>
              
                  <RobotDetails open={isDetailsOpen} id={robot.id} robot={robot} />
            </Dialog>
              
              
            </TableCell>
          </TableRow>
        </>
    )
}