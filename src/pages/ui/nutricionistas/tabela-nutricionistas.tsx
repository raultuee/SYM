import { Card } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const nutricionistas = [
    {
      id: "1",
      nome: "Ana Souza",
      email: "ana.souza@email.com",
      senha: "senha123",
      crn: "123456",
      telefone: "(11) 98765-4321",
      createdAt: new Date("2024-03-15T10:00:00"),
      updatedAt: new Date("2024-04-01T12:30:00"),
    },
    {
      id: "2",
      nome: "Carlos Mendes",
      email: "carlos.mendes@email.com",
      senha: "senha123",
      crn: "234567",
      telefone: "(21) 99876-5432",
      createdAt: new Date("2024-02-10T08:20:00"),
      updatedAt: new Date("2024-04-02T14:45:00"),
    },
    {
      id: "3",
      nome: "Juliana Lima",
      email: "juliana.lima@email.com",
      senha: "senha123",
      crn: "345678",
      telefone: "(31) 91234-5678",
      createdAt: new Date("2024-01-22T09:15:00"),
      updatedAt: new Date("2024-04-05T16:10:00"),
    },
    {
      id: "4",
      nome: "Bruno Ferreira",
      email: "bruno.ferreira@email.com",
      senha: "senha123",
      crn: "456789",
      telefone: "(41) 98765-1234",
      createdAt: new Date("2024-03-20T11:00:00"),
      updatedAt: new Date("2024-04-10T13:00:00"),
    },
    {
      id: "5",
      nome: "Fernanda Rocha",
      email: "fernanda.rocha@email.com",
      senha: "senha123",
      crn: "567890",
      telefone: "(61) 99654-3210",
      createdAt: new Date("2024-02-25T15:30:00"),
      updatedAt: new Date("2024-04-08T10:45:00"),
    },
    {
      id: "6",
      nome: "Gabriel Alves",
      email: "gabriel.alves@email.com",
      senha: "senha123",
      crn: "678901",
      telefone: "(51) 98712-3456",
      createdAt: new Date("2024-03-05T14:10:00"),
      updatedAt: new Date("2024-04-07T09:20:00"),
    },
    {
      id: "7",
      nome: "Isabela Martins",
      email: "isabela.martins@email.com",
      senha: "senha123",
      crn: "789012",
      telefone: "(71) 99876-4567",
      createdAt: new Date("2024-01-30T10:50:00"),
      updatedAt: new Date("2024-03-28T12:00:00"),
    },
    {
      id: "8",
      nome: "Lucas Ribeiro",
      email: "lucas.ribeiro@email.com",
      senha: "senha123",
      crn: "890123",
      telefone: "(81) 98765-0987",
      createdAt: new Date("2024-02-18T13:00:00"),
      updatedAt: new Date("2024-04-06T11:25:00"),
    },
    {
      id: "9",
      nome: "Marina Carvalho",
      email: "marina.carvalho@email.com",
      senha: "senha123",
      crn: "901234",
      telefone: "(85) 91234-5670",
      createdAt: new Date("2024-03-01T09:30:00"),
      updatedAt: new Date("2024-04-03T10:15:00"),
    },
    {
      id: "10",
      nome: "Thiago Costa",
      email: "thiago.costa@email.com",
      senha: "senha123",
      crn: "012345",
      telefone: "(95) 99888-1122",
      createdAt: new Date("2024-03-12T16:45:00"),
      updatedAt: new Date("2024-04-09T17:30:00"),
    },
  ]
  
  export function TabelaNutricionistas() {
    return (
        <Card className="flex items-center justify-center w-[1200px] overflow-y-auto p-2 pb-5 mb-10 mt-10 br-8 rounded border bg-white dark:bg-zinc-950">
          <Table className="">
            <TableCaption>Tabela de Nutricionistas</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead className="">Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Senha</TableHead>
                <TableHead>CRN</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Criado</TableHead>
                <TableHead>Atualizado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nutricionistas.map((nutri) => (
                <TableRow key={nutri.id}>
                  <TableCell className="font-medium">{nutri.id}</TableCell>
                  <TableCell className="font-bold">{nutri.nome}</TableCell>
                  <TableCell>{nutri.email}</TableCell>
                  <TableCell>{nutri.senha}</TableCell>
                  <TableCell>{nutri.crn}</TableCell>
                  <TableCell>{nutri.telefone}</TableCell>
                  <TableCell>{nutri.createdAt.toLocaleString()}</TableCell>
                  <TableCell>{nutri.updatedAt.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </Card>
    )
  }
