import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const integrations = [
  { name: "Tailwind", desc: "Tailwind des" },
  { name: "Stripe", desc: "Stripe des" },
  { name: "NextAuth", desc: "NextAuth des" },
  { name: "Supabase", desc: "Supabase des" },
  { name: "Mailgun", desc: "Mailgun des" },
  { name: "NextJS", desc: "NextJS des" },
]

export default function Integrations() {
  return (
    <div className="py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Ship faster with <span className="underline decoration-blue-500 underline-offset-4">endless integrations</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
        {integrations.map((item, idx) => (
          <Card
            key={item.name}
            className={cn(
              "flex items-center gap-4 p-4",
              idx === 0 && "bg-muted" // первая выделенная карточка
            )}
          >
            <IconWave />
            <div>
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Иконка — заменяем Tailwind логотипом или svg по желанию
function IconWave(): ReactNode {
  return (
    <div className="w-8 h-8 text-primary">
      <svg viewBox="0 0 32 32" fill="currentColor">
        <path d="M0 16c3-3 6-3 9 0s6 3 9 0 6-3 9 0 6 3 9 0" />
      </svg>
    </div>
  )
}
