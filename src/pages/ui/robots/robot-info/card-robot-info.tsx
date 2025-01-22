import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BadgeDemo } from "./robot-details";

export function CardRobotInfo() {
    return (
        <>
            <Card className=" w-[1350px] h-[600px] p-2 pb-5 mb-10 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">
                    <CardContent>
                        <div className="inline-flex items-center space-x-6 p-2 pt-3 w-full">
                            <Label>Código</Label>
                            <p>2</p>
                        </div>
                        <div className="inline-flex items-center space-x-6 p-2 w-full">
                            <Label className="w-[100px]">Descrição</Label>
                            <Input value="Lança contratos associativos"  className="w-[800px]"/>
                        </div>
                        <div className="inline-flex items-center space-x-6 p-2 w-full">
                            <Label className="w-[100px]">Cor</Label>
                            <BadgeDemo color="" />
                        </div>
                        <div className="inline-flex items-center space-x-6 p-2 w-full">
                            <Label className="w-[100px]">Nome</Label>
                            <Input value="AssociativoShedule" className="w-[800px]"/>
                        </div>
                        <div className="inline-flex items-center space-x-6 p-2 w-full">
                            <Label className="w-[100px]">Limite de execução em Lote</Label>
                            <Input value="0" className="w-[800px]"/>
                        </div>
                        <div className="inline-flex items-center space-x-6 p-2 w-full">
                            <Label className="w-[100px]">Cron Job</Label>
                            <Input value="10 * * * * *"  className="w-[800px]"/>
                        </div>
                        
                        <div className="inline-flex items-center space-x-6 p-2 w-full">
                            <Label className="w-[100px]">Qtd Tentativas</Label>
                            <Input value="0"  className="w-[800px]"/>
                        </div>

                        <div className="inline-flex items-center space-x-6 p-2 w-full">
                            <Label className="w-[100px]">E-mail</Label>
                            <Input value="danilo@cleandev.com.br"  className="w-[800px]"/>
                        </div>

                        <div className="inline-flex items-center space-x-6 p-2 w-full">
                        <Label className="w-[100px]">Status</Label>
                            
                            <Select>
                            <SelectTrigger className="w-[800px]">
                            <SelectValue placeholder="Executando" />
                            </SelectTrigger>
                                <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Status</SelectLabel>
                                    <SelectItem value="apple">Executando</SelectItem>
                                    <SelectItem value="banana">Ativo</SelectItem>
                                    <SelectItem value="blueberry">Inativo</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                        </div>

                        <div className="inline-flex items-center space-x-4 mt-8 w-full">

                        <span className="space-x-3 ml-[1000px]">
                            <Button className="bg-green-600 hover:bg-green-800">Salvar</Button>
                            <Button className="bg-red-600 hover:bg-red-800">Deletar</Button>
                            <Link to="/robots">
                                <Button className="bg-blue-600 hover:bg-blue-800">Voltar</Button>
                            </Link>
                        </span>
                        </div>

                    </CardContent>
            </Card>

        </>
    )
}