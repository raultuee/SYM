"use client"

import {
  Ham,
  HandHelping
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"


export function SidebarAdmin() {

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Painel Admin</SidebarGroupLabel>
      <SidebarMenu>

      <Link to="/alimentos">

      <SidebarMenuItem key="alimentos">
            <SidebarMenuButton className="cursor-pointer" asChild>

                    <section>
                      <Ham />
                      <span>Alimentos</span>
                    </section>

            </SidebarMenuButton>
          
          </SidebarMenuItem>
          </Link>

          <Link to="/nutricionistas">
          <SidebarMenuItem key="nutricionistas">
                    <SidebarMenuButton className="cursor-pointer" asChild>

                            <section>
                              <HandHelping />
                              <span>Nutricionistas</span>
                            </section>

                    </SidebarMenuButton>
          </SidebarMenuItem>
          </Link>

          <Link to="/consultorios">
          <SidebarMenuItem key="consultorios">
                    <SidebarMenuButton className="cursor-pointer" asChild>

                            <section>
                              <HandHelping />
                              <span>Consultórios</span>
                            </section>

                    </SidebarMenuButton>
          </SidebarMenuItem>
          </Link>

          <Link to="/pacientes">
          <SidebarMenuItem key="pacientes">
                    <SidebarMenuButton className="cursor-pointer" asChild>

                            <section>
                              <HandHelping />
                              <span>Pacientes</span>
                            </section>

                    </SidebarMenuButton>
          </SidebarMenuItem>
          </Link>

          <Link to="/objetivos">
          <SidebarMenuItem key="objetivos">
                    <SidebarMenuButton className="cursor-pointer" asChild>

                            <section>
                              <HandHelping />
                              <span>Objetivos</span>
                            </section>

                    </SidebarMenuButton>
          </SidebarMenuItem>
          </Link>

          <Link to="/nutricionistas">
          <SidebarMenuItem key="nutricionistas">
                    <SidebarMenuButton className="cursor-pointer" asChild>

                            <section>
                              <HandHelping />
                              <span>Nutricionistas</span>
                            </section>

                    </SidebarMenuButton>
          </SidebarMenuItem>
          </Link>

      </SidebarMenu>
    </SidebarGroup>
  )
}
