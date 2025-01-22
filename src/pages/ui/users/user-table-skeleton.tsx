import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"

export function UserTableSkeleton() {
    return Array.from({ length: 10 }).map((_, i) => {
        return (
            <TableRow key={i}>

                        <TableCell>
                            <Skeleton className="w-[100px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[120px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[250px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[100px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[100px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[120px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[100px] h-6"/>                 
                        </TableCell>
            </TableRow>
        )
    })
}