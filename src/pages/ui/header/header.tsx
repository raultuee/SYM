import { Link, NavLink } from "react-router-dom";
import { SheetAvatar } from "./sheet-avatar";
import { ModeToggle } from "./toggle-theme";
import { FaRobot } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

import { Home, ReceiptText, Bot, Users } from "lucide-react";

export function Header() {
    return (
        <div className="fixed flex items-center justify-center top-0 left-0 w-full h-[70px] border-t border-b bg-white dark:bg-black">

          <div className="p-10 mb-1">
            <Link to="/">
              <FaRobot size={35}/>
            </Link>
          </div>

          <Separator orientation="vertical" className="h-6 "/>

          <nav className="flex pl-8 space-x-7 w-[400px]">
                    <NavLink className="flex space-x-2 items-center" to="/">
                     <Home className="h-4 w-4"/>
                     <p className="font-semibold text-sm">Início</p>
                    </NavLink>

                    <NavLink className="flex space-x-2 items-center" to="/contracts?page=2">
                    <ReceiptText className="h-4 w-4"/>
                    <p className="font-semibold text-sm">Contratos</p>
                    </NavLink>

                    <NavLink className="flex space-x-2 items-center" to="/robots">
                    <Bot className="h-4 w-4"/>
                    <p className="font-semibold text-sm">Robôs</p>
                    </NavLink>

                    <NavLink className="flex space-x-2 items-center" to="/users">
                    <Users className="h-4 w-4"/>
                    <p className="font-semibold text-sm">Usuários</p>
                    </NavLink>
          </nav>
        
        <SheetAvatar />

      <div className="gap-2 w-[36px] pr-16">
        <ModeToggle /> 
      </div>

        </div>
    )
}
