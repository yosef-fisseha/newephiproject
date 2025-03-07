import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            Welcome to <span className="text-primary">Company Name</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for innovative solutions. We deliver excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center">
            <CardHeader>
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Company Logo"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <CardTitle>Premium Services</CardTitle>
              <CardDescription>Discover our range of high-quality services</CardDescription>
            </CardHeader>
            <CardContent>
              <p>We provide top-notch solutions tailored to your specific needs.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col items-center text-center">
            <CardHeader>
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Company Logo"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <CardTitle>Our Expertise</CardTitle>
              <CardDescription>Years of industry experience</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our team of experts brings years of experience to every project.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/about">Our Team</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col items-center text-center">
            <CardHeader>
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Company Logo"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We're here to help</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Have questions? Our support team is ready to assist you.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-primary/5 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground mb-4">
              We combine innovation, expertise, and dedication to deliver exceptional results.
            </p>
            <Button asChild>
              <Link href="/about">About Us</Link>
            </Button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Company Showcase"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

