import { BarChartLabelUI } from "./ui/dashboard/charts/bar-chart-label-ui";
import { BarChartMixedUI } from "./ui/dashboard/charts/bar-chart-mixed-ui";
import { PieChartLabelUI } from "./ui/dashboard/charts/pie-chart-label-ui";
import { LineChartInterUI } from "./ui/dashboard/charts/line-chart-inter-ui";
import { DemoTableContract } from "./ui/dashboard/cards/demo-table-contract";
import { AccordionQuestions } from "./ui/dashboard/cards/accordion-questions";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";


export function Dashboard() {
  
  function SubHeaderDashboard() {
    return (
    <>
      <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Dashboard</h1>

      <Breadcrumb>
            <BreadcrumbList>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
        <>

          <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-black overflow-hidden">
            <div className="mt-7 gap-4 items-center justify-center">
          
              <SubHeaderDashboard />
              <span className=" p-10 inline-flex gap-6">
                <BarChartMixedUI />
                <BarChartLabelUI/>
                <PieChartLabelUI />
          
              </span>
              <span>
                <LineChartInterUI />
          
              </span>
              <DemoTableContract />

              <AccordionQuestions />
            </div>
          </div>
      </>
    )
}