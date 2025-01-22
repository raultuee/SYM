import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


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
import { toast } from "sonner";

export function BadgeDemo() {
  return <Badge className="h-7">Administrativo</Badge>
}


export function CardUserInfoPerm() {
    return (
        <>
            <Card className=" w-[1350px] h-[480px] p-2 pb-5 mb-10 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">
                <CardContent className="flex-col p-5">
                    <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                        <Label className="w-[150px]">Robot</Label>

                        <Label className="pl-[230px]">Leitura</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Escrita</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Deleção</Label>
                        <Switch/>

                    </div>

                    <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                        <Label className="w-[150px]">Crédito Associativo</Label>

                        <Label className="pl-[230px]">Leitura</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Escrita</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Deleção</Label>
                        <Switch/>

                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                        <Label className="w-[150px]">Usuário</Label>

                        <Label className="pl-[230px]">Leitura</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Escrita</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Deleção</Label>
                        <Switch/>

                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                        <Label className="w-[150px]">Resumo Contratos</Label>

                        <Label className="pl-[230px]">Leitura</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Escrita</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Deleção</Label>
                        <Switch/>

                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                        <Label className="w-[150px]">CFD Assinada</Label>

                        <Label className="pl-[230px]">Leitura</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Escrita</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Deleção</Label>
                        <Switch/>

                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                        <Label className="w-[150px]">ApContrato</Label>

                        <Label className="pl-[230px]">Leitura</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Escrita</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Deleção</Label>
                        <Switch/>

                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                        <Label className="w-[150px]">C.Val.Fin</Label>

                        <Label className="pl-[230px]">Leitura</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Escrita</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Deleção</Label>
                        <Switch/>

                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                        <Label className="w-[150px]">Empreendimentos</Label>

                        <Label className="pl-[230px]">Leitura</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Escrita</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Deleção</Label>
                        <Switch/>

                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                        <Label className="w-[150px]">Fase</Label>

                        <Label className="pl-[230px]">Leitura</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Escrita</Label>
                        <Switch/>

                        
                        <Label className="pl-[230px]">Deleção</Label>
                        <Switch/>

                    </div>

                    <div className="inline-flex items-center space-x-4 mt-8 w-full">

                        <span className="space-x-3 pl-[1000px]">
                            <Button className="bg-green-600 hover:bg-green-800">Salvar</Button>
                            <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive">Deletar</Button>
                            </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                      <AlertDialogTitle>Você tem certeza que quer excluir este contrato?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Essa ação não é reversível, então esteja conciente antes da exclusão.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                            <AlertDialogAction
                                                className="bg-red-600 hover:bg-red-800"
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
                            <Link to="/users">
                                <Button className="bg-blue-600 hover:bg-blue-800">Voltar</Button>
                            </Link>
                        </span>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}