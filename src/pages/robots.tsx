import { TableRobots } from "./ui/robots/table-robots";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export function Robots() {

    function SubHeaderRobot() {
        return (
        <>
          <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Robôs</h1>
    
          <Breadcrumb>
                <BreadcrumbList>
    
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
    
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
    
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/robots">Lista de Robôs</BreadcrumbLink>
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

                <SubHeaderRobot />

                <TableRobots />
            </div>
        </div>
    </>
    )
}