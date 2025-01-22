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

import {
    Avatar,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Link } from "react-router-dom"
  
  import { toast } from "sonner";

export function SheetAvatar() {
    return (
            <div className="flex justify-center items-center ml-auto gap-2 pr-10">
            <Sheet>
                <SheetTrigger>
                <Button variant="ghost" className="w-auto h-auto">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                    <h2 className="text-black text-sm font-semibold dark:text-gray-400 pl-2">Raul Ferreira</h2>
                    </Button>
                </SheetTrigger>
                <SheetContent>
            <SheetHeader>
            <SheetTitle>Editar Usuário</SheetTitle>
            <SheetDescription>
                Determine o seu nome de usuário.
            </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                Nome
                </Label>
                <Input id="name" value="Current User" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                Senha
                </Label>
                <Input 
                id="password" 
                type="password" 
                required
                className="col-span-3"
                />
            </div>

                
            <SheetClose asChild>
                <Button
                className="hover:bg-blue-800"
                type="submit" 
                onClick={() => toast.success('Item salvo com sucesso!', {
                style: {
                    backgroundColor: "#fffff",
                    color: "#a2e6a5",
                    border: '2px solid #3552360',
                    }
                }
                
                )}>Salvar</Button>
            </SheetClose>

                
                <AlertDialog>
                    <AlertDialogTrigger>
                        <Button
                        type="submit"
                        className="bg-red-600 w-full hover:bg-red-800"
                        >Sair</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Você tem certeza que quer sair da conta?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esta ação pode causar problemas para o usuário refazer login novamente. 
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <Link to="/login">
                            <AlertDialogAction
                            className="bg-red-600 w-full hover:bg-red-800"
                            onClick={() => toast.success('Logout feito com sucesso.', {
                            style: {
                                backgroundColor: "#fffff",
                                color: "#a2e6a5",
                                border: '2px solid #3552360',
                                }
                            }
                            
                            )}>Continuar</AlertDialogAction>
                        </Link>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </SheetContent>
            </Sheet>
      </div>
    )
}