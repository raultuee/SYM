import { Badge } from "@/components/ui/badge"

export function BadgeActive() {
    return (
      <Badge className="bg-green-500 text-white hover:bg-green-200 cursor-default">
        Ativo
      </Badge>
    )
  }

export function BadgeInactive() {
    return (
      <Badge className="bg-red-500 text-white hover:bg-red-200 cursor-default">
        Inativo
      </Badge>
    )
  }