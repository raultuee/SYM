import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function PanelLogin() {
    return (
      <>
          <div className="bg-[#E6D5BC] w-[540px] h-[610px] rounded-md shadow-lg dark:bg-zinc-950">
              <header className="text-center p-11">
                <h1 className="font-bold text-3xl">NutriAqui</h1>
                <h2 className="mt-4 text-gray-600">Descrição da NutriAqui, pode ser algum tipo de slogan ou frase</h2>

                <h3 className="font-semibold mt-4">Informe seu e-mail e senha para concluir o login</h3>
              </header>

              <section className="items-center justify-center flex flex-col mt-4">
                  <form action="">
                    <div className="">
                      <Input className="border bg-[#e2cba8] dark:bg-zinc-900 w-[350px]" placeholder="E-mail" />
                    </div>

                    <div className="">
                      <Input className="border bg-[#e2cba8] dark:bg-zinc-900 w-[350px] mt-6" placeholder="Senha" />
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