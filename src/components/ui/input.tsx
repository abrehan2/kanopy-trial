import * as React from "react"
import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  autoComplete = "off",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      autoComplete={autoComplete}
      data-slot="input"
      data-1p-ignore
      data-lpignore="true"
      data-form-type="other"
      suppressHydrationWarning
      className={cn(
        "h-input-h w-full min-w-0 appearance-none rounded-md border border-input bg-card px-input-x font-jost text-nav text-ink shadow-none outline-none ring-0 selection:bg-primary selection:text-primary-foreground placeholder:text-dust disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:outline-none focus-visible:border-pine focus-visible:outline-none focus-visible:ring-0",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
