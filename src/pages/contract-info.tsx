import { CardInfoContract } from "./ui/contracts/contract-info/card-info-contract"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export function ContractInfo() {

  function SubHeaderContractInfo() {
    return (
    <>
      <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Info. de Contrato</h1>

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

          <SubHeaderContractInfo/>

        <CardInfoContract />
      
      </div>

    </div>
    </>
    )
}