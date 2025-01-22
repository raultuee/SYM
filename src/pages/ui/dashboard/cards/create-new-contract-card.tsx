import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

import { FiPlusCircle } from "react-icons/fi";

export function CreateNewContractCard() {
    return (
        <section>
            <Link to="/contracts">
              <h2 className="font-bold text-2xl mt-9 w-auto">Criar um novo Contrato</h2>
            </Link>
              <p>Crie um novo contrato a partir dos preenchimentos dos campos abaixo.</p>

            <Card className="mt-3">
                <CardHeader>
                    <CardTitle>Crédito Associativo</CardTitle>
                </CardHeader>
                <CardContent>
                <div className="">
                            <span className="flex justify-center">
                                <Input placeholder="Cidade" className="w-[200px] inline-block mr-5"/>
                                
                                <Input placeholder="CPF do Adquirente" className="w-[200px] inline-block mr-5"/>

                                <Input placeholder="Nome do Adquirente" className="w-[300px] inline-block mr-5"/>
                                    <Link to="/contracts/new">
                                        <Button className="" > <FiPlusCircle />
                                        Criar contrato</Button>
                                    </Link>
                            </span>
                            <span>
                            </span>
                        </div>
                </CardContent>
            </Card>
        </section>
    )
}

