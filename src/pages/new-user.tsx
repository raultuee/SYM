import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CardNewUser } from "./ui/users/new-user/card-new-user";
import { Slash } from "lucide-react";

export function NewUser() {

    function SubHeaderNewUser() {
        
        return (
        <>
          <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Novo Usuário</h1>
    
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
                            <BreadcrumbLink href="/users/new">Novo Usuário</BreadcrumbLink>
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

            <div className="mt-7 gap-4 items-center justify-center">

           <SubHeaderNewUser />

        <CardNewUser />

            </div>

        </div>
    )
}