import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function PanelLogin() {
    return (
      <>
          <div className="bg-[#ffffff] w-[540px] h-[610px] rounded-md border dark:bg-black">
              <header className="text-center p-11">
                <h1 className="font-bold text-3xl">NutriAqui</h1>
                <h2 className="mt-4 text-gray-600">Conclua seu login para ter acesso à plataforma</h2>
              </header>

              <section className="items-center justify-center flex flex-col mt-8">
                  <form action="">
                    <div className="">
                      <Input className="border bg-white dark:bg-zinc-900 w-[350px]" placeholder="E-mail" />
                    </div>

                    <div className="">
                      <Input className="border bg-white dark:bg-zinc-900 w-[350px] mt-6" placeholder="Senha" />
                    </div>

                  <Link to="/">
                    <Button className="w-[350px] mt-6">Login</Button>
                  </Link>

                  </form>

                  <Link to="/">
                      <Button className="mt-4 text-black dark:text-white" variant="link">Não tem uma conta? Cadastre-se aqui.</Button>
                  </Link>
              </section>

              <footer className="mt-[150px]">
                <p className="text-center text-gray-500 font-semibold text-sm mt-6">© 2025 NutriAqui. Todos os direitos reservados.</p>
              </footer>
          </div>
      </>
    )
}