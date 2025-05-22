"use client"

import * as React from "react"
import {
  ArrowRightLeft,
  CircleDollarSign,
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
import { CommandDialogDemo } from "./command"

const data = {

  user: {
    name: "Desenvolvedor",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  enterprises: [
    {
      name: "Acme Inc",
      logo: CircleDollarSign,
      plan: "Enterprise",
    },
  ],

  pages: [
    {
      title: "Transações",
      url: "#",
      icon: ArrowRightLeft,
      isActive: false,
      items: [
        {
          title: "Tabela de Registros",
          url: "/register",
        },
        {
          title: "Item 2",
          url: "#",
        },
      ],
    },

    {
      title: "Section 2",
      url: "#",
      icon: Hammer,
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
      ],
    },
    {
      title: "Section 3",
      url: "#",
      icon: Hammer,
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
  return (

    <Sidebar className="bg-gray-50 dark:bg-zinc-950" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarEnterprise enterprises={data.enterprises} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarPages pages={data.pages} />
        <SidebarConfig/>
      </SidebarContent>
      <SidebarFooter>
        <CommandDialogDemo />
        <SidebarUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    
  )
}
