"use client"

import * as React from "react"
import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  Scroll,
  Users,
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
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  pages: [
    {
      title: "Contratos",
      url: "/contracts",
      icon: Scroll,
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
      title: "Robôs",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Tabela de Robôs",
          url: "/robots",
        },
      ],
    },
    {
      title: "Usuários",
      url: "#",
      icon: Users,
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

    <Sidebar collapsible="icon" {...props}>
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
