import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export function ButtonForgotPassword() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
        variant="outline"
        className="bg-white dark:bg-white"
        >Esqueci minha senha</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Esqueci minha senha, o que fazer?</DialogTitle>
          <DialogDescription>
            Escreva um e-mail de apoio para que a conta seja recuperada.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              E-mail
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
              <Button
              type="submit"
              onClick={() => toast.message('Enviamos um link no e-mail mencionado, verifique a caixa de entrada.', {
                style: {
                  backgroundColor: "#ffffff",
                  border: '2px solid #818181',
                }
              })}
              >Enviar código</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
