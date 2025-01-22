import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ImFilter } from "react-icons/im"

import { z } from "zod";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner"

const userFilterSchema = z.object({
    nome: z.string().optional(),
})

type UserFiltersSchema = z.infer<typeof userFilterSchema>

export function CardFilterUsers() {
  const [searchParams, setSearchParams] = useSearchParams()

  const nome = searchParams.get('nome')

  const { register, handleSubmit, reset } = useForm<UserFiltersSchema>({
    resolver: zodResolver(userFilterSchema),
    defaultValues: {
      nome: nome ?? '',
    }
  })

  function handleFilter({ nome }: UserFiltersSchema) {
    setSearchParams(state => {
      if (nome) {
        state.set('nome', nome)
      } else {
        state.delete('nome')
      }

      // state.set('page', '1')

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams(state => {
      state.delete('nome')
      // state.delete("page", "1")

      return state
    })

    reset({
      nome: '',
    })
  }

    return (
        <Card className="w-[1400px] mt-[30px]">
          <form onSubmit={handleSubmit(handleFilter)}>
            <CardHeader>
              <CardTitle>Filtrar Usuários</CardTitle>
              <CardDescription>Filtrar usuários por nomes.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Nome</Label>
                    <Input 
                     id="name" 
                     placeholder="Nome do usuário"
                     {...register('nome')}
                    />
                  </div>
                </div>
              
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary" onClick={handleClearFilters}>Limpar</Button>
              <Button 
               className="ml-auto"
               onClick={() => {
                toast.success("Resultados filtrados.", {
                  style: {
                    backgroundColor: "#fffff",
                    color: "#5b965e",
                    border: '2px solid #3552360',
                  }
                })
              }}><ImFilter/>Filtrar resultados</Button>
            </CardFooter>
          </form>
        </Card>
    )
}