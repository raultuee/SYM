import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export function MonthOrdersAmountCard() {
    // Dados fictícios
    const MonthOrdersAmount = {
        amount: 1400,
        diffFromLastMonth: 12,
    };

    return (
        <Card>
         <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-base font-semibold">Entrada de renda (mês)</CardTitle>
             <TrendingUp className="h-4 w-4 text-muted-foreground" />
         </CardHeader>
         <CardContent className="space-y-1">
            <>
                <span className="text-3xl font-bold tracking-tight">
                  {MonthOrdersAmount.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <p className="text-xs text-muted-foreground">
                    {MonthOrdersAmount.diffFromLastMonth >= 0 ? (
                        <>
                        <span className="text-emerald-500 dark:text-emerald-400">
                            +{MonthOrdersAmount.diffFromLastMonth}%
                        </span>{' '}
                        em relação ao mês passado
                        </>
                    ) : (
                        <>
                        <span className="text-rose-500 dark:text-rose-400">
                            {MonthOrdersAmount.diffFromLastMonth}%
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