import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
    // Dados fictícios
    const MonthCanceledOrdersAmount = {
        amount: 305,
        diffFromLastMonth: -5,
    };

    return (
        <Card>
         <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-base font-semibold">Saída de renda (mês)</CardTitle>
             <TrendingDown className="h-4 w-4 text-muted-foreground" />
         </CardHeader>
         <CardContent className="space-y-1">
            <>
                <span className="text-3xl font-bold tracking-tight">
                    {MonthCanceledOrdersAmount.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <p className="text-xs text-muted-foreground">
                    {MonthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                        <>
                        <span className="text-emerald-500 dark:text-emerald-400">
                            {MonthCanceledOrdersAmount.diffFromLastMonth}%
                        </span>{' '}
                        em relação ao mês passado
                        </>
                    ) : (
                        <>
                        <span className="text-rose-500 dark:text-rose-400">
                            +{MonthCanceledOrdersAmount.diffFromLastMonth}%
                        </span>{' '} 
                        em relação ao mês passado
                        </>
                    )}
                </p>
            </>
         </CardContent>
        </Card>
    )
}