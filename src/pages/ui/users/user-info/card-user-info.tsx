import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";

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

export interface CardUserInfoProps {
    id: number
    user: User
}

export function CardUserInfo({ id, user }: CardUserInfoProps) {

    return (
        <>
        <Card className=" w-[1350px] h-[480px] p-2 pb-5 mb-10 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">
            <CardContent>
                <div className="inline-flex items-center space-x-4 p-2 pt-3 w-full">
                    <Label>Código</Label>
                    <p>{id}</p>
                </div>
                <div className="inline-flex items-center space-x-4 p-2 w-full">
                    <Label className="w-[100px]">Nome</Label>
                    <Input className="w-[500px]" value={user.nome}/>
                </div>
                <div className="inline-flex items-center space-x-4 p-2 w-full">
                    <Label className="w-[100px]">Login</Label>
                    <Input className="w-[500px]" value={user.login}/>
                </div>
                <div className="inline-flex items-center space-x-4 p-2 w-full">
                    <Label className="w-[100px]">E-mail</Label>
                    <Input className="w-[500px]" value={user.email}/>
                </div>
                <div className="inline-flex items-center space-x-4 p-2 w-full">
                    <Label className="w-[100px]">Celular</Label>
                    <Input className="w-[500px]" value={user.celular}/>
                </div>
                <div className="inline-flex items-center space-x-4 p-2 w-full">
                    <Label className="w-[100px]">Setor</Label>
                    
                    <Select>
                    <SelectTrigger className="w-[230px]">
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

                    <Label className="pl-14">Ativo</Label>

                    <Switch />
                </div>

                <div className="inline-flex items-center space-x-4 p-2 pt-4 w-full">
                    <Label>Data de Cadastro</Label>
                    <p className="pr-[158px]">{user.created_at}</p>

                    <Label>Último Acesso</Label>
                    <p>{user.ultimo_acesso}</p>
                </div>

                <div className="inline-flex items-center space-x-4 p-2 pt-4 w-full">
                    <Label className="pr-4">Atualiza Contrato Associativo ?</Label>
                    <Switch />
                </div>

                <div className="inline-flex items-center space-x-4 p-2 pt-4 w-full"> 
                    <span className="">
                        <Button>Ver Permissões</Button>
                    </span>
                </div>
            </CardContent>
    </Card>

        </>
    )
}

// checked={user.altera_contrato === 1 && true}