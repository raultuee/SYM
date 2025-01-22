import { toast } from "sonner";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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

import { ImCheckmark } from "react-icons/im";
import { ImCross } from "react-icons/im";


import { TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export interface User {
    id: number;
    login: string;
    nome: string;
    setor: number;
    ativo: boolean;
    ultimo_acesso: string;
}

interface UsersTableRowProps {
  user: User
}

export function UsersTableRow({ user }: UsersTableRowProps) {
   function TIbadge() {
      return (
        <Badge className="w-[65px] justify-center dark:bg-blue-600 hover: bg-blue-500">
          T.I.
        </Badge>
      )
    }

   function REPASSEbadge() {
      return (
        <Badge className="bg-green-600 hover:bg-green-500">
          Repasse
        </Badge>
      )
    }

    return (
        <TableRow key={user.id}>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.login}</TableCell>
          <TableCell className="font-medium">{user.nome}</TableCell>
          <TableCell>
                { user.setor === 1 ? <TIbadge /> : <REPASSEbadge /> }
          </TableCell>
            <TableCell>
                { user.ativo ? <ImCheckmark className="ml-2" /> : <ImCross className="ml-2" /> }
            </TableCell>
          <TableCell>{user.ultimo_acesso}</TableCell>
          <TableCell className="text-right inline-flex items-center">
            
            <Link to={`/users/${user.id}`}> <Button variant="ghost"> <FaEdit className="text-blue-600"/> </Button> </Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost"> <MdDelete className="text-red-600"/> </Button>
              </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Você tem certeza que quer excluir este usuário?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Essa ação não é reversível, então esteja consciente antes da exclusão.
                          </AlertDialogDescription>
                      </AlertDialogHeader>
                          <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction
                                  onClick={() => toast.success('Item deletado com sucesso!', {
                                    style: {
                                    backgroundColor: "#000000",
                                    color: "#a2e6a5",
                                    border: '2px solid #3552366e',
                                  }
                                }

                        )}>Continuar</AlertDialogAction>
                            </AlertDialogFooter>
                    </AlertDialogContent>
            </AlertDialog>
          </TableCell>
      </TableRow>
    )
}