import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        <div className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Company Logo"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Founded in [year], Company Name has been at the forefront of innovation in our industry. We started with a
              simple mission: to provide exceptional service and solutions to our clients.
            </p>
            <p className="mb-4 text-muted-foreground">
              Over the years, we've grown from a small team to a thriving company with clients worldwide. Our commitment
              to quality and customer satisfaction remains at the core of everything we do.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-muted-foreground">We constantly seek new and better ways to serve our clients.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Integrity</h3>
              <p className="text-muted-foreground">We operate with honesty and transparency in all our dealings.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Excellence</h3>
              <p className="text-muted-foreground">We strive for excellence in every project we undertake.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to work with us?</h2>
          <p className="mb-6 text-muted-foreground">
            We're always looking for new challenges and opportunities to make a difference.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

