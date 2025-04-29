"use client"

import * as React from "react"
import {
  Citrus,
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
import { SidebarAdmin } from "./sidebar-admin"
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
      logo: Citrus,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: Citrus,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Citrus,
      plan: "Free",
    },
  ],

  pages: [
    {
      title: "Section 1",
      url: "#",
      icon: Hammer,
      isActive: false,
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

    <Sidebar className="bg-[#ece3d4]" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarEnterprise enterprises={data.enterprises} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarPages pages={data.pages} />
        <SidebarConfig/>
        <SidebarAdmin />
      </SidebarContent>
      <SidebarFooter>
        <CommandDialogDemo />
        <SidebarUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    
  )
}
