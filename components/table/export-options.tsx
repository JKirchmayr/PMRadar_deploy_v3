import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { MoreHorizontal, Share2Icon } from "lucide-react"
import Image from "next/image"

type ExportOptionsProps = {
  children?: React.ReactNode
  data: any[]
  onExport: (arg0: "csv" | "excel") => void
}
export function ExportOptions({ data, onExport, children }: ExportOptionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={!data.length}>
        {children ?? (
          <Button
            size="icon"
            className="h-6 px-1 hover:bg-accent-foreground/20"
            variant="secondary"
          >
            <Image
              src="/images/export-black.svg"
              width={15}
              height={15}
              alt="Export"
              className="text"
            />
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="text-xs font-medium cursor-pointer"
            onClick={() => onExport("csv")}
          >
            Export CSV
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-xs font-medium cursor-pointer"
            onClick={() => onExport("excel")}
          >
            Export Excel
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
