import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { CircleFadingPlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const symStyles = {
  overlay: {
    background: "#080810",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 10,
    padding: "32px",
    fontFamily: "'DM Mono', 'Courier New', monospace",
    color: "#F0EEE6",
    maxWidth: 480,
    boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,255,178,0.05)",
  } as React.CSSProperties,
  label: {
    fontSize: 11,
    letterSpacing: "0.12em",
    color: "rgba(240,238,230,0.45)",
    display: "block",
    marginBottom: 8,
  } as React.CSSProperties,
  input: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 4,
    color: "#F0EEE6",
    fontFamily: "'DM Mono', monospace",
    fontSize: 14,
    padding: "10px 14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties,
  triggerBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#00FFB2",
    color: "#080810",
    border: "none",
    padding: "9px 20px",
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.1em",
    cursor: "pointer",
    fontFamily: "'DM Mono', monospace",
    transition: "all 0.2s",
  } as React.CSSProperties,
  submitBtn: {
    background: "#00FFB2",
    color: "#080810",
    border: "none",
    padding: "12px 28px",
    borderRadius: 4,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1em",
    cursor: "pointer",
    fontFamily: "'DM Mono', monospace",
    width: "100%",
    marginTop: 8,
    transition: "all 0.2s",
  } as React.CSSProperties,
};

const formSchema = z.object({
  name: z.string().min(2, { message: "A transação deve ter pelo menos 2 letras." }),
  amount: z.number().min(0, { message: "O valor deve ser maior que 0." }),
  type: z.boolean(),
  method: z.enum(["debit", "credit", "pix", "money"]),
  link: z.string().optional(),
});

function generateId() {
  return Math.random().toString(36).substring(2, 8);
}

export function DialogForm({
  onAddTransaction,
}: {
  onAddTransaction: (t: {
    name: string;
    amount: number;
    type: boolean;
    method: "credit" | "debit" | "pix" | "money";
  }) => void;
}) {
  const [, setTransactions] = useState<Array<z.infer<typeof formSchema>>>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", amount: 0, type: true },
  });

  const typeValue = form.watch("type");

  function onSubmit(values: z.infer<typeof formSchema>) {
    const amount = values.type ? values.amount : -Math.abs(values.amount);
    const transactionWithId = { ...values, amount, id: generateId() };
    onAddTransaction(transactionWithId);
    setTransactions(prev => [...prev, { ...values, amount }]);
    form.reset();
    toast.success("Transação criada!");
  }

  const selectStyle = {
    trigger: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 4,
      color: "#F0EEE6",
      fontFamily: "'DM Mono', monospace",
      fontSize: 14,
    },
    content: {
      background: "#0e0e1a",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 6,
      color: "#F0EEE6",
      fontFamily: "'DM Mono', monospace",
    },
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          style={symStyles.triggerBtn}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#00e8a0";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#00FFB2";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          <CircleFadingPlus size={15} />
          NOVA TRANSAÇÃO
        </button>
      </DialogTrigger>

      <DialogContent style={symStyles.overlay} className="sym-dialog">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@300;400;500;700&display=swap');
          .sym-dialog { background: #080810 !important; border: 1px solid rgba(255,255,255,0.08) !important; }
          .sym-dialog input:focus { border-color: #00FFB2 !important; box-shadow: 0 0 0 2px rgba(0,255,178,0.1) !important; }
          .sym-dialog [role=option]:hover { background: rgba(0,255,178,0.08) !important; color: #00FFB2 !important; }
          .sym-dialog [role=option][data-highlighted] { background: rgba(0,255,178,0.1) !important; }
        `}</style>

        {/* Title */}
        <div style={{ marginBottom: 28 }}>
          <div style={{
            fontSize: 11, letterSpacing: "0.15em", color: "#00FFB2",
            marginBottom: 8,
          }}>
            NOVA TRANSAÇÃO
          </div>
          <h2 style={{
            fontSize: 22, fontWeight: 800,
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: "#F0EEE6", letterSpacing: "-0.01em",
          }}>
            Registrar movimentação
          </h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Nome */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={symStyles.label}>NOME DA TRANSAÇÃO</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      style={symStyles.input}
                      placeholder="Ex: Supermercado, Salário..."
                    />
                  </FormControl>
                  <FormMessage style={{ fontSize: 11, color: "#FF6B6B", marginTop: 4 }} />
                </FormItem>
              )}
            />

            {/* Valor */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={symStyles.label}>VALOR (R$)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value}
                      onChange={e => field.onChange(e.target.valueAsNumber)}
                      style={symStyles.input}
                      placeholder="0,00"
                    />
                  </FormControl>
                  <FormMessage style={{ fontSize: 11, color: "#FF6B6B", marginTop: 4 }} />
                </FormItem>
              )}
            />

            {/* Tipo + Método lado a lado */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={symStyles.label}>TIPO</FormLabel>
                    <Select
                      onValueChange={v => field.onChange(v === "true")}
                      defaultValue={field.value ? "true" : "false"}
                    >
                      <FormControl>
                        <SelectTrigger style={selectStyle.trigger}>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent style={selectStyle.content}>
                        <SelectItem value="true" style={{ color: "#00FFB2" }}>↑ Entrada</SelectItem>
                        <SelectItem value="false" style={{ color: "#FF6B6B" }}>↓ Saída</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage style={{ fontSize: 11, color: "#FF6B6B" }} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="method"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={symStyles.label}>MÉTODO</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger style={selectStyle.trigger}>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent style={selectStyle.content}>
                        <SelectItem value="debit">Débito</SelectItem>
                        <SelectItem value="credit">Crédito</SelectItem>
                        <SelectItem value="pix">PIX</SelectItem>
                        <SelectItem value="money">Dinheiro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage style={{ fontSize: 11, color: "#FF6B6B" }} />
                  </FormItem>
                )}
              />
            </div>

            {/* Link condicional */}
            {typeValue === false && (
              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={symStyles.label}>LINK DA COMPRA <span style={{ color: "rgba(240,238,230,0.3)" }}>(OPCIONAL)</span></FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        style={symStyles.input}
                        placeholder="https://..."
                      />
                    </FormControl>
                    <FormMessage style={{ fontSize: 11, color: "#FF6B6B" }} />
                  </FormItem>
                )}
              />
            )}

            {/* Divisor */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "4px 0" }} />

            <DialogClose asChild>
              <button
                type="submit"
                style={symStyles.submitBtn}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#00e8a0";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 30px rgba(0,255,178,0.2)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#00FFB2";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                CONFIRMAR TRANSAÇÃO →
              </button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}