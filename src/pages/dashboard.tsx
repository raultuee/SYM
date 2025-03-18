import { BarChartLabelUI } from "./ui/dashboard/charts/bar-chart-label-ui";
import { BarChartMixedUI } from "./ui/dashboard/charts/bar-chart-mixed-ui";
import { PieChartLabelUI } from "./ui/dashboard/charts/pie-chart-label-ui";
import { LineChartInterUI } from "./ui/dashboard/charts/line-chart-inter-ui";
import { AccordionQuestions } from "./ui/dashboard/cards/accordion-questions";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import { SidebarInset, SidebarProvider, SidebarTrigger } from '../components/ui/sidebar';
import { AppSidebar } from './ui/sidebar/app-sidebar';

export function Dashboard() {
  
  function SubHeaderDashboard() {
    return (
    <>
    

      <h1 className="text-black dark:text-white font-bold text-3xl pb-2">Bem vindo à NutriAqui, User01!</h1>

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
    <SidebarProvider>
      <AppSidebar />

    <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-[#ece3d4] dark:bg-black">
              <div className='flex items-center gap-2 px-4'>
                <SidebarTrigger className="-ml-1"/>
              </div>
          </header>
    

          <div className="flex items-center justify-center min-h-screen bg-[#ece3d4] dark:bg-black overflow-hidden">
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

              <AccordionQuestions />
            </div>
          </div>
        
    </SidebarInset>

</SidebarProvider>
      </>
    )
}