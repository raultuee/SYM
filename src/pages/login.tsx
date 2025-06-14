import Image from '../assets/image.png'

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Login() {
  return (
        <div className="min-h-screen flex items-center justify-center from-muted">
          
      <div className="w-1/2 min-h-screen bg-[#161616] items-center justify-center">
        
      
        <Input type="text" placeholder="Email" className="w-[300px] mb-4 bg-[#161616] text-white" />
      
      
      </div>
          <div className="w-1/2 min-h-screen">
            
            <img src={Image} alt="" />
          </div>
        </div>
  )
}