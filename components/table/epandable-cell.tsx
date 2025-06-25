import React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { Eye } from "lucide-react"
type Props = {
  children: React.ReactNode
  className?: string
  triggerClassName?: string
  TriggerCell?: React.ReactNode
}
export const ExpandableCell = ({ children, className, TriggerCell, triggerClassName }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild className={cn("", triggerClassName)}>
        {TriggerCell ?? children}
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "w-full max-w-2xl -top-30 rounded-none text-xs text-foreground/90 py-2.5 border border-gray-300 shadow-none px-4 min-h-[44px] max-h-40 bg-gray-100",
          className
        )}
        side="bottom"
        align="center"
        sideOffset={-30}
      >
        {children}
      </PopoverContent>
    </Popover>
  )
}
