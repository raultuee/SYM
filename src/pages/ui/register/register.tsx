import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { z } from "zod";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "@/components/ui/breadcrumb";
import { getTransactions, addTransaction, deleteTransactions } from "@/db/transactions-local";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = z.object({
  name: z.string().min(2),
  amount: z.number().min(0),
  type: z.boolean(),
  method: z.enum(["credit", "debit", "pix", "money"])
});

export type Transaction = z.infer<typeof formSchema> & { id: string; createdAt: Date };

export function Register() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Só roda no client
    const loaded = getTransactions().map(t => ({
      ...t,
      createdAt: new Date(t.createdAt),
    }));
    setTransactions(loaded);
  }, []);

  function handleAddTransaction(newTransaction: Omit<Transaction, "id" | "createdAt">) {
    const transaction = {
      ...newTransaction,
      id: Math.random().toString(36).substring(2, 8),
      createdAt: new Date(),
    };
    addTransaction({
      ...transaction,
      createdAt: transaction.createdAt.toISOString(),
    });
    setTransactions((prev) => [...prev, transaction]);
  }

  function handleDeleteTransactions(ids: string[]) {
    deleteTransactions(ids); // Remove do "banco"
    setTransactions(prev => prev.filter(t => !ids.includes(t.id))); // Atualiza o estado
  }

  function SubHeaderRegister() {
      return (
      <>
        <h1 className="text-black dark:text-white text-4xl font-bold tracking-tight pb-3">Registro</h1>
  
        <Breadcrumb>
              <BreadcrumbList>
  
                  <BreadcrumbItem>
                      <p className="text-base">Veja suas transações registradas.</p>
                  </BreadcrumbItem>
              </BreadcrumbList>
        </Breadcrumb>
      </>
      )
    }


  return (
        <div className="flex justify-center overflow-hidden" style={{ height: "calc(100vh - 64px)" }}>
            <div className="mt-[80px] gap-10 items-center justify-center">

                <SubHeaderRegister />
                <DataTable
                  data={transactions}
                  onAddTransaction={handleAddTransaction}
                  onDeleteTransactions={handleDeleteTransactions}
                />

            </div>
        </div>
  );
}
