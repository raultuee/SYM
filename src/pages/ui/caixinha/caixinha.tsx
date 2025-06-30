import { Button } from "@/components/ui/button";
import PigBank from "./../../../assets/pig-bank.png";
import { PlusCircle } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { motion } from "framer-motion";
import { toast } from "sonner";

export function Caixinha() {
    return (
        <div className="w-screen flex items-center" style={{ height: "calc(100vh - 64px)" }}>
            <div className="w-1/2 gap-4 text-center">
                <motion.h1
                    className="scroll-m-20 text-5xl font-extrabold tracking-tight text-balance mb-2"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Inicie seu plano financeiro.
                </motion.h1>
                <motion.h3
                    className="scroll-m-20 text-2xl italic tracking-tight mb-5"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    Utilize a nova função do SYM, e inove suas finanças 
                </motion.h3>

                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                        <Button>
                            <PlusCircle/>
                            Criar caixinha
                        </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Caixinha</DialogTitle>
                            <DialogDescription>
                                Comece completando os campos abaixo.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                            <Label htmlFor="name-1">Nome da Caixinha</Label>
                            <Input id="name-1" name="name" placeholder="Ex: Viagem"  required/>
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="username-1">Valor da meta</Label>
                            <Input id="username-1" type="number" name="username"  required/>
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="username-1">Data de finalização</Label>
                            <Input type="date" required/>
                            </div>
                            <div className="flex gap-3">
                            <Checkbox required/>
                            <Label htmlFor="username-1" className="text-sm text-zinc-400 italic">O SYM está em fase de testes, então pode conter erros, esteja ciente sobre isso.</Label>
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                            <Button type="submit" onClick={() => toast.error("Essa função ainda não está disponível, aguarde atualizações futuras.")}>Finalizar</Button>
                        </DialogFooter>
                        </DialogContent>
                    </form>
                </Dialog>
            </div>
            <div className="w-1/2 flex items-center justify-center h-full">
                <motion.img
                    src={PigBank}
                    alt="Pig Bank"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    style={{ maxHeight: "400px", width: "auto" }}
                />
            </div>
        </div>
    )
}