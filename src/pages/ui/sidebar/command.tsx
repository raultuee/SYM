"use client"

import * as React from "react"
import {
  DoorOpen,
  Ham,
  HandHelping,
  Hospital,
  Menu,
  TableProperties,
  Users,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { FaTasks } from "react-icons/fa"
import { Link } from "react-router-dom"
import { toast } from "sonner"

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Navegue pela NutriAqui..." />
        <CommandList>
          <CommandEmpty>Sem resultados.</CommandEmpty>
          <CommandGroup heading="Sugestões">

            <Link to="/pacientes">
              <CommandItem className="cursor-pointer" onSelect={() => setOpen(false)} onClick={() => toast.success("Navegação concluída.")}>
                <Users />
                <span>Pacientes</span>
              </CommandItem>
            </Link>

            <Link to="/alimentos">
              <CommandItem className="cursor-pointer" onSelect={() => setOpen(false)} onClick={() => toast.success("Navegação concluída.")}>
                <Ham />
                <span>Alimentos</span>
              </CommandItem>
            </Link>

            <Link to="/nutricionistas">
              <CommandItem className="cursor-pointer" onSelect={() => setOpen(false)} onClick={() => toast.success("Navegação concluída.")}>
                <HandHelping />
                <span>Nutricionistas</span>
              </CommandItem>
            </Link>

          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Mais páginas">

            <Link to="/consultorios">
              <CommandItem className="cursor-pointer" onSelect={() => setOpen(false)} onClick={() => toast.success("Navegação concluída.")}>
                <Hospital />
                <span>Consultórios</span>
              </CommandItem>
            </Link>
            
            <Link to="/objetivos">
              <CommandItem className="cursor-pointer" onSelect={() => setOpen(false)} onClick={() => toast.success("Navegação concluída.")}>
                <FaTasks />
                <span>Objetivos</span>
              </CommandItem>
            </Link>

            <Link to="/propriedades">
              <CommandItem className="cursor-pointer" onSelect={() => setOpen(false)} onClick={() => toast.success("Navegação concluída.")}>
                <TableProperties />
                <span>Propriedades</span>
              </CommandItem>
            </Link>

            <Link to="/">
              <CommandItem className="cursor-pointer" onSelect={() => setOpen(false)} onClick={() => toast.success("Navegação concluída.")}>
                <Menu />
                <span>Dashboard</span>
              </CommandItem>
            </Link>

            <Link to="/login">
              <CommandItem className="cursor-pointer" onSelect={() => setOpen(false)} onClick={() => toast.success("Navegação concluída.")}>
                <DoorOpen />
                <span>Fazer Log out</span>
              </CommandItem>
            </Link>

          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
