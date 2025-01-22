"use client"

import {
  Bell,
  MoreHorizontal,
  SunMoon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useTheme } from "@/pages/theme/theme-provider"
import { toast } from "sonner"

export function SidebarConfig() {
  const { isMobile } = useSidebar()

  const { setTheme } = useTheme()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Configurações</SidebarGroupLabel>
      <SidebarMenu>

      <SidebarMenuItem key="choose-theme">

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="cursor-pointer" asChild>

                <section>
                  <SunMoon />
                  <span>Escolher Tema</span>
                </section>

            </SidebarMenuButton>
          </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                  <DropdownMenuItem onClick={() => { setTheme("light"); toast.success("Tema Escolhido: Claro"); }}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => { setTheme("dark"); toast.success("Tema Escolhido: Escuro"); }}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => { setTheme("system"); toast.success("Tema Escolhido: Padrão do Sistema"); }}>  
                    System
                  </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>

          <SidebarMenuItem key="choose-notification">
              <DropdownMenu>
                 <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="cursor-pointer" asChild>

                        <section>
                          <Bell />
                          <span>Notificações</span>
                        </section>

                    </SidebarMenuButton>
                </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                  <DropdownMenuItem onClick={() => toast.success("Notificações ligadas")}>
                    Ligado
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.error("Notificações desligadas")}>
                    Desligado
                  </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>


        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
