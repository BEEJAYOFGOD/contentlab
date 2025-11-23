import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const MobileNavbar = () => {
  const navLinks = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "For Creators", href: "#for-creators" },
    { label: "For Projects", href: "#for-projects" },
    { label: "About", href: "#about" },
  ]

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="destructive"
              className="mt-4 bg-red-600 hover:bg-red-700"
            >
              Partner with us
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNavbar