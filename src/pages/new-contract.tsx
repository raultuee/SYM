import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { CardInfoNewContract } from "./ui/contracts/new-contract/card-info-new-contract";

export function NewContract() {

    function SubHeaderNewContract() {
        return (
        <>
          <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Criação de Contrato</h1>
    
          <Breadcrumb>
                <BreadcrumbList>
    
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
    
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
    
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/contracts">Lista de Contratos</BreadcrumbLink>
                    </BreadcrumbItem>
    
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
    
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/contracts/info">Informações de Contrato</BreadcrumbLink>
                    </BreadcrumbItem>
    
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
    
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/contracts/new">Criação de Contrato</BreadcrumbLink>
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
            
                      <SubHeaderNewContract/>
            
                    <CardInfoNewContract />
                  
                  </div>
            
                </div>
        </>
      )
}