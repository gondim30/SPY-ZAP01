"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, MapPin, MessageSquare, ImageIcon, Key } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FemaleReportPage() {
  const checkoutLink = "https://pay.mundpay.com/01982eae-80c3-70d5-ac4c-5d97f1490e3?ref=ref_687e876c27c90"

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-600 flex items-center justify-center gap-2">
            <CheckCircle className="h-8 w-8" />
            Report Generated Successfully!
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Your comprehensive report is ready. Discover the insights below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Conversation Analysis */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-blue-500" />
              Conversation Analysis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Most Frequent Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Maria (500 messages)</li>
                    <li>João (320 messages)</li>
                    <li>Ana (280 messages)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Conversation Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">High activity between 10 PM and 2 AM with unknown contacts.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Recovered Media */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <ImageIcon className="h-6 w-6 text-purple-500" />
              Recovered Media
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "/images/female/1-h.png",
                "/images/female/2-h.png",
                "/images/female/3-h.png",
                "/images/female/4-h.png",
                "/images/female/5-h.png",
                "/images/female/6-h.png",
                "/images/female/7-h.png",
                "/images/female/8-h.png",
                "/images/female/9-h.png",
              ].map((src, index) => (
                <div key={index} className="relative w-full h-32 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Recovered media ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Suspicious Keywords */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Key className="h-6 w-6 text-red-500" />
              Suspicious Keywords
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Keywords Found</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>"Secret" (15 times)</li>
                    <li>"Meeting" (10 times)</li>
                    <li>"Delete chat" (8 times)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contextual Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Keywords often appear in conversations with new contacts or during late hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Device Location */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-green-500" />
              Device Location
            </h2>
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-b-lg">
                  <Image
                    src="/placeholder.svg?height=256&width=500"
                    alt="Device Location Map"
                    width={500}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </section>
        </CardContent>
        <CardFooter className="flex flex-col items-center pt-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Exclusive Discount!</h3>
            <p className="text-gray-600">
              Unlock full access to all features and continuous monitoring for just{" "}
              <span className="font-bold text-green-600">$29.99</span>!
            </p>
          </div>
          <Link href={checkoutLink} passHref>
            <Button className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white text-lg py-3 rounded-lg">
              Get Full Access Now!
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
