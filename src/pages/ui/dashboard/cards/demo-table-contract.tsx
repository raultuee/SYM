import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  import { MdArrowOutward } from "react-icons/md";

  import { Link } from "react-router-dom";
  import { Card } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  
  const invoices = [
    {
        city: "Franca",
        contract: "[26/11/2024] Antônio Carlos Divino",
        analysis: "Concluído",
        cfd: "Concluído",
        signed: "Concluído",
        sociative: "Concluído"
    },

    {
      city: "...",
      contract: "...",
      analysis: "...",
      cfd: "...",
      signed: "...",
      sociative: "..."
  },
  ]

export function DemoTableContract() {
    return (
        <section className="w-[1155px]">

            <Link to="/contracts">
              <h2 className="font-bold text-2xl mt-9 w-auto">Lista de Contratos</h2>
            </Link>
              <p>Veja seus contratos registrados, e modifique eles da sua forma.</p>

            <Card className=" p-4 mt-3 mb-16">
              <div>
               <Table>
                  <TableHeader>
                      <TableRow> 
                    <TableHead className="w-[170px]">Cidade</TableHead>
                    <TableHead className="w-[500px]">Contratos de Financiamento</TableHead>
                    <TableHead className="w-[120px] pr-3">Em análise</TableHead>
                    <TableHead className="w-[120px] pr-3">Aguard. CFD</TableHead>
                    <TableHead className="w-[120px] pr-3">Assinados</TableHead>
                    <TableHead className="w-[120px] pr-3">Associativo</TableHead>
                      </TableRow>
                  </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
                        <TableRow>
                        <TableCell>{invoice.city}</TableCell>
                        <Link to='/contract-info'>
                          <TableCell className="font-medium text-blue-600 dark:text-green-600">{invoice.contract}</TableCell>
                        </Link>
                        <TableCell>{invoice.analysis}</TableCell>
                        <TableCell>{invoice.cfd}</TableCell>
                        <TableCell>{invoice.signed}</TableCell>
                        <TableCell>{invoice.sociative}</TableCell>
                        </TableRow>

                        
                      ))}
                    </TableBody>
              </Table>
              </div>
              <div className="mt-5">
                <Link to="/contracts?page=2">
                  <Button
                      className="text-base"
                      variant="link"
                  >Veja seus contratos <MdArrowOutward /> </Button>
                </Link>
      </div>
            </Card>
          </section>
    )
}