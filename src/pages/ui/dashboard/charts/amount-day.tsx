import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function DayOrdersAmountCard() {
    // Dados fictícios
    const dayOrdersAmount = {
        amount: 123,
        diffFromYesterday: 8,
    };

    return (
        <Card>
         <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-base font-semibold">Receita total (diária)</CardTitle>
             <Calendar className="h-4 w-4 text-muted-foreground" />
         </CardHeader>
         <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-3xl font-bold tracking-tight">{dayOrdersAmount.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            <p className="text-xs text-muted-foreground">
                {dayOrdersAmount.diffFromYesterday >= 0 ? (
                    <>
                    <span className="text-emerald-500 dark:text-emerald-400">+{dayOrdersAmount.diffFromYesterday}%</span>{' '}
                    em relação à ontem
                    </>
                ) : (
                    <>
                    <span className="text-rose-500 dark:text-rose-400">{dayOrdersAmount.diffFromYesterday}%</span>{' '}
                    em relação à ontem
                    </>
                )
            }
            </p>
          </>
        )}
         </CardContent>
        </Card>
    )
}