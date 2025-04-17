import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { TableFoods } from "./ui/alimentos/table-foods";
import { Slash } from "lucide-react";

export function Alimentos() {

    function SubHeaderAlimentos() {
        return (
        <>
          <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Alimentos</h1>
    
          <Breadcrumb className="pb-4">
                <BreadcrumbList>
    
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
    
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
  
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/alimentos">Alimentos</BreadcrumbLink>
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
        <div className="flex justify-center min-h-screen bg-slate-100 dark:bg-black overflow-hidden">

            <div className="mt-7 ml-5 gap-4 items-center justify-center">
                <SubHeaderAlimentos/>
                    <TableFoods />
            </div>
        </div>
    )
}