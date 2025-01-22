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

import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table";

import { ImCheckmark } from "react-icons/im";


export interface Contract {
  cidade: string | null;
  data_cadastro: string | null;
  nome_adquirente: string | null;
  cpf_adquirente: string | null;
  status: number | null;
  alerta_cfd: string | null;
  cliente_assinou: number;
  data_input_mega: string | null;
  data_upload_arquivo: string | null;
  data_validacao_analista: string | null;
  data_confissao_divida: string | null; 
}

interface ContractTableRowProps {
    contract: Contract
}

export function ContractTableRow({ contract }: ContractTableRowProps) {
    return (
        <TableRow>
                        <TableCell className="text-sm">{contract.cidade}</TableCell>
                        <TableCell className="text-sm font-semibold">{contract.data_cadastro} {contract.nome_adquirente} - {contract.cpf_adquirente}</TableCell>
                        <TableCell>{contract.data_validacao_analista ? <ImCheckmark /> : null}</TableCell>
                        <TableCell>{contract.data_confissao_divida ? <ImCheckmark /> : null}</TableCell>
                        <TableCell>{contract.data_upload_arquivo ? <ImCheckmark /> : null}</TableCell>
                        <TableCell>{contract.data_input_mega ? <ImCheckmark /> : null}</TableCell>
                        <TableCell className="text-right inline-flex items-center">
                          <Link to="/contracts/info"> <Button variant="ghost"> <FaEdit className="text-blue-600"/> </Button> </Link>
          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost"> <MdDelete className="text-red-600"/> </Button>
                            </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                      <AlertDialogTitle>Você tem certeza que quer excluir este contrato?</AlertDialogTitle>
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