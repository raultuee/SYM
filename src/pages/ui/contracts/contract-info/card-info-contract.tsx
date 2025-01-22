import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   
  
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Switch } from "@/components/ui/switch";
  import { Textarea } from "@/components/ui/textarea";
  
  import { FaDownload } from "react-icons/fa";
  import { FaFolder } from "react-icons/fa";
  import { Button } from "@/components/ui/button"
  import { toast } from "sonner"
  
  const invoices = [
    {
      date: "26/11/2024 14:00:34",
      analysis: "26/11/2024 13:43:21",
      cfd: "",
      signed: "",
      associative: "",
    }
  ]

export function CardInfoContract() {
    return (
     <Card className=" w-[1350px] h-[830px] p-2 pb-5 mb-10 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">

      <CardHeader>
        {/* <CardTitle>Cadastro de Crédito Associativo</CardTitle> */}
        {/* <CardDescription>Dados do contrato</CardDescription> */}
      </CardHeader>
      <CardContent className="justify-center items-center">
          <div className="grid w-full items-center gap-4">
            <div className="inline-flex items-center space-x-4" >
              <Label className="text-xs w-[120px] ml-12" htmlFor="code">Código</Label>
              <Input id="code" className="w-[100px]" />

              <Label className="text-xs" htmlFor="codemega">Cód. Mega</Label>
              <Input id="codemega"  className="w-[100px]" />

              <Label className="text-xs" htmlFor="numbercontract">Número de Contrato</Label>
              <Input id="numbercontract" placeholder="Número do seu contrato" className="w-[214px]" />

              <Label className="text-xs w-[120px]">Modalidade</Label>
              <Select>
                <SelectTrigger className="w-[190px]">
                  <SelectValue defaultValue="associativo" />
                </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Modalidades</SelectLabel>
                          <SelectItem value="associativo">Associativo (MCMV)</SelectItem>
                          <SelectItem value="sfh">SFH</SelectItem>
                          <SelectItem value="sbpe">SBPE</SelectItem>
                          <SelectItem value="credito_pessoal">Crédito Pessoal</SelectItem>
                          <SelectItem value="fgts">FGTS</SelectItem>
                          <SelectItem value="tst">TST</SelectItem>
                      </SelectGroup>
                   </SelectContent>
              </Select>
            </div>

            <div className="inline-flex items-center space-x-4">
              <Label className="text-xs w-[120px] ml-12" htmlFor="code">Empreendimento</Label>
              <Input id="code" className="w-[650px]" />

              <Label className="text-xs w-[120px]" htmlFor="code">CNPJ</Label>
              <Input id="code" className="w-[160px]" />
            </div>

            <div className="inline-flex items-center space-x-4">
              <Label className="text-xs w-[120px] ml-12" htmlFor="code">Nome do Adquirente</Label>
              <Input id="code" className="w-[650px]" />

              <Label className="text-xs w-[120px]" htmlFor="code" >CPF Adquirente</Label>
              <Input id="code" className="w-[160px]" />
            </div>

            <div className="inline-flex items-center space-x-4">
              <Label className="text-xs w-[120px] ml-12" htmlFor="code">Nome do oponente</Label>
              <Input id="code" className="w-[648px]" />

              <Label className="text-xs w-[120px]" htmlFor="code" >CPF oponente</Label>
              <Input id="code" className="w-[160px]" />
            </div>

            <div className="inline-flex items-center space-x-4">
              <Label className="text-xs w-[120px] ml-12 " htmlFor="code">Valor Financiamento</Label>
              <Input id="code" className="w-[300px]" />

              <Label className="text-xs w-[115px]" htmlFor="code" >Valor FGTS</Label>
              <Input id="code" className="w-[200px]" />

              <Label className="text-xs w-[120px] " htmlFor="code" >Valor Terreno</Label>
              <Input id="code" className="w-[160px]" />
            </div>

            <div className="inline-flex items-center space-x-4">
              <Label className="text-xs w-[120px] ml-12 " htmlFor="code">Prazo Financiamento</Label>
              <Input id="code" className="w-[300px]" />

              <Label className="text-xs w-[115px]" htmlFor="code" >Cidade</Label>
              <Input id="code" className="w-[200px]" />

              <Label className="text-xs w-[120px]" htmlFor="code" >Data Assinatura</Label>
              <Input id="code" className="w-[160px]" />
            </div>

            <div className="inline-flex items-center space-x-4">
              <Label className="text-xs w-[120px] ml-12" htmlFor="code">Renda Comovada</Label>
              <Input id="code" className="w-[300px]" />

              <Label className="text-xs w-[115px]" htmlFor="code" >Renda não Comprovada</Label>
              <Input id="code" className="w-[200px]" />

              <Label className="text-xs w-[120px] " htmlFor="code" >Composição Renda</Label>
              <Select>
                <SelectTrigger className="w-[190px]">
                  <SelectValue />
                </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Composições</SelectLabel>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="informal">Informal</SelectItem>
                          <SelectItem value="renda_mista">Renda Mista</SelectItem>
                      </SelectGroup>
                   </SelectContent>
              </Select>
            </div>

            <div className="inline-flex items-center space-x-4 pt-2">
              <Label className="text-xs font-bold w-[130px] ml-12">Torre, Bloco e Unidade</Label>
                <div>
                  <Label className="text-xs font-bold w-[130px]">Contrato</Label>
                  <Input className="w-[300px]"/>
                </div>
                <div>
                  <Label className="text-xs font-bold w-[130px]">SYS</Label>
                  <Input className="w-[300px]"/>
                </div>
                <div>
                  <Label className="text-xs font-bold w-[130px]">PROCURAÇÃO</Label>
                  <Input className="w-[365px]"/>
                </div>
            </div>

            <div className="inline-flex items-center space-x-4">
              <Label className="text-xs w-[130px] ml-12">Minuta do Contrato</Label>
              <Input className="w-[887px]"/>

              <span className="inline-flex items-center space-x-4 pl-5">
                
                <a href="sdad">
                  <FaDownload />
                </a>

                <a href="sdad">
                  <FaFolder />
                </a>
              </span>
            </div>

            <div className="inline-flex items-center space-x-4">
                <Label className="text-xs w-[130px] ml-12">Ocorrência</Label>
                <Textarea placeholder="" className="w-[1000px]"/>
            </div>

            <div className="inline-flex items-center space-x-4">
                  <Label className="text-xs w-[130px] ml-12">Validado por</Label>
                  <Input className="w-[300px]"/>

                  <Label className="text-xs w-[130px]">Data Hora</Label>
                  <Input className="w-[300px]"/>

                  <Label className="text-xs font-bold w-[130px]">Confirmar análise dos dados:</Label>
                  <Switch/>
            </div>

            <Table>
                <TableHeader>
                  <TableRow>
                        <TableHead className="font-bold">DT. CADASTRO</TableHead>
                        <TableHead className="font-bold">EM ANÁLISE</TableHead>
                        <TableHead className="font-bold">AGUARD. CFD</TableHead>
                        <TableHead className="font-bold">ASSINADOS</TableHead>
                        <TableHead className="font-bold">ASSOCIATIVO</TableHead>
                    </TableRow>
                </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <TableRow>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.analysis}</TableCell>
            <TableCell>{invoice.cfd}</TableCell>
            <TableCell>{invoice.signed}</TableCell>
            <TableCell>{invoice.associative}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <div className="ml-auto">
        <Button 
          onClick={() => toast.success('Informações de contrato salvas.', {
                    style: {
                      backgroundColor: "#fffff",
                      color: "#a2e6a5",
                      border: '2px solid #3552360',
                    }
                    })}
        >Salvar</Button>
      </div>
          </div>
      </CardContent>
        </Card>
    )
}