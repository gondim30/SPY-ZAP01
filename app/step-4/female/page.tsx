"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Download, MapPin, MessageSquare, ImageIcon, Key, CheckCircle, MenuIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function Step4Female() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Analyzing conversations...")
  const [showReport, setShowReport] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const texts = [
      "Analyzing conversations...",
      "Recovering deleted media...",
      "Identifying suspicious keywords...",
      "Locating device...",
      "Generating comprehensive report...",
    ]
    let i = 0
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const newProgress = prev + 20
          if (newProgress <= 100) {
            setLoadingText(texts[i])
            i++
          }
          return newProgress
        }
        clearInterval(interval)
        setShowReport(true)
        return 100
      })
    }, 1000) // Simulate loading

    return () => clearInterval(interval)
  }, [])

  const handleDownloadReport = () => {
    // Simulate report download
    alert("Report downloaded successfully!")
  }

  const handleGoToCheckout = () => {
    // Navigate to checkout page
    window.location.href = "https://pay.mundpay.com/01982eae-80c3-70d5-ac4c-5d97f149e0e3?ref=ref_687e876c27c90"
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <MenuIcon className="h-6 w-6" />
        </Button>
        <Button size="icon" className="bg-green-500 hover:bg-green-600 text-white rounded-full h-12 w-12">
          <Download className="h-6 w-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {!showReport ? (
          <Card className="w-full max-w-md text-center p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Generating Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Progress value={progress} className="w-full" />
                <p className="mt-2 text-gray-600">{loadingText}</p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/public/images/female/1-h.png"
                  alt="Loading animation"
                  width={200}
                  height={200}
                  className="animate-pulse"
                />
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="w-full max-w-3xl p-6">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-2">Comprehensive Report</CardTitle>
              <p className="text-gray-600">Detailed analysis of suspicious activity.</p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Conversation Analysis */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-500" />
                  Conversation Analysis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-700">
                      Total Messages: <span className="font-bold">12,345</span>
                    </h3>
                    <p className="text-sm text-gray-500">Analyzed conversations for unusual patterns.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-700">
                      Suspicious Conversations: <span className="font-bold">47</span>
                    </h3>
                    <p className="text-sm text-gray-500">Identified conversations with high-risk content.</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Recovered Media */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                  <ImageIcon className="h-6 w-6 text-purple-500" />
                  Recovered Media
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Image
                    src="/public/images/female/1-h.png"
                    alt="Recovered Image 1"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                  <Image
                    src="/public/images/female/2-h.png"
                    alt="Recovered Image 2"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                  <Image
                    src="/public/images/female/3-h.png"
                    alt="Recovered Image 3"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                  <Image
                    src="/public/images/female/4-h.png"
                    alt="Recovered Image 4"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                  <Image
                    src="/public/images/female/5-h.png"
                    alt="Recovered Image 5"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                  <Image
                    src="/public/images/female/6-h.png"
                    alt="Recovered Image 6"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                  <Image
                    src="/public/images/female/7-h.png"
                    alt="Recovered Image 7"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                  <Image
                    src="/public/images/female/8-h.png"
                    alt="Recovered Image 8"
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              <Separator />

              {/* Suspicious Keywords */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                  <Key className="h-6 w-6 text-red-500" />
                  Suspicious Keywords
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>"Secret" - 15 mentions</li>
                  <li>"Meetup" - 10 mentions</li>
                  <li>"Delete chat" - 8 mentions</li>
                  <li>"Hidden" - 7 mentions</li>
                </ul>
              </div>

              <Separator />

              {/* Device Location */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                  <MapPin className="h-6 w-6 text-green-500" />
                  Device Location
                </h2>
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Device Location Map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold">
                    Map data available in Premium Report
                  </div>
                </div>
              </div>

              <Separator />

              {/* Exclusive Discount */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg flex items-center gap-4">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Exclusive Discount!</h3>
                  <p className="text-gray-700">Unlock full features and detailed reports with a 30% discount.</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  onClick={handleGoToCheckout}
                  className="w-full max-w-xs h-12 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full"
                >
                  Go to Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="pb-8 px-4">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-8 text-sm">
            <Link href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-blue-500 hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="text-blue-500 hover:underline">
              Email Support
            </Link>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Protect Your Relationship. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
