"use client"

import * as React from "react"
import {
  Wheat,
  Hammer,
} from "lucide-react"

import { SidebarPages } from "./sidebar-pages"
import { SidebarConfig } from "./sidebar-config"
import { SidebarUser } from "./sidebar-user"
import { SidebarEnterprise } from "./sidebar-enterprise"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {

  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  enterprises: [
    {
      name: "Acme Inc",
      logo: Wheat,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: Wheat,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Wheat,
      plan: "Free",
    },
  ],

  pages: [
    {
      title: "Section 1",
      url: "/contracts",
      icon: Hammer,
      isActive: false,
      items: [
        {
          title: "Tabela de Contratos",
          url: "/contracts?page=2",
        },
        {
          title: "Criar Contrato",
          url: "/contracts/new",
        },
      ],
    },

    {
      title: "Section 2",
      url: "#",
      icon: Hammer,
      items: [
        {
          title: "Tabela de Robôs",
          url: "/robots",
        },
      ],
    },
    {
      title: "Section 3",
      url: "#",
      icon: Hammer,
      items: [
        {
          title: "Tabela de Usuários",
          url: "/users",
        },
        {
          title: "Criar Usuário",
          url: "/users/new",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (

    <Sidebar className="bg-[#ece3d4]" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarEnterprise enterprises={data.enterprises} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarPages pages={data.pages} />
        <SidebarConfig/>
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    
  )
}
