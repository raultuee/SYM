import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import { CardFilterUsers } from "./ui/users/card-filter-users"

import { TableUsers } from "./ui/users/table-users"
 

export function Users() {

  function SubHeaderUser() {
    return (
    <>
      <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Lista de Usuários</h1>

      <Breadcrumb>
            <BreadcrumbList>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

            <BreadcrumbSeparator>
                <Slash />
            </BreadcrumbSeparator>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/users">Lista de Usuários</BreadcrumbLink>
                </BreadcrumbItem>

            <BreadcrumbSeparator>
                <Slash />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
                    <BreadcrumbLink href="/">....</BreadcrumbLink>
                </BreadcrumbItem>

            </BreadcrumbList>
      </Breadcrumb>
    </>
    )
  }

    return (
        <>
    <div className="flex justify-center min-h-screen bg-slate-100 dark:bg-black overflow-hidden">

    <div className="mt-7 gap-4 items-center justify-center">

        <SubHeaderUser/>

        <CardFilterUsers />

        <TableUsers />
        
        </div>

    </div>
        </>
    )
}