import { MonthRevenueCard } from "./charts/month-revenue";
import { MonthOrdersAmountCard } from "./charts/month-earnings";
import { DayOrdersAmountCard } from "./charts/amount-day";
import { MonthCanceledOrdersAmountCard } from "./charts/month-expenses";
import { RevenueChart } from "./charts/revenue-chart";
import { PopularProductsChart } from "./charts/popular-products-chart";
import { Separator } from "@/components/ui/separator";

export function Dashboard() {

  return (
      <div className="flex flex-col min-h-screen w-full gap-6 p-14 dark:bg-black">
        <h1 className="text-4xl font-bold tracking-tight self-start">Dashboard</h1>
        {/* self-start faz o h1 alinhar à esquerda */}
        <div className="grid grid-cols-4 gap-7">
            <MonthRevenueCard />
            <MonthOrdersAmountCard />
            <MonthCanceledOrdersAmountCard />
            <DayOrdersAmountCard />
        </div>

        <Separator/>

        <div className="flex gap-4">
            <RevenueChart />
            <PopularProductsChart />
        </div>
    </div>
  );
}
