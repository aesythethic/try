import Link from "next/link"
import Image from "next/image"
import { Building, Users, FileText, Phone, Mail, ArrowRight, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Family in Strata Management</h1>
            <p className="text-xl mb-8">
              We treat your property like our own, with care, attention, and personal dedication.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Get in touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full opacity-20">
          <div className="w-full h-full bg-[url('/placeholder.svg?height=600&width=800')] bg-no-repeat bg-right-bottom bg-contain"></div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-amber-900">Welcome to Our Family</h2>
            <p className="text-lg text-amber-800 mb-6">
              At Brown Strata Management, we believe in creating communities, not just managing properties. For over 15
              years, we've been bringing a personal touch to strata management.
            </p>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Founder"
                width={150}
                height={150}
                className="rounded-full border-4 border-amber-200"
              />
            </div>
            <p className="mt-4 text-amber-700 italic">
              "We started this company with one mission: to bring heart back to property management."
            </p>
            <p className="font-semibold text-amber-900">- Sarah Brown, Founder</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg shadow-sm border border-amber-100">
              <Building className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Property Maintenance</h3>
              <p className="text-amber-800">
                We care for your property as if it were our own home, with attention to every detail.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-sm border border-amber-100">
              <FileText className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Financial Management</h3>
              <p className="text-amber-800">
                Transparent and personal financial handling with regular updates you can understand.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-sm border border-amber-100">
              <Users className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Community Building</h3>
              <p className="text-amber-800">
                We don't just manage communities; we help them thrive through personal connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 left-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="italic text-amber-800 mb-4 mt-2">
                "The personal attention we receive from Brown Strata is unmatched. They know all residents by name and
                treat our building like their own home."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-200 rounded-full mr-3 flex items-center justify-center text-amber-700 font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-amber-900">John Davis</p>
                  <p className="text-sm text-amber-700">Resident since 2018</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 left-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="italic text-amber-800 mb-4 mt-2">
                "As a committee member, I appreciate how Brown Strata makes complex issues simple and always takes time
                to explain things personally."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-200 rounded-full mr-3 flex items-center justify-center text-amber-700 font-bold">
                  ML
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Maria Lopez</p>
                  <p className="text-sm text-amber-700">Committee Chair</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 left-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="italic text-amber-800 mb-4 mt-2">
                "We switched to Brown Strata three years ago and the difference is night and day. They truly care about
                our community's wellbeing."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-200 rounded-full mr-3 flex items-center justify-center text-amber-700 font-bold">
                  RK
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Robert Kim</p>
                  <p className="text-sm text-amber-700">Building Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-amber-50 p-8 rounded-lg border border-amber-100">
              <h3 className="text-xl font-semibold mb-4 text-amber-900">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-900">Phone</p>
                    <p className="text-amber-800">(02) 1234 5678</p>
                    <p className="text-sm text-amber-700">We answer personally, no automated systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-900">Email</p>
                    <p className="text-amber-800">hello@brownstrata.com</p>
                    <p className="text-sm text-amber-700">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg border border-amber-100">
              <h3 className="text-xl font-semibold mb-4 text-amber-900">Visit Our Office</h3>
              <p className="mb-2 text-amber-800">We love meeting in person! Come by for a coffee and chat:</p>
              <p className="text-amber-800 mb-4">
                123 Warmth Street
                <br />
                Sydney, NSW 2000
              </p>
              <div className="rounded-md overflow-hidden h-40 bg-amber-200">
                <div className="w-full h-full bg-[url('/placeholder.svg?height=300&width=500')] bg-no-repeat bg-center bg-cover"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

