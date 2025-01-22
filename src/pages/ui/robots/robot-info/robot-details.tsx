import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getRobotDetails } from "@/api/get-robot-details";
import { Badge } from "@/components/ui/badge";

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

export interface RobotDetailsProps {
    id: number;
    open: boolean;
    robot: Robot;
}

export interface BadgeProps {
    color: string;
}

export function RobotDetails({ id, open, robot }: RobotDetailsProps) {
    const { data: result } = useQuery({
        queryKey: ['robot', id],
        queryFn: () => getRobotDetails({ id }),
        enabled: open,
    })

    if (!result) {
        return null
    }

    function BadgeDemo({ color }: BadgeProps) {
        const colorWithoutSpeecthMarks = color.replace(/['"]+/g, '')
    
      return  (
            <div className="p-3 bg-slate-100 rounded border">
                <Badge className={`w-[70px] h-[25px] bg-[${colorWithoutSpeecthMarks}] hover:bg-[${colorWithoutSpeecthMarks}]`}></Badge>
            </div>
            )
        }

    return (

        <DialogContent>
            <DialogHeader className="items-center">
                <DialogTitle>Robô: {robot.nome}</DialogTitle>
                <DialogDescription>Informações do Robô</DialogDescription>
            </DialogHeader>

            {result && (
            <div className="h-[550px] rounded bg-white dark:bg-zinc-950">
                <section>
                    <div className="inline-flex items-center space-x-6 p-2 pt-3 w-full">
                        <Label>ID do Robô</Label>
                        <p>{id}</p>
                    </div>
                    <div className="inline-flex items-center space-x-6 p-2 w-full">
                        <Label className="w-[100px]">Descrição</Label>
                        <Input value={robot.descricao} />
                    </div>
                    <div className="inline-flex items-center space-x-6 p-2 w-full">
                        <Label className="w-[100px]">Cor</Label>
                        <BadgeDemo color={robot.cor} />
                    </div>
                    <div className="inline-flex items-center space-x-6 p-2 w-full">
                        <Label className="w-[100px]">Nome</Label>
                        <Input value={robot.nome}/>
                    </div>
                    <div className="inline-flex items-center space-x-6 p-2 w-full">
                        <Label className="w-[100px]">Limite de execução em Lote</Label>
                        <Input value={robot.qtd_limit}/>
                    </div>
                    <div className="inline-flex items-center space-x-6 p-2 w-full">
                        <Label className="w-[100px]">Cron Job</Label>
                        <Input value={robot.cron}/>
                    </div>
                    
                    <div className="inline-flex items-center space-x-6 p-2 w-full">
                        <Label className="w-[100px]">Qtd Tentativas</Label>
                        <Input value={robot.qtd_tentativas}/>
                    </div>

                    <div className="inline-flex items-center space-x-6 p-2 w-full">
                        <Label className="w-[100px]">E-mail</Label>
                        <Input value={robot.email}/>
                    </div>

                    <div className="inline-flex items-center space-x-6 p-2 w-full">
                    <Label className="w-[100px]">Status</Label>
                        
                        <Select>
                        <SelectTrigger>
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

                    <div className="inline-flex items-center space-x-4 w-full">

                    <span className="space-x-3 ml-auto mt-3">
                        <Button className="bg-red-600 hover:bg-red-800">Deletar</Button>
                        <Button className="bg-green-600 hover:bg-green-800">Salvar</Button>
                    </span>
                    </div>

                </section>
            </div>
            ) }

        </DialogContent>
    )
}