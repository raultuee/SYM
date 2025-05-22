import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { getTransactions } from "@/db/transactions-local";
import React from "react";

export function MonthOrdersAmountCard() {
    // Soma todas as transações de entrada (type === true)
    const [amount, setAmount] = React.useState(0);

    React.useEffect(() => {
        const transactions = getTransactions();
        const sum = transactions
            .filter(t => t.type === true)
            .reduce((acc, t) => acc + (t.amount || 0), 0);
        setAmount(sum);
    }, []);

    // Valor fictício para diffFromLastMonth, ajuste conforme necessário
    const diffFromLastMonth = 12;

    return (
        <Card>
         <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-base font-semibold">Entrada de renda (mês)</CardTitle>
             <TrendingUp className="h-4 w-4 text-muted-foreground" />
         </CardHeader>
         <CardContent className="space-y-1">
            <>
                <span className="text-3xl font-bold tracking-tight">
                  {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <p className="text-xs text-muted-foreground">
                    {diffFromLastMonth >= 0 ? (
                        <>
                        <span className="text-emerald-500 dark:text-emerald-400">
                            +{diffFromLastMonth}%
                        </span>{' '}
                        em relação ao mês passado
                        </>
                    ) : (
                        <>
                        <span className="text-rose-500 dark:text-rose-400">
                            {diffFromLastMonth}%
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