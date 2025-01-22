import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { TableContracts } from "./ui/contracts/table-contracts";
import { Slash } from "lucide-react";
import { CardFilterContracts } from "./ui/contracts/card-filter-contracts";

  export function Contracts() {

    function SubHeaderContract() {
      return (
      <>
        <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Contratos</h1>
  
        <Breadcrumb className="pb-4">
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

          <SubHeaderContract/>

          <CardFilterContracts />

          <TableContracts />
        
        </div>

      </div>
      </>
    )
  }