import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BarChart2, MessageSquare } from "lucide-react"

export default function DashboardMock() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {/* Subscribers card */}
      <Card>
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground">Subscriptions</div>
          <div className="text-2xl font-bold">+2350</div>
          <div className="text-xs text-green-500">+180.1% from last month</div>
          <BarChart2 className="mt-2 text-blue-500" />
        </CardContent>
      </Card>

      {/* Calendar */}
      <Card className="col-span-2">
        <CardContent className="p-4">
          <Calendar mode="single" selected={new Date()} className="rounded-md border" />
        </CardContent>
      </Card>

      {/* Chat */}
      <Card>
        <CardContent className="p-4 flex gap-3 items-start">
          <Avatar>
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Sofia Davis</div>
            <div className="text-sm text-muted-foreground">m@example.com</div>
            <div className="mt-2 bg-muted p-2 rounded-md text-sm">Hi, how can I help you today?</div>
          </div>
        </CardContent>
      </Card>

      {/* Help button */}
      <Card>
        <CardContent className="p-4">
          <Button variant="default" className="w-full gap-2">
            <MessageSquare size={16} /> Hey, I’m having trouble with my...
          </Button>
        </CardContent>
      </Card>

      {/* Move Goal */}
      <Card>
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground">Move Goal</div>
          <div className="text-3xl font-bold">310</div>
          <div className="text-xs text-muted-foreground">CALORIES/DAY</div>
          <Button className="mt-2 w-full">Set Goal</Button>
        </CardContent>
      </Card>

      {/* Exercise */}
      <Card className="col-span-2">
        <CardContent className="p-4">
          <div className="text-lg font-semibold">Exercise Minutes</div>
          <div className="text-sm text-muted-foreground">Your exercise minutes over time</div>
          {/* Здесь можно вставить график */}
        </CardContent>
      </Card>
    </div>
  )
}
