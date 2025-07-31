"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  MapPin,
  Package,
  Calculator,
  UserPlus,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  ChevronRight,
  Menu,
  X,
  Bell,
  FileText,
  CreditCard,
  Building,
  Shield,
  Truck,
  Target,
  Eye,
  Heart,
  Home,
  Info,
  Briefcase,
  MessageSquare,
  HelpCircle,
  User,
  FileSearch,
  Contact,
  Award,
} from "lucide-react"
import Image from "next/image"

export default function IndiaPostHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [fontSize, setFontSize] = useState("medium")
  const [language, setLanguage] = useState("english")

  const handleFormSubmit = (formName: string) => {
    alert(`${formName} form submitted!`)
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 ${fontSize === "small" ? "text-sm" : fontSize === "large" ? "text-lg" : "text-base"}`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white py-3 shadow-lg">
        <div className="w-full px-6 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-yellow-200 hover:bg-red-600/50 transition-all duration-200"
            >
              Sign In
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-yellow-200 hover:bg-red-600/50 transition-all duration-200"
            >
              Register
            </Button>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-28 h-8 bg-white/10 border-white/30 text-white backdrop-blur-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-medium">Font Size:</span>
              <div className="flex items-center bg-white/10 rounded-md p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs px-2 py-1 h-6 hover:bg-white/20"
                  onClick={() => setFontSize("small")}
                >
                  A-
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs px-2 py-1 h-6 hover:bg-white/20"
                  onClick={() => setFontSize("medium")}
                >
                  A
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs px-2 py-1 h-6 hover:bg-white/20"
                  onClick={() => setFontSize("large")}
                >
                  A+
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-yellow-200 hover:bg-red-600/50 text-xs transition-all duration-200"
            >
              Screen Reader Access
            </Button>
            <div className="flex items-center bg-white/10 rounded-lg backdrop-blur-sm">
              <Input
                placeholder="Search..."
                className="w-36 h-8 bg-transparent border-0 text-white placeholder:text-white/70 focus:ring-0"
              />
              <Button size="sm" className="ml-1 h-8 px-3 bg-yellow-500 hover:bg-yellow-400 text-red-800 font-medium">
                <Search className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-xl sticky top-0 z-50 border-b-4 border-gradient-to-r from-red-500 to-yellow-400">
        <div className="w-full px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4 min-w-0 flex-shrink-0">
              <Image
                src="/india-post-logo.png"
                alt="India Post Logo"
                width={50}
                height={50}
                className="drop-shadow-sm flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-xl font-bold text-red-700 whitespace-nowrap">India Post</h1>
                <p className="text-xs text-gray-600 whitespace-nowrap">Department of Posts</p>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  Ministry of Communications, Government of India
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 flex-shrink-0">
              {[
                { icon: Home, label: "Home", color: "text-red-600" },
                { icon: Package, label: "Track", color: "text-blue-600" },
                { icon: Calculator, label: "Postage", color: "text-green-600" },
                { icon: MapPin, label: "Locate", color: "text-purple-600" },
                { icon: Briefcase, label: "Recruitment", color: "text-orange-600" },
                { icon: Contact, label: "Contact", color: "text-red-600" },
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="flex items-center space-x-1 text-sm hover:bg-red-50 hover:text-red-700 transition-all duration-200 px-2 py-2 rounded-lg"
                >
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </Button>
              ))}

              {/* More Menu */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-sm hover:bg-red-50 hover:text-red-700 transition-all duration-200 px-2 py-2 rounded-lg"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">More</span>
                </Button>

                {/* Desktop Dropdown Menu */}
                {mobileMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="py-2">
                      {[
                        { icon: Info, label: "About Us", color: "text-blue-600" },
                        { icon: FileText, label: "Forms", color: "text-green-600" },
                        { icon: MessageSquare, label: "Feedback", color: "text-pink-600" },
                        { icon: FileSearch, label: "RTI", color: "text-indigo-600" },
                        { icon: FileText, label: "Tenders", color: "text-teal-600" },
                        { icon: Globe, label: "Sitemap", color: "text-gray-600" },
                        { icon: HelpCircle, label: "Help", color: "text-blue-600" },
                        { icon: User, label: "Employee Corner", color: "text-green-600" },
                      ].map((item, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-sm hover:bg-red-50 hover:text-red-700 transition-all duration-200 px-4 py-2 rounded-none"
                        >
                          <item.icon className={`h-4 w-4 mr-3 ${item.color}`} />
                          <span>{item.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden hover:bg-red-50 flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-red-600" /> : <Menu className="h-6 w-6 text-red-600" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-6 border-t border-red-100">
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "Home",
                  "Track",
                  "Postage",
                  "Locate",
                  "About Us",
                  "Forms",
                  "Recruitment",
                  "Feedback",
                  "RTI",
                  "Tenders",
                  "Contact Us",
                  "Sitemap",
                  "Help",
                  "Employee Corner",
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start text-sm hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-red-700 to-red-600 text-white py-16">
        <div className="w-full px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">India Post</h2>
            <p className="text-lg mb-8 text-red-100 max-w-3xl mx-auto leading-relaxed">
              Department of Posts, Ministry of Communications, Government of India
            </p>
            <p className="text-base text-red-200 mb-8">
              Providing reliable postal, banking, and financial services across the nation since 1854
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-2">1,55,000+</h3>
                <p className="text-red-100">Post Offices</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-2">4,00,000+</h3>
                <p className="text-red-100">Employees</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-2">6,00,000+</h3>
                <p className="text-red-100">Villages Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tools - Main Section */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="w-full px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Digital Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access all India Post services digitally. Track, calculate, locate, and register with ease.
            </p>
          </div>

          <Tabs defaultValue="track" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 bg-gradient-to-r from-red-100 to-yellow-100 p-2 rounded-xl">
              <TabsTrigger
                value="track"
                className="flex items-center space-x-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all duration-200"
              >
                <Package className="h-4 w-4" />
                <span className="font-medium">Track Consignment</span>
              </TabsTrigger>
              <TabsTrigger
                value="calculate"
                className="flex items-center space-x-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all duration-200"
              >
                <Calculator className="h-4 w-4" />
                <span className="font-medium">Calculate Postage</span>
              </TabsTrigger>
              <TabsTrigger
                value="locate"
                className="flex items-center space-x-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all duration-200"
              >
                <MapPin className="h-4 w-4" />
                <span className="font-medium">Locate Post Office</span>
              </TabsTrigger>
              <TabsTrigger
                value="pincode"
                className="flex items-center space-x-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all duration-200"
              >
                <Search className="h-4 w-4" />
                <span className="font-medium">Find Pincode</span>
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="flex items-center space-x-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all duration-200"
              >
                <UserPlus className="h-4 w-4" />
                <span className="font-medium">Customer Registration</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="track">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-red-50">
                <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Package className="h-6 w-6" />
                    <span>Track Your Consignment</span>
                  </CardTitle>
                  <CardDescription className="text-red-100">
                    Enter your consignment number to track your shipment in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Consignment Number</label>
                      <Input
                        placeholder="Enter Consignment Number (e.g., EE123456789IN)"
                        className="h-12 text-lg border-2 border-red-200 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Captcha Verification</label>
                      <Input
                        placeholder="Enter Captcha"
                        className="h-12 text-lg border-2 border-red-200 focus:border-red-500"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={() => handleFormSubmit("Track Consignment")}
                    className="w-full h-12 text-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-200"
                  >
                    <Package className="h-5 w-5 mr-2" />
                    Track Now
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calculate">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-yellow-50">
                <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Calculator className="h-6 w-6" />
                    <span>Calculate Postage</span>
                  </CardTitle>
                  <CardDescription className="text-yellow-100">
                    Calculate accurate postage for your mail or parcel
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                      <Select>
                        <SelectTrigger className="h-12 border-2 border-yellow-200 focus:border-yellow-500">
                          <SelectValue placeholder="Select Service Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="letter">Letter</SelectItem>
                          <SelectItem value="parcel">Parcel</SelectItem>
                          <SelectItem value="speed-post">Speed Post</SelectItem>
                          <SelectItem value="registered">Registered Post</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">From State</label>
                      <Select>
                        <SelectTrigger className="h-12 border-2 border-yellow-200 focus:border-yellow-500">
                          <SelectValue placeholder="From State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="mumbai">Maharashtra</SelectItem>
                          <SelectItem value="kolkata">West Bengal</SelectItem>
                          <SelectItem value="chennai">Tamil Nadu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">To State</label>
                      <Select>
                        <SelectTrigger className="h-12 border-2 border-yellow-200 focus:border-yellow-500">
                          <SelectValue placeholder="To State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="mumbai">Maharashtra</SelectItem>
                          <SelectItem value="kolkata">West Bengal</SelectItem>
                          <SelectItem value="chennai">Tamil Nadu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Weight (grams)</label>
                      <Input
                        placeholder="Weight in grams"
                        type="number"
                        className="h-12 border-2 border-yellow-200 focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Length (cm)</label>
                      <Input
                        placeholder="Length in cm"
                        type="number"
                        className="h-12 border-2 border-yellow-200 focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Width (cm)</label>
                      <Input
                        placeholder="Width in cm"
                        type="number"
                        className="h-12 border-2 border-yellow-200 focus:border-yellow-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                    <Checkbox id="insurance" />
                    <label htmlFor="insurance" className="text-sm font-medium text-gray-700">
                      Add Insurance Coverage
                    </label>
                  </div>
                  <Button
                    onClick={() => handleFormSubmit("Calculate Postage")}
                    className="w-full h-12 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-200"
                  >
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate Postage
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="locate">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-green-50">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <MapPin className="h-6 w-6" />
                    <span>Locate Post Office</span>
                  </CardTitle>
                  <CardDescription className="text-green-100">Find post offices near your location</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search by Pincode</label>
                    <Input
                      placeholder="Enter 6-digit Pincode"
                      className="h-12 text-lg border-2 border-green-200 focus:border-green-500"
                    />
                  </div>
                  <div className="text-center text-gray-500 font-medium">OR</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select State</label>
                      <Select>
                        <SelectTrigger className="h-12 border-2 border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="mumbai">Maharashtra</SelectItem>
                          <SelectItem value="kolkata">West Bengal</SelectItem>
                          <SelectItem value="chennai">Tamil Nadu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select District</label>
                      <Select>
                        <SelectTrigger className="h-12 border-2 border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Select District" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="central">Central Delhi</SelectItem>
                          <SelectItem value="north">North Delhi</SelectItem>
                          <SelectItem value="south">South Delhi</SelectItem>
                          <SelectItem value="east">East Delhi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleFormSubmit("Locate Post Office")}
                    className="w-full h-12 text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Find Post Office
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pincode">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Search className="h-6 w-6" />
                    <span>Find Pincode</span>
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Search for pincode by location or area name
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location/Area Name</label>
                    <Input
                      placeholder="Enter Location, Area, or Post Office Name"
                      className="h-12 text-lg border-2 border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <Button
                    onClick={() => handleFormSubmit("Find Pincode")}
                    className="w-full h-12 text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Pincode
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <UserPlus className="h-6 w-6" />
                    <span>Customer Registration</span>
                  </CardTitle>
                  <CardDescription className="text-purple-100">
                    Register for India Post digital services and benefits
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input
                        placeholder="Enter First Name"
                        className="h-12 border-2 border-purple-200 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input
                        placeholder="Enter Last Name"
                        className="h-12 border-2 border-purple-200 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input
                        placeholder="Enter Email Address"
                        type="email"
                        className="h-12 border-2 border-purple-200 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                      <Input
                        placeholder="Enter 10-digit Mobile Number"
                        type="tel"
                        className="h-12 border-2 border-purple-200 focus:border-purple-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 1</label>
                      <Input
                        placeholder="Enter Address Line 1"
                        className="h-12 border-2 border-purple-200 focus:border-purple-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label>
                      <Input
                        placeholder="Enter Address Line 2 (Optional)"
                        className="h-12 border-2 border-purple-200 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <Select>
                        <SelectTrigger className="h-12 border-2 border-purple-200 focus:border-purple-500">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="mumbai">Maharashtra</SelectItem>
                          <SelectItem value="kolkata">West Bengal</SelectItem>
                          <SelectItem value="chennai">Tamil Nadu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                      <Input
                        placeholder="Enter 6-digit Pincode"
                        className="h-12 border-2 border-purple-200 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={() => handleFormSubmit("Customer Registration")}
                    className="w-full h-12 text-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
                  >
                    <UserPlus className="h-5 w-5 mr-2" />
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Links / Highlighted Services */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="w-full px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of postal, banking, and financial services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Business Solutions",
                desc: "Comprehensive postal solutions for businesses of all sizes",
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-50",
                iconColor: "text-red-600",
              },
              {
                icon: CreditCard,
                title: "Retail Services",
                desc: "Wide range of retail postal and courier services",
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50",
                iconColor: "text-yellow-600",
              },
              {
                icon: Shield,
                title: "Insurance (PLI/RPLI)",
                desc: "Postal Life Insurance and Rural Postal Life Insurance schemes",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                iconColor: "text-green-600",
              },
              {
                icon: FileText,
                title: "Philately",
                desc: "Stamp collection, philatelic products and services",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                icon: Truck,
                title: "Money Transfer",
                desc: "Secure and reliable money transfer services across India",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
              },
              {
                icon: CreditCard,
                title: "Banking & Financial Services",
                desc: "Complete banking solutions through India Post Payment Bank",
                color: "from-indigo-500 to-indigo-600",
                bgColor: "bg-indigo-50",
                iconColor: "text-indigo-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-0 ${service.bgColor} group`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 bg-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200`}
                    >
                      <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.desc}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className={`w-full bg-gradient-to-r ${service.color} text-white border-0 hover:shadow-lg transition-all duration-200`}
                  >
                    Learn More <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-16 bg-white">
        <div className="w-full px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">News & Announcements</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest news, tenders, and recruitment notifications
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Bell className="h-6 w-6" />
                  <span>Latest News & Updates</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                {[
                  {
                    date: "2024-01-15",
                    title: "New Speed Post Services Launched Across Major Cities",
                    category: "Service Update",
                    priority: "high",
                  },
                  {
                    date: "2024-01-12",
                    title: "Digital Payment Options Now Available at All Post Offices",
                    category: "Technology",
                    priority: "medium",
                  },
                  {
                    date: "2024-01-10",
                    title: "Extended Working Hours for Major Post Offices During Festival Season",
                    category: "Operations",
                    priority: "medium",
                  },
                  {
                    date: "2024-01-08",
                    title: "New Commemorative Philatelic Collection Released",
                    category: "Philately",
                    priority: "low",
                  },
                ].map((news, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-6 py-4 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium ${news.priority === "high" ? "bg-red-100 text-red-700 border-red-200" : news.priority === "medium" ? "bg-yellow-100 text-yellow-700 border-yellow-200" : "bg-green-100 text-green-700 border-green-200"}`}
                      >
                        {news.category}
                      </Badge>
                      <span className="text-xs text-gray-500 font-medium">{news.date}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors leading-relaxed">
                      {news.title}
                    </h4>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full mt-6 border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  View All News <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <FileText className="h-6 w-6" />
                  <span>Tenders & Recruitment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                {[
                  {
                    date: "2024-01-20",
                    title: "Recruitment for Postal Assistant Posts - 2024",
                    category: "Recruitment",
                    deadline: "2024-02-20",
                    positions: "500+ Posts",
                  },
                  {
                    date: "2024-01-18",
                    title: "Tender for IT Infrastructure Upgrade Project",
                    category: "Tender",
                    deadline: "2024-02-15",
                    value: "₹50 Crores",
                  },
                  {
                    date: "2024-01-15",
                    title: "Multi Tasking Staff Recruitment Notification",
                    category: "Recruitment",
                    deadline: "2024-02-10",
                    positions: "1000+ Posts",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-green-500 pl-6 py-4 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium ${item.category === "Recruitment" ? "bg-purple-100 text-purple-700 border-purple-200" : "bg-orange-100 text-orange-700 border-orange-200"}`}
                      >
                        {item.category}
                      </Badge>
                      <span className="text-xs text-gray-500 font-medium">{item.date}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 hover:text-green-600 cursor-pointer transition-colors leading-relaxed mb-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-600 font-medium">{item.positions || item.value}</span>
                      <span className="text-red-600 font-medium">Deadline: {item.deadline}</span>
                    </div>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full mt-6 border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  View All Opportunities <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Vision, Mission & Values</h2>
            <p className="text-xl text-gray-600">Guided by our vision, mission, and core values since 1854</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-red-500 shadow-xl bg-gradient-to-br from-red-50 to-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center space-x-3 text-red-700">
                  <Eye className="h-6 w-6" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the backbone of the country's communication and distribution network providing affordable and
                  reliable postal, communication, banking, insurance and retail services to the citizens of India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-yellow-500 shadow-xl bg-gradient-to-br from-yellow-50 to-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center space-x-3 text-yellow-700">
                  <Target className="h-6 w-6" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-3 text-base">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Provide efficient and affordable postal services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Expand financial inclusion through banking services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Leverage technology for better service delivery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 font-bold">•</span>
                    <span>Maintain universal service obligation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500 shadow-xl bg-gradient-to-br from-green-50 to-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center space-x-3 text-green-700">
                  <Heart className="h-6 w-6" />
                  <span>Core Values</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-3 text-base">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Customer First</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Integrity & Transparency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Innovation & Excellence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Social Responsibility</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Team Work</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Franchise Scheme Summary */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="w-full px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Franchise Scheme</h2>
              <p className="text-xl text-gray-600">Partner with India Post and expand our network across the nation</p>
            </div>
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg p-8">
                <CardTitle className="text-3xl">India Post Franchise Opportunity</CardTitle>
                <CardDescription className="text-indigo-100 text-lg">
                  Join India's largest postal network and build a successful business partnership
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200">
                    <h4 className="font-bold text-xl mb-4 text-green-700 flex items-center space-x-2">
                      <Award className="h-6 w-6" />
                      <span>What We Offer:</span>
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Established brand recognition and trust</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Comprehensive training programs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Marketing and operational support</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Multiple revenue streams</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>Advanced technology infrastructure</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
                    <h4 className="font-bold text-xl mb-4 text-blue-700 flex items-center space-x-2">
                      <FileText className="h-6 w-6" />
                      <span>How to Apply:</span>
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 font-bold">1.</span>
                        <span>Submit online application form</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 font-bold">2.</span>
                        <span>Meet eligibility criteria requirements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 font-bold">3.</span>
                        <span>Complete documentation process</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 font-bold">4.</span>
                        <span>Attend mandatory training program</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 font-bold">5.</span>
                        <span>Start operations with full support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
                  <h4 className="font-bold text-xl mb-4 text-yellow-700 flex items-center space-x-2">
                    <Shield className="h-6 w-6" />
                    <span>Terms & Conditions:</span>
                  </h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Franchise partners must maintain service quality standards, comply with India Post policies, and
                    ensure customer satisfaction. Investment requirements vary by location and service offerings.
                    Detailed terms and conditions are available in the comprehensive franchise agreement document.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                      Apply for Franchise <ChevronRight className="h-5 w-5 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg bg-transparent"
                    >
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Forms & Documents</h2>
            <p className="text-xl text-gray-600">Download official forms and documents for various postal services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "APAR Forms",
                forms: ["APAR-1.pdf - 145 KB", "APAR-2.pdf - 132 KB", "APAR-Review.pdf - 98 KB"],
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-50",
                borderColor: "border-red-200",
              },
              {
                category: "Customs Forms",
                forms: ["CN-22.pdf - 87 KB", "CN-23.pdf - 156 KB", "Customs-Declaration.pdf - 203 KB"],
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200",
              },
              {
                category: "Money Order",
                forms: ["MO-Form-1.pdf - 76 KB", "MO-Form-2.pdf - 89 KB", "International-MO.pdf - 134 KB"],
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
              },
              {
                category: "NPS Forms",
                forms: ["NPS-1.pdf - 167 KB", "NPS-2.pdf - 145 KB", "NPS-Withdrawal.pdf - 189 KB"],
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
              },
              {
                category: "PLI Forms",
                forms: ["PLI-Application.pdf - 234 KB", "PLI-Claim.pdf - 198 KB", "PLI-Revival.pdf - 156 KB"],
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
              },
              {
                category: "Speed Post",
                forms: ["SP-Booking.pdf - 123 KB", "SP-International.pdf - 167 KB", "SP-Bulk.pdf - 145 KB"],
                color: "from-indigo-500 to-indigo-600",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200",
              },
              {
                category: "Savings Bank",
                forms: ["SB-Opening.pdf - 189 KB", "SB-Closure.pdf - 134 KB", "SB-Nomination.pdf - 112 KB"],
                color: "from-pink-500 to-pink-600",
                bgColor: "bg-pink-50",
                borderColor: "border-pink-200",
              },
              {
                category: "Miscellaneous",
                forms: ["Complaint-Form.pdf - 98 KB", "Feedback-Form.pdf - 87 KB", "RTI-Application.pdf - 156 KB"],
                color: "from-teal-500 to-teal-600",
                bgColor: "bg-teal-50",
                borderColor: "border-teal-200",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className={`shadow-lg border-2 ${category.borderColor} ${category.bgColor} hover:shadow-xl transition-all duration-300`}
              >
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white rounded-t-lg`}>
                  <CardTitle className="text-lg font-bold flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {category.forms.map((form, formIndex) => (
                      <li key={formIndex}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm p-3 h-auto hover:bg-white/50 transition-colors"
                        >
                          <FileText className="h-4 w-4 mr-3 flex-shrink-0 text-gray-600" />
                          <span className="text-left text-gray-700 font-medium">{form}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white py-16">
        <div className="w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/india-post-logo.png" alt="India Post Logo" width={50} height={50} />
                <div>
                  <h3 className="text-lg font-bold text-white">India Post</h3>
                  <p className="text-gray-300 text-sm">Department of Posts</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-300" />
                  <span className="text-gray-300">Customer Care: 1800 266 6868</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-300" />
                  <span className="text-gray-300">info@indiapost.gov.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-yellow-300" />
                  <span className="text-gray-300">www.indiapost.gov.in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-300">Quick Services</h3>
              <ul className="space-y-3">
                {[
                  "Track & Trace",
                  "Calculate Postage",
                  "Find Post Office",
                  "Speed Post",
                  "Banking Services",
                  "Insurance Services",
                ].map((item, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="text-gray-300 hover:text-yellow-300 hover:bg-red-800/30 p-0 h-auto transition-colors"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-300">Important Links</h3>
              <ul className="space-y-3">
                {[
                  "Terms of Use",
                  "Privacy Policy",
                  "RTI Information",
                  "Tenders",
                  "Recruitment",
                  "Grievance Portal",
                ].map((item, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="text-gray-300 hover:text-yellow-300 hover:bg-red-800/30 p-0 h-auto transition-colors"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-300">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <Button variant="ghost" size="sm" className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-3 bg-blue-400 hover:bg-blue-500 text-white rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
              <div className="text-sm text-gray-400">
                <p className="mb-2">Web Information Manager:</p>
                <p className="text-yellow-300">webmaster@indiapost.gov.in</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-red-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Department of Posts, Ministry of Communications, Government of India</p>
            <p>Last Updated: January 15, 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
