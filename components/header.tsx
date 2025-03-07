"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Search, Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className={`text-lg font-medium ${isActive("/") ? "text-primary" : "text-foreground"}`}>
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-lg font-medium ${isActive("/about") ? "text-primary" : "text-foreground"}`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg font-medium ${isActive("/contact") ? "text-primary" : "text-foreground"}`}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Company Logo"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <span className="font-bold text-xl hidden sm:inline-block">Company Name</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-foreground"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {showSearch ? (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pr-8"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

