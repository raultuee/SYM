import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export function PathItems() {
    return (
        <>
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
                        <BreadcrumbLink href="/users/new">Usuário</BreadcrumbLink>
                    </BreadcrumbItem>

                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users/new">Permissões</BreadcrumbLink>
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