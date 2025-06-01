import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { CircleFadingPlus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function DialogForm({ onAddTransaction }: { onAddTransaction: (t: { name: string; amount: number; type: boolean; method: "credit" | "debit" | "pix" | "money"; }) => void }) {
    const [transactions, setTransactions] = useState<Array<z.infer<typeof formSchema>>>([]);

    const formSchema = z.object({
      name: z.string().min(2, {
        message: "A transação deve ter pelo menos 2 letras.",
      }),
      amount: z.number().min(0, {
        message: "O valor deve ser maior que 0.",
      }),
      type: z.boolean(), // Entrada/Saída
      method: z.enum(["debit", "credit", "pix", "money"]), // Método de pagamento
      link: z.string().optional(),
      })

    function generateId() {
      return Math.random().toString(36).substring(2, 8);
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        const amount = values.type ? values.amount : -Math.abs(values.amount);
        const transactionWithId = { ...values, amount, id: generateId() };
        onAddTransaction(transactionWithId);
        setTransactions(prev => [...prev, { ...values, amount }]);
        form.reset(); // Limpa todos os campos do formulário
        toast.success("Transação criada!");
        console.log(values, amount);
        console.log("Array de transações:", transactions);
    }

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        amount: 0,
        type: true,
      },
    });

    // Observe o valor do campo "type"
    const typeValue = form.watch("type");

    return (
      <Dialog>
        <DialogTrigger>
          <Button variant="secondary" className="">
            <CircleFadingPlus />
            Criar transação
          </Button>
        </DialogTrigger>
        <DialogContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} value={field.value} onChange={e => field.onChange(e.target.valueAsNumber)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="method"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Método</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="debit">Débito</SelectItem>
                        <SelectItem value="credit">Crédito</SelectItem>
                        <SelectItem value="pix">Pix</SelectItem>
                        <SelectItem value="money">Dinheiro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value === "true")}
                      defaultValue={field.value ? "true" : "false"}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Entrada</SelectItem>
                        <SelectItem value="false">Saída</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Input extra só aparece se for Saída */}
              {typeValue === false && (
                <FormField
                  control={form.control}
                  name="link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link da Compra (Opcional)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <DialogClose>
                <Button
                  className="ml-auto"
                  type="submit">
                  Criar transação
                </Button>
              </DialogClose>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
}
