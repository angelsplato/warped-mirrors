import type { SVGProps } from "react"
import { cn } from "@/lib/utils"

type LogoMarkProps = SVGProps<SVGSVGElement>

export function LogoMark({ className, ...props }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.5h10v21H4V5.5Zm1.75 1.75v17.5h6.5V7.25H5.75Z"
      />
      <path d="M16.75 5.5h6.6L27.75 26.5H16.75V5.5Z" fill="currentColor" />
    </svg>
  )
}

type LogoProps = {
  className?: string
  markClassName?: string
  wordmarkClassName?: string
  showWordmark?: boolean
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-6 w-6 text-lime-300", markClassName)} />
      {showWordmark ? (
        <span
          className={cn(
            "text-[15px] font-semibold tracking-[-0.04em] text-white",
            wordmarkClassName,
          )}
        >
          warpedmirrors
        </span>
      ) : null}
    </span>
  )
}

export default Logo
