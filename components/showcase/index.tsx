import { CircleCheck, GitBranch, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import DashboardMock from "../dash";

const Showcase = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">
            <span className="underline decoration-blue-400">Shadcn UI Pro</span>
            <br />
            Ship your <strong>startup rapidly</strong>
          </h1>

          <p className="text-muted-foreground text-lg">
            Elegant, Simple, and Powerful NextJS boilerplate
            <br />
            with all you need to build your SaaS.
          </p>

          {/* Color Selector */}
          <div className="flex items-center gap-4">
            {[
              "bg-black",
              "bg-red-500",
              "bg-blue-500 ring-2 ring-blue-500",
              "bg-green-500",
              "bg-orange-500",
            ].map((color, i) => (
              <div
                key={i}
                className={cn("w-6 h-6 rounded-full cursor-pointer", color)}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="gap-2">
              <Zap size={16} /> Get Started
            </Button>
            <Button variant="outline" className="gap-2">
              <GitBranch size={16} /> <span>$ git clone shadcn-ui-pro</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <CircleCheck size={16} /> Customize
            </Button>
          </div>
        </div>

        {/* Right Section: image mock or dashboard cards */}
        <div className="relative">
         <DashboardMock />
        </div>
      </div>
    </main>
  );
};

export default Showcase;
