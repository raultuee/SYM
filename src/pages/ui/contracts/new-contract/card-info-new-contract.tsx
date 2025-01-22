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
  
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Switch } from "@/components/ui/switch";
  import { Textarea } from "@/components/ui/textarea";
  
  import { FaDownload } from "react-icons/fa";
  import { FaFolder } from "react-icons/fa";
  import { Button } from "@/components/ui/button"
  import { toast } from "sonner"
import { Link } from "react-router-dom"

export function CardInfoNewContract() {
    return (
     <Card className=" w-[1350px] p-2 pb-5 mb-10 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">
      <form action="">
        <CardHeader>
        </CardHeader>
        <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="inline-flex items-center space-x-4" >
                <Label className="text-xs w-[120px]" htmlFor="code">Código</Label>
                <Input id="code" className="w-[100px]" disabled />
  
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
                <Label className="text-xs w-[120px]" htmlFor="code">Emeendimento</Label>
                <Input id="code" className="w-[650px]" />
  
                <Label className="text-xs w-[120px]" htmlFor="code">CNPJ</Label>
                <Input id="code" className="w-[190px]" />
              </div>
  
              <div className="inline-flex items-center space-x-4">
                <Label className="text-xs w-[120px]" htmlFor="code">Nome do Adquirente</Label>
                <Input id="code" className="w-[650px]" />
  
                <Label className="text-xs w-[120px]" htmlFor="code" >CPF Adquirente</Label>
                <Input id="code" className="w-[190px]" />
              </div>
  
              <div className="inline-flex items-center space-x-4">
                <Label className="text-xs w-[120px]" htmlFor="code">Nome do oponente</Label>
                <Input id="code" className="w-[648px]" />
  
                <Label className="text-xs w-[120px]" htmlFor="code" >CPF oponente</Label>
                <Input id="code" className="w-[190px]" />
              </div>
  
              <div className="inline-flex items-center space-x-4">
                <Label className="text-xs w-[120px] " htmlFor="code">Valor Financiamento</Label>
                <Input id="code" className="w-[300px]" />
  
                <Label className="text-xs w-[115px]" htmlFor="code" >Valor FGTS</Label>
                <Input id="code" className="w-[200px]" />
  
                <Label className="text-xs w-[120px] " htmlFor="code" >Valor Terreno</Label>
                <Input id="code" className="w-[190px]" />
              </div>
  
              <div className="inline-flex items-center space-x-4">
                <Label className="text-xs w-[120px] " htmlFor="code">Prazo Financiamento</Label>
                <Input id="code" className="w-[300px]" />
  
                <Label className="text-xs w-[115px]" htmlFor="code" >Cidade</Label>
                <Input id="code" className="w-[200px]" />
  
                <Label className="text-xs w-[120px]" htmlFor="code" >Data Assinatura</Label>
                <Input id="code" className="w-[190px]" />
              </div>
  
              <div className="inline-flex items-center space-x-4">
                <Label className="text-xs w-[120px]" htmlFor="code">Renda Comovada</Label>
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
                <Label className="text-xs font-bold w-[130px]">Torre, Bloco e Unidade</Label>
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
                <Label className="text-xs w-[130px]">Minuta do Contrato</Label>
                <Input className="w-[887px]" disabled/>
  
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
                  <Label className="text-xs w-[130px]">Ocorrência</Label>
                  <Textarea placeholder="" className="w-[1000px]"/>
              </div>
  
              <div className="inline-flex items-center space-x-4">
                    <Label className="text-xs w-[130px]">Validado por</Label>
                    <Input className="w-[300px]" disabled/>
  
                    <Label className="text-xs w-[130px]">Data Hora</Label>
                    <Input className="w-[300px]" disabled/>
  
                    <Label className="text-xs font-bold w-[130px]">Confirmar análise dos dados:</Label>
                    <Switch/>
              </div>
  
  
      <div className="ml-auto mt-3">
          <Link to="/contracts?page=2">
            <Button variant='outline' className="mr-4">Voltar</Button>
          </Link>
  
          <Button
            onClick={() => toast.success('Informações de contrato salvas.', {
                      style: {
                        backgroundColor: "#fffff",
                        color: "#a2e6a5",
                        border: '2px solid #3552360',
                      }
                      })}
          >Criar Contrato</Button>
        </div>
            </div>
        </CardContent>
      </form>                
</Card>
    )
}