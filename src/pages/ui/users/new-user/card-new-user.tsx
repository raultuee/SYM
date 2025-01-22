import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export interface User {
    id: number;
    login: string;
    created_at: string | null;
    updated_at: string | null;
    token: string;
    email: string;
    nome: string;
    celular: string;
    setor: number;
    usuarioSafedoc: string | null;
    passwordSafedoc: string | null;
    ativo: boolean;
    ultimo_acesso: string;
    altera_contrato: number;
}


export function CardNewUser() {

    return (
        <>
        <Card className=" w-[1350px] h-[480px] p-2 pb-5 mb-10 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">
            <form action="">
                <CardContent>
                    <div className="inline-flex items-center space-x-4 p-2 w-full pt-8">
                        <Label className="w-[100px]">Nome</Label>
                        <Input className="w-[500px]" />
                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 w-full">
                        <Label className="w-[100px]">Login</Label>
                        <Input className="w-[500px]" />
                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 w-full">
                        <Label className="w-[100px]">E-mail</Label>
                        <Input className="w-[500px]" />
                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 w-full">
                        <Label className="w-[100px]">Celular</Label>
                        <Input className="w-[500px]" />
                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 w-full">
                        <Label className="w-[100px]">Setor</Label>
                
                        <Select>
                        <SelectTrigger className="w-[500px]">
                        <SelectValue placeholder="Selecione o setor"/>
                        </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Setores</SelectLabel>
                                <SelectItem value="apple">T.I</SelectItem>
                                <SelectItem value="banana">Repasse</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="inline-flex items-center space-x-4 p-2 pt-4 w-full">
                        <Label className="pr-4">Atualiza Contrato Associativo ?</Label>
                        <Switch />
                        <Label className="">Ativo</Label>
                        <Switch />
                    </div>
                    <div className="inline-flex items-center space-x-4 pt-16 w-full">
                        <span className="ml-auto">
                            <Button><PlusCircle /> Criar Usuário</Button>
                        </span>
                    </div>
                </CardContent>
            </form>
    </Card>

        </>
    )
}