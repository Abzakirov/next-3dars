"use client";
import { ModeToggle } from "../drop";

const Header = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <div className="mr-4 hidden md:flex">
            <a className="mr-4 flex items-center gap-2 lg:mr-6" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-6 w-6"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                ></line>
              </svg>
              <span className="hidden font-bold lg:inline-block">
                shadcn/ui
              </span>
            </a>
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
              <a className="transition-colors hover:text-foreground/80 text-foreground/80">
                Docs
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/80">
                Components
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/80">
                Blocks
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/80">
                Charts
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/80">
                Themes
              </a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/80">
                Colors
              </a>
            </nav>
          </div>

          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground py-2 h-8 w-full gap-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            type="button"
          >
            <span className="sr-only">Toggle Menu</span>
            <span className="flex h-8 flex-1 items-center justify-between rounded-md border bg-muted/50 px-2 text-sm font-normal text-muted-foreground shadow-none">
              Search documentation...
            </span>
          </button>

          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <div className="relative h-8 w-full md:w-40 lg:w-56 xl:w-64">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full h-full rounded-[0.5rem] border border-input bg-muted/50 px-4 py-2 pr-12 text-sm font-normal text-muted-foreground shadow-none placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                />
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>

            <nav className="flex items-center gap-0.5">
                <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
