import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ImFilter } from "react-icons/im";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const contractFiltersSchema = z.object({
    nome_adquirente: z.string().optional(),
    cpf_adquirente: z.string().optional(),
    cidade: z.string().optional(),
})

type ContractFiltersSchema = z.infer<typeof contractFiltersSchema>

export function CardFilterContracts() {
    const [searchParams, setSearchParams] = useSearchParams()

    const nome_adquirente = searchParams.get('nome')
    const cpf_adquirente = searchParams.get('cpf')
    const cidade = searchParams.get('cidade')

    const { register, handleSubmit, reset } = useForm<ContractFiltersSchema>({
        resolver: zodResolver(contractFiltersSchema),
        defaultValues: {
            nome_adquirente: nome_adquirente ?? '',
            cidade: cidade ?? '',
            cpf_adquirente: cpf_adquirente ?? '',
        }
    })

    function handleFilter({ cidade, cpf_adquirente, nome_adquirente }: ContractFiltersSchema) {
        setSearchParams(state => {
            if(nome_adquirente) {
                state.set('nome', nome_adquirente)
            } else {
                state.delete('nome')
            }

            if(cidade) {
                state.set('cidade', cidade)
            } else {
                state.delete('cidade')
            }

            if(cpf_adquirente) {
                state.set('cpf', cpf_adquirente)
            } else {
                state.delete('cpf')
            }

            state.set('page', '2')

            return state
        })
    }

    function handleClearFilters() {
        setSearchParams(state => {
          state.delete('nome')
          state.delete('cidade')
          state.delete('cpf')
          // state.delete("page", "1")
    
          return state
        })
    
        reset({
          nome_adquirente: '',
          cidade: '',
          cpf_adquirente: '',
        })
      }

    return (
        <>
            <Card className="h-[160px]">
                <form onSubmit={handleSubmit(handleFilter)}>
                    <CardHeader>
                        <CardTitle>Filtrar Contratos</CardTitle>
                        <CardDescription>
                            Filtre os contratos pelos campos abaixo.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="">
                            <span className="flex">
                                <Input placeholder="Filtrar por cidade" className="w-[200px] inline-block mr-5" {...register('cidade')}/>
                                
                                <Input placeholder="Filtrar por CPF" className="w-[250px] inline-block mr-5" {...register('cpf_adquirente')}/>

                                <Input placeholder="Filtrar por nome" className="w-[300px] inline-block mr-5" {...register('nome_adquirente')}/>

                                    <Select>
                                        <SelectTrigger className="w-[200px]  mr-5">
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectGroup>
                                            <SelectLabel>Status</SelectLabel>
                                            <SelectItem value="apple">Executando</SelectItem>
                                            <SelectItem value="banana">Ativo</SelectItem>
                                            <SelectItem value="blueberry">Inativo</SelectItem>
                                          </SelectGroup>
                                        </SelectContent>
                                    </Select>
                            
                                <Button className="mr-5">
                                   <ImFilter/> Filtrar resultados
                                </Button>

                                <Button onClick={handleClearFilters} variant='secondary'>
                                 Limpar filtros
                                </Button>
                            </span>
                            <span>
                            </span>
                        </div>
                    </CardContent>
                </form>
            </Card>
        </>
    )
}