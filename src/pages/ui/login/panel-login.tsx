import { Button } from "@/components/ui/button"

import Logo from "../../../assets/logo-seja-vitta.png"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { toast } from "sonner"
import { ButtonForgotPassword } from "./button-forgot-password"

export function PanelLogin() {
    return (
        <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded border h-[600px] dark:border-gray-400 md:min-w-[1000px] md:min-h-[450px] bg-white"
    >
      <ResizablePanel defaultSize={50} className="bg-[#2570b2]">
        <div className="flex h-full items-center justify-center p-6 ">
          <img src={Logo} alt="" />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className=" h-[200px] flex flex-col items-center justify-center p-6 pt-20 text-gray-700">
                <h1 className="text-4xl font-medium block pt-[155px] text-[#2570b2]">Login</h1>
                    <h2 className="block pt-7">Entre com a sua conta</h2>

                <span className="p-3">
                    <Label>Usuário</Label>

                    <div className="flex items-center space-x-3">
                      <Input className="w-[300px]"/>
                    </div>
                </span>

                <span className="p-3">
                    <Label>Senha</Label>

                    <div className="flex items-center space-x-3">
                      <Input className="w-[300px]" type="password"/>
                    </div>
                </span>

                <footer className="pt-6">

                    <Link to="/"><Button className="mr-6 bg-[#2570b2] text-white hover:bg-blue-900" onClick={() => toast.success('Login feito com sucesso!', {
                      style: {
                        backgroundColor: "#fffff",
                        color: "#a2e6a5",
                        border: '2px solid #3552360',
                      }
                    })}>Entrar</Button> </Link>

                    <ButtonForgotPassword />
                </footer>
            </div>

         </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    )
}