// components/landing-hero-footer.tsx
import Link from "next/link";

export default function LandingHeroFooter() {
  return (
    <div className="w-full px-4 py-16 md:py-24">
      <div className="w-full mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
            <span className="underline decoration-blue-500 underline-offset-[6px]">Shadcn</span> UI Pro
          </h1>
          <p className="text-lg mb-2">
            <Link href="#" className="underline underline-offset-2 font-medium">
              Shadcn UI Pro
            </Link>{" "}
            is Powerful NextJS boilerplate build with{" "}
            <Link href="https://ui.shadcn.com" className="underline underline-offset-2">
              shadcn/ui
            </Link>.
          </p>
          <p className="text-muted-foreground">
            Introducing the ultimate NextJS boilerplate, your gateway to building a game-changing SaaS, 
            an AI-powered marvel, or any web app you can dream of. Get ready to turbocharge your online 
            success and start making those dollars flow in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="space-y-1">
              <li><Link href="#">Project Management</Link></li>
              <li><Link href="#">Multi-tenancy</Link></li>
              <li><Link href="#">Scalability</Link></li>
              <li><Link href="#">Customization</Link></li>
              <li><Link href="#">Integration</Link></li>
              <li><Link href="#">Mobile accessibility</Link></li>
              <li><Link href="#">Analytics and reporting</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="space-y-1">
              <li><Link href="#">User management</Link></li>
              <li><Link href="#">Workflow automation</Link></li>
              <li><Link href="#">API access</Link></li>
              <li><Link href="#">Data visualization</Link></li>
              <li><Link href="#">Version control</Link></li>
              <li><Link href="#">Upgrades</Link></li>
              <li><Link href="#">Billing and invoicing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Explore</h3>
            <ul className="space-y-1">
              <li><Link href="#">Docs</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Integrations</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
