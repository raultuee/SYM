import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"

export function ContractTableSkeleton() {
    return Array.from({ length: 10 }).map((_, i) => {
        return (
            <TableRow key={i}>

                        <TableCell>
                            <Skeleton className="w-[170px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[500px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[120px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[120px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[120px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[120px] h-6"/>
                        </TableCell>
                        <TableCell>
                            <Skeleton className="w-[70px] h-6"/>                 
                        </TableCell>
            </TableRow>
        )
    })
}