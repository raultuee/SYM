import { useQuery } from "@tanstack/react-query";
import { SubHeader } from "./ui/header/sub-header";
import { CardUserInfo } from "./ui/users/user-info/card-user-info";
import { CardUserInfoPerm } from "./ui/users/user-info/card-user-info-perm";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { getUserDetails } from "@/api/get-user-details";
import { useParams } from "react-router-dom";

export interface User {
    id: number;
    login: string;
    created_at: string | null;
    updated_at: string | null;
    token: string;
    email: string;
    nome: string;
    celular: string;
    setor: number;
    usuarioSafedoc: string | null;
    passwordSafedoc: string | null;
    ativo: boolean;
    ultimo_acesso: string;
    altera_contrato: number;
}

export interface UserInfoProps {
    user: User;
}

export function UserInfo() {
    
    function SubHeaderUserInfo() {


        return (
        <>
          <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Info. de Usuário</h1>
    
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
                            <BreadcrumbLink href="/users/info">Informações de Usuário</BreadcrumbLink>
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

      const { id } = useParams();

    const { data: user} = useQuery({
        queryKey: ['user', id],
        queryFn: () => getUserDetails({ id: Number(id) })
    })

    return (
        <>
            <div className="flex justify-center min-h-screen bg-slate-100 dark:bg-black overflow-hidden">

            <div className="mt-7 gap-4 items-center justify-center">

                <SubHeaderUserInfo/>

                    {user && 
                        <CardUserInfo id={user.id} user={user}
                    />
                    }

                <SubHeader title="Permissões"/>
                    
                    <CardUserInfoPerm />
            </div>

            </div>
        
        </>
    )
}