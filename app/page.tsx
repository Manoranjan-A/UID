"use client"

import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
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
  ChevronLeft,
  Menu,
  X,
  Bell,
  FileText,
  CreditCard,
  Building,
  Shield,
  Truck,
  Target,
  Heart,
  HomeIcon,
  Info,
  Briefcase,
  MessageSquare,
  HelpCircle,
  User,
  FileSearch,
  ContactIcon,
  Award,
  Star,
  CheckCircle,
  AlertCircle,
  Play,
  Filter,
  FileDown,
  ShoppingBag,
  Sigma as Sitemap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

type PageKey =
  | "home"
  | "digital"
  | "track"
  | "postage"
  | "locate"
  | "recruitment"
  | "contact"
  | "about"
  | "forms"
  | "feedback"
  | "rti"
  | "tenders"
  | "sitemap"
  | "help"
  | "employee"
  | "pos"

// Demo Data
const offices = [
  {
    name: "Delhi GPO",
    address: "Sansad Marg, New Delhi - 110001",
    phone: "011-23362144",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    city: "New Delhi",
    pin: "110001",
    services: { postal: true, parcel: true, financial: true },
  },
  {
    name: "Mumbai GPO",
    address: "Fort, Mumbai - 400001",
    phone: "022-22620000",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    city: "Mumbai",
    pin: "400001",
    services: { postal: true, parcel: true, financial: true },
  },
  {
    name: "Kolkata GPO",
    address: "BBD Bagh, Kolkata - 700001",
    phone: "033-22101234",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    city: "Kolkata",
    pin: "700001",
    services: { postal: true, parcel: true, financial: false },
  },
  {
    name: "Chennai GPO",
    address: "Rajaji Salai, Chennai - 600001",
    phone: "044-25220123",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    city: "Chennai",
    pin: "600001",
    services: { postal: true, parcel: true, financial: true },
  },
  {
    name: "Bengaluru GPO",
    address: "Raj Bhavan Rd, Bengaluru - 560001",
    phone: "080-22869000",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    city: "Bengaluru",
    pin: "560001",
    services: { postal: true, parcel: false, financial: true },
  },
]

const faqs = [
  { question: "How can I track my consignment?", answer: "Use the Track page and enter your 13-digit number." },
  { question: "What is the maximum weight for Speed Post?", answer: "Up to 35 kg depending on regulations." },
  { question: "How do I find my nearest Post Office?", answer: "Use Locate by PIN or city and filter services." },
  { question: "What are the working hours?", answer: "Generally Mon-Sat 9:00 AM - 6:00 PM (may vary)." },
  { question: "How do I calculate postage?", answer: "Use the Postage page for an estimated charge." },
  { question: "How can I register a complaint?", answer: "Use the Feedback page to register a complaint." },
  { question: "Are banking services at all branches?", answer: "Check service availability on the Locate page." },
  { question: "How to apply for recruitment?", answer: "See Recruitment page for opens and eligibility." },
  { question: "Where to download forms?", answer: "See Forms page for downloads and descriptions." },
  { question: "How to file an RTI application?", answer: "RTI page lists process and forms." },
  { question: "Speed Post delivery timeframe?", answer: "Usually 1-3 working days metro-to-metro." },
  { question: "International services available?", answer: "Yes, EMS and international parcels." },
]

const jobs = [
  { title: "Postal Assistant", positions: 500, deadline: "2025-11-15", eligibility: "12th pass, 18-27 years." },
  { title: "Sorting Assistant", positions: 300, deadline: "2025-11-22", eligibility: "12th pass, typing skills." },
  { title: "Multi-Tasking Staff (MTS)", positions: 700, deadline: "2025-12-05", eligibility: "10th pass, 18-25." },
]

const formsData = [
  { title: "Speed Post Booking Form", description: "For domestic Speed Post booking.", downloadUrl: "#" },
  { title: "Registered Post Form", description: "Registered Letters and Parcels.", downloadUrl: "#" },
  { title: "SB Account Opening", description: "Financial services account opening.", downloadUrl: "#" },
  { title: "PLI Application Form", description: "Postal Life Insurance application.", downloadUrl: "#" },
  { title: "RPLI Application Form", description: "Rural Postal Life Insurance application.", downloadUrl: "#" },
  { title: "Philately Registration Form", description: "Philatelic products sign-up.", downloadUrl: "#" },
  { title: "Change of Address Form", description: "Update service delivery address.", downloadUrl: "#" },
  { title: "Complaint/Grievance Form", description: "Register a service complaint.", downloadUrl: "#" },
  { title: "RTI Application Form", description: "Right to Information application.", downloadUrl: "#" },
  { title: "NPS Subscriber Form", description: "NPS subscriber registration.", downloadUrl: "#" },
]

const retailers = [
  {
    name: "Shree Retail Mart",
    location: "New Delhi - 110001",
    services: ["Bill Payment", "Booking", "Philately"],
    contact: "011-23361234",
  },
  {
    name: "Suresh Stores",
    location: "Mumbai - 400001",
    services: ["Booking", "Banking Assistance"],
    contact: "022-22624567",
  },
  {
    name: "Raj Provision",
    location: "Chennai - 600001",
    services: ["Bill Payment", "Booking"],
    contact: "044-25224567",
  },
]

const tenders = [
  { title: "IT Infrastructure Upgrade", reference: "DOP/IT/2025/01", value: "₹50 Cr", closing: "2025-11-30" },
  { title: "Logistics Fleet Expansion", reference: "DOP/LOG/2025/09", value: "₹120 Cr", closing: "2025-12-10" },
  { title: "Branch Renovation (Phase-II)", reference: "DOP/ENGG/2025/21", value: "₹30 Cr", closing: "2025-12-20" },
]

const resultsAndAdmitCards = [
  { title: "Postal Assistant 2024 Results", link: "#" },
  { title: "MTS Admit Card 2025", link: "#" },
  { title: "Sorting Assistant 2024 Results", link: "#" },
]

const previousPapers = [
  { title: "Postal Assistant PYQ 2023", link: "#" },
  { title: "MTS PYQ 2022", link: "#" },
  { title: "Sorting Assistant PYQ 2023", link: "#" },
]

const transparencyReports = [
  { period: "Q1 2025", link: "#" },
  { period: "Q4 2024", link: "#" },
  { period: "Q3 2024", link: "#" },
]

// Helpers
function toTitle(page: PageKey) {
  const map: Record<PageKey, string> = {
    home: "Home",
    digital: "Digital Services",
    track: "Track Consignment",
    postage: "Calculate Postage",
    locate: "Locate Post Office",
    recruitment: "Recruitment",
    contact: "Contact Us",
    about: "About Us",
    forms: "Forms & Documents",
    feedback: "Feedback",
    rti: "Right to Information (RTI)",
    tenders: "Tenders",
    sitemap: "Sitemap",
    help: "Help & Support",
    employee: "Employee Corner",
    pos: "POS - Authorized Retailers",
  }
  return map[page]
}

export default function IndiaPostHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("medium")
  const [language, setLanguage] = useState("english")
  const [currentPage, setCurrentPage] = useState<PageKey>("home")

  const go = (page: PageKey) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  const activeBtn =
    "bg-red-100 text-red-700 aria-[current=true]:bg-red-100 aria-[current=true]:text-red-700 data-[state=open]:bg-red-100"

  const Breadcrumbs = ({ page }: { page: PageKey }) => (
    <div className="w-full px-6 py-3 bg-red-50 border-b border-red-100">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
        <Button variant="link" className="text-red-700 px-0 hover:no-underline" onClick={() => go("home")}>
          Home
        </Button>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-gray-700">{toTitle(page)}</span>
      </nav>
    </div>
  )

  // Header nav
  const mainNav: { icon: React.ElementType; label: string; color: string; page: PageKey }[] = [
    { icon: HomeIcon, label: "Home", color: "text-red-600", page: "home" },
    { icon: Globe, label: "Digital Services", color: "text-red-600", page: "digital" },
    { icon: Package, label: "Track", color: "text-blue-600", page: "track" },
    { icon: Calculator, label: "Postage", color: "text-green-600", page: "postage" },
    { icon: MapPin, label: "Locate", color: "text-purple-600", page: "locate" },
    { icon: Briefcase, label: "Recruitment", color: "text-orange-600", page: "recruitment" },
    { icon: ContactIcon, label: "Contact", color: "text-red-600", page: "contact" },
  ]

  const moreNav: { icon: React.ElementType; label: string; color: string; page: PageKey }[] = [
    { icon: Info, label: "About Us", color: "text-blue-600", page: "about" },
    { icon: FileText, label: "Forms", color: "text-green-600", page: "forms" },
    { icon: MessageSquare, label: "Feedback", color: "text-pink-600", page: "feedback" },
    { icon: FileSearch, label: "RTI", color: "text-indigo-600", page: "rti" },
    { icon: FileText, label: "Tenders", color: "text-teal-600", page: "tenders" },
    { icon: Globe, label: "Sitemap", color: "text-gray-600", page: "sitemap" },
    { icon: HelpCircle, label: "Help", color: "text-blue-600", page: "help" },
    { icon: User, label: "Employee Corner", color: "text-green-600", page: "employee" },
    { icon: ShoppingBag, label: "POS", color: "text-purple-600", page: "pos" },
  ]

  const mobileNav = [...mainNav, ...moreNav]

  // Carousel for Home and Digital Services page
  function HeroCarousel() {
    const slides = [
      {
        title: "Postal Services",
        subtitle: "Reliable letters, parcels, and philately across India",
        img: "/placeholder.svg?height=800&width=1600",
      },
      {
        title: "Digital Services",
        subtitle: "Track, calculate postage, and apply online with ease",
        img: "/placeholder.svg?height=800&width=1600",
      },
      {
        title: "Banking Services",
        subtitle: "Secure and inclusive IPPB banking for every citizen",
        img: "/placeholder.svg?height=800&width=1600",
      },
      {
        title: "Parcel Delivery",
        subtitle: "Fast, nation-wide logistics and last-mile delivery",
        img: "/placeholder.svg?height=800&width=1600",
      },
    ]
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)
    const timerRef = useRef<number | null>(null)

    const next = () => setIndex((i) => (i + 1) % slides.length)
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
    const goTo = (i: number) => setIndex(i)

    useEffect(() => {
      if (paused) return
      timerRef.current = window.setInterval(() => next(), 5500)
      return () => {
        if (timerRef.current) window.clearInterval(timerRef.current)
      }
    }, [paused])

    return (
      <div className="w-full px-6 pt-6">
        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10 bg-black/5 h-[480px] md:h-[380px] sm:h-[280px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          {slides.map((s, i) => {
            const active = i === index
            return (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  active ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={!active}
              >
                <Image
                  src={s.img || "/placeholder.svg"}
                  alt={`${s.title} background`}
                  fill
                  className="object-cover scale-110 blur-md"
                  priority={i === 0}
                />
                <Image
                  src={s.img || "/placeholder.svg"}
                  alt={s.title}
                  fill
                  className="object-cover"
                  style={{
                    transition: "transform 6s ease-in-out",
                    transform: active ? "scale(1.06)" : "scale(1.0)",
                  }}
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h2 className="text-white font-bold tracking-tight text-4xl md:text-5xl">{s.title}</h2>
                  <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl">{s.subtitle}</p>
                </div>
              </div>
            )
          })}

          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/55 text-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/55 text-white transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {slides.map((_, i) => {
              const active = i === index
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`transition-all rounded-full ${
                    active ? "w-3 h-3 bg-white" : "w-2.5 h-2.5 bg-white/60 hover:bg-white/80"
                  }`}
                />
              )
            })}
          </div>
        </div>

        {/* Stats below carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { value: "1,55,000+", label: "Post Offices" },
            { value: "4,00,000+", label: "Employees" },
            { value: "6,00,000+", label: "Villages Served" },
          ].map((stat, i) => (
            <div key={i} className="bg-red-50 rounded-xl p-6 border border-red-100 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-red-700">{stat.value}</h3>
              <p className="text-red-800/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Home page with Digital Services tabs (responsive)
  const Home = () => {
    // Responsive scroll controls for tabs
    const tabsRef = useRef<HTMLDivElement | null>(null)
    const [canLeft, setCanLeft] = useState(false)
    const [canRight, setCanRight] = useState(false)

    const updateScrollButtons = () => {
      const el = tabsRef.current
      if (!el) return
      const { scrollLeft, scrollWidth, clientWidth } = el
      setCanLeft(scrollLeft > 4)
      setCanRight(scrollLeft + clientWidth < scrollWidth - 4)
    }

    useEffect(() => {
      const el = tabsRef.current
      updateScrollButtons()
      const onScroll = () => updateScrollButtons()
      el?.addEventListener("scroll", onScroll, { passive: true })
      window.addEventListener("resize", onScroll)
      return () => {
        el?.removeEventListener("scroll", onScroll)
        window.removeEventListener("resize", onScroll)
      }
    }, [])

    const scrollByAmount = (dir: "left" | "right") => {
      const el = tabsRef.current
      if (!el) return
      const amount = Math.round(el.clientWidth * 0.8)
      el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
    }

    // Track Consignment (tab)
    const [trackNum, setTrackNum] = useState("")
    const [trackCaptcha, setTrackCaptcha] = useState("")
    const [trackResult, setTrackResult] = useState<string | null>(null)
    const submitTrack = () => {
      if (!/^[A-Z]{2}\d{9}[A-Z]{2}$/.test(trackNum)) {
        setTrackResult("Please enter a valid 13-character number (e.g., EE123456789IN).")
        return
      }
      if (!trackCaptcha.trim()) {
        setTrackResult("Please complete captcha.")
        return
      }
      setTrackResult("In Transit — Dispatched from Sorting Center (Static Demo)")
    }

    // Calculate Postage (tab)
    const [postWeight, setPostWeight] = useState("")
    const [postService, setPostService] = useState<string | undefined>()
    const [postDest, setPostDest] = useState<string | undefined>()
    const [postResult, setPostResult] = useState<string | null>(null)
    const submitPostage = () => {
      const w = Number(postWeight) || 0
      const base = postService === "speed" ? 60 : postService === "registered" ? 45 : 30
      const distance = postDest ? 1.15 : 1
      let total = base + Math.ceil(w / 50) * 8
      total = Math.round(total * distance)
      setPostResult(`Estimated: ₹${total} (Static Estimate)`)
    }

    // Locate Post Office (tab)
    const [locQuery, setLocQuery] = useState("")
    const locResults = useMemo(() => {
      const q = locQuery.trim().toLowerCase()
      if (!q) return []
      return offices
        .filter(
          (o) =>
            o.city.toLowerCase().includes(q) ||
            o.pin.includes(q) ||
            o.name.toLowerCase().includes(q) ||
            o.address.toLowerCase().includes(q),
        )
        .slice(0, 5)
    }, [locQuery])

    // Find Pincode (tab)
    const [pinQuery, setPinQuery] = useState("")
    const pinResults = useMemo(() => {
      const q = pinQuery.trim().toLowerCase()
      if (!q) return []
      const matches = offices.filter(
        (o) =>
          o.city.toLowerCase().includes(q) || o.name.toLowerCase().includes(q) || o.address.toLowerCase().includes(q),
      )
      const uniquePins = Array.from(new Set(matches.map((m) => m.pin)))
      return uniquePins
    }, [pinQuery])
    const copyPin = async (pin: string) => {
      try {
        await navigator.clipboard.writeText(pin)
        alert(`Copied PIN: ${pin}`)
      } catch {
        alert("Copy failed. Please copy manually.")
      }
    }

    // Customer Registration (tab)
    const [regName, setRegName] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const [regMobile, setRegMobile] = useState("")
    const [regAddress, setRegAddress] = useState("")
    const [regCity, setRegCity] = useState("")
    const [regState, setRegState] = useState("")
    const [regPin, setRegPin] = useState("")
    const [regAgree, setRegAgree] = useState(false)
    const submitRegister = () => {
      if (!regName || !regEmail || !regMobile || !regAddress || !regCity || !regState || !regPin || !regAgree) {
        alert("Please complete all fields and accept Terms & Conditions.")
        return
      }
      alert(`Registered successfully! Welcome, ${regName}.`)
      setRegName("")
      setRegEmail("")
      setRegMobile("")
      setRegAddress("")
      setRegCity("")
      setRegState("")
      setRegPin("")
      setRegAgree(false)
    }

    return (
      <>
        <section className="bg-transparent">
          <HeroCarousel />
        </section>

        {/* Digital Services Tabs */}
        <section className="py-16 bg-gradient-to-b from-white to-orange-50">
          <div className="w-full px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Digital Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access India Post services digitally. Track, calculate, locate, and register with ease.
              </p>
            </div>

            {/* Wrapper for scroll buttons and edge fades on mobile */}
            <div className="relative">
              {/* Edge fades (mobile only) */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-orange-50 to-transparent lg:hidden" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-orange-50 to-transparent lg:hidden" />

              {/* Scroll buttons (mobile only) */}
              <div className="absolute inset-y-0 left-1 flex items-center lg:hidden">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label="Scroll tabs left"
                  disabled={!canLeft}
                  onClick={() => scrollByAmount("left")}
                  className={`h-8 w-8 rounded-full bg-white/80 shadow ${!canLeft ? "opacity-40" : ""}`}
                >
                  <ChevronLeft className="h-4 w-4 text-gray-700" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-1 flex items-center lg:hidden">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label="Scroll tabs right"
                  disabled={!canRight}
                  onClick={() => scrollByAmount("right")}
                  className={`h-8 w-8 rounded-full bg-white/80 shadow ${!canRight ? "opacity-40" : ""}`}
                >
                  <ChevronRight className="h-4 w-4 text-gray-700" />
                </Button>
              </div>

              <Tabs defaultValue="track" className="w-full">
                <TabsList
                  ref={tabsRef as any}
                  className="
                    w-full
                    flex md:grid md:grid-cols-3 lg:grid-cols-5
                    gap-2 p-2 rounded-xl bg-white/70 backdrop-blur-sm ring-1 ring-red-100
                    overflow-x-auto md:overflow-visible
                    scroll-smooth snap-x snap-mandatory
                    -mx-2 px-4 md:mx-0 md:px-2
                  "
                  style={{ scrollbarWidth: "none" as any }}
                  aria-label="Digital services"
                >
                  <TabsTrigger
                    value="track"
                    className="
                      font-semibold flex items-center justify-center gap-2 rounded-lg
                      bg-red-100 text-red-700 data-[state=active]:bg-red-600 data-[state=active]:text-white
                      flex-none min-w-[220px] sm:min-w-[240px] lg:min-w-0 snap-start
                      min-h-[44px] px-3
                    "
                  >
                    <Package className="h-4 w-4" />
                    <span>Track Consignment</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="postage"
                    className="
                      font-semibold flex items-center justify-center gap-2 rounded-lg
                      bg-amber-50 text-amber-800 data-[state=active]:bg-amber-500 data-[state=active]:text-white
                      flex-none min-w-[220px] sm:min-w-[240px] lg:min-w-0 snap-start
                      min-h-[44px] px-3
                    "
                  >
                    <Calculator className="h-4 w-4" />
                    <span>Calculate Postage</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="locate"
                    className="
                      font-semibold flex items-center justify-center gap-2 rounded-lg
                      bg-yellow-50 text-yellow-800 data-[state=active]:bg-yellow-500 data-[state=active]:text-white
                      flex-none min-w-[220px] sm:min-w-[240px] lg:min-w-0 snap-start
                      min-h-[44px] px-3
                    "
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Locate Post Office</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="pincode"
                    className="
                      font-semibold flex items-center justify-center gap-2 rounded-lg
                      bg-orange-50 text-orange-800 data-[state=active]:bg-orange-500 data-[state=active]:text-white
                      flex-none min-w-[220px] sm:min-w-[240px] lg:min-w-0 snap-start
                      min-h-[44px] px-3
                    "
                  >
                    <Search className="h-4 w-4" />
                    <span>Find Pincode</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className="
                      font-semibold flex items-center justify-center gap-2 rounded-lg
                      bg-green-50 text-green-800 data-[state=active]:bg-green-600 data-[state=active]:text-white
                      flex-none min-w-[220px] sm:min-w-[240px] lg:min-w-0 snap-start
                      min-h-[44px] px-3
                    "
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>Customer Registration</span>
                  </TabsTrigger>
                </TabsList>

                {/* Tab 1: Track Consignment */}
                <TabsContent
                  value="track"
                  className="data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300"
                >
                  <Card className="shadow-xl border-0 bg-white overflow-hidden">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
                      <div className="flex items-center gap-3">
                        <Package className="h-6 w-6" />
                        <div>
                          <h3 className="text-2xl font-bold">Track Your Consignment</h3>
                          <p className="text-red-100">
                            Enter your consignment number to track your shipment in real-time
                          </p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="space-y-6 p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Consignment Number</label>
                          <Input
                            placeholder="EE123456789IN"
                            value={trackNum}
                            onChange={(e) => setTrackNum(e.target.value.toUpperCase())}
                            className="h-12 text-base border-2 border-red-200 focus:border-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Captcha Verification</label>
                          <Input
                            placeholder="Enter Captcha"
                            value={trackCaptcha}
                            onChange={(e) => setTrackCaptcha(e.target.value)}
                            className="h-12 text-base border-2 border-red-200 focus:border-red-500"
                          />
                        </div>
                      </div>
                      <Button
                        onClick={submitTrack}
                        className="w-full h-12 text-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                      >
                        <Package className="h-5 w-5 mr-2" />
                        Track Now
                      </Button>
                      {trackResult && (
                        <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 p-3 rounded">
                          <CheckCircle className="h-5 w-5" />
                          <span>{trackResult}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tab 2: Calculate Postage */}
                <TabsContent value="postage">
                  <Card className="shadow-xl border-0 bg-white overflow-hidden">
                    <div className="bg-amber-200 text-amber-900 p-6">
                      <div className="flex items-center gap-3">
                        <Calculator className="h-6 w-6" />
                        <div>
                          <h3 className="text-2xl font-bold">Calculate Postage</h3>
                          <p className="opacity-80">Calculate postal rates instantly</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="space-y-6 p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Weight (grams)</label>
                          <Input
                            type="number"
                            placeholder="Weight in grams"
                            value={postWeight}
                            onChange={(e) => setPostWeight(e.target.value)}
                            className="h-12 border-2 border-amber-200 focus:border-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                          <Select onValueChange={setPostService} value={postService}>
                            <SelectTrigger className="h-12 border-2 border-amber-200 focus:border-amber-500">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ordinary">Ordinary</SelectItem>
                              <SelectItem value="registered">Registered</SelectItem>
                              <SelectItem value="speed">Speed Post</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                          <Select onValueChange={setPostDest} value={postDest}>
                            <SelectTrigger className="h-12 border-2 border-amber-200 focus:border-amber-500">
                              <SelectValue placeholder="State/City" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Delhi">Delhi</SelectItem>
                              <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                              <SelectItem value="West Bengal">West Bengal</SelectItem>
                              <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button
                        onClick={submitPostage}
                        className="w-full h-12 text-lg bg-amber-500 hover:bg-amber-600 text-white"
                      >
                        <Calculator className="h-5 w-5 mr-2" />
                        Calculate
                      </Button>
                      {postResult && (
                        <div className="flex items-center gap-2 text-blue-800 bg-blue-50 border border-blue-200 p-3 rounded">
                          <CheckCircle className="h-5 w-5" />
                          <span>{postResult}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tab 3: Locate Post Office */}
                <TabsContent value="locate">
                  <Card className="shadow-xl border-0 bg-white overflow-hidden">
                    <div className="bg-yellow-300 text-yellow-900 p-6">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-6 w-6" />
                        <div>
                          <h3 className="text-2xl font-bold">Locate Post Office</h3>
                          <p className="opacity-80">Find nearest postal office by location or PIN code</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="space-y-6 p-6">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="City/State/Area/PIN Code"
                          value={locQuery}
                          onChange={(e) => setLocQuery(e.target.value)}
                          className="pl-9 h-12 border-2 border-yellow-200 focus:border-yellow-500"
                        />
                      </div>
                      <Button className="w-full h-12 text-lg bg-yellow-500 hover:bg-yellow-600 text-white">
                        <MapPin className="h-5 w-5 mr-2" />
                        Find Location
                      </Button>
                      <div className="space-y-3">
                        {locResults.map((o, i) => (
                          <div key={i} className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r">
                            <div className="flex items-center justify-between">
                              <div className="font-semibold text-gray-800">{o.name}</div>
                              <Badge className="bg-yellow-100 text-yellow-800">{o.pin}</Badge>
                            </div>
                            <div className="text-gray-700">{o.address}</div>
                            <div className="text-gray-700">Phone: {o.phone}</div>
                          </div>
                        ))}
                        {locQuery && locResults.length === 0 && (
                          <div className="flex items-center gap-2 text-yellow-800 bg-yellow-50 border border-yellow-200 p-3 rounded">
                            <AlertCircle className="h-5 w-5" />
                            <span>No results. Try a different query.</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tab 4: Find Pincode */}
                <TabsContent value="pincode">
                  <Card className="shadow-xl border-0 bg-white overflow-hidden">
                    <div className="bg-orange-500 text-white p-6">
                      <div className="flex items-center gap-3">
                        <Search className="h-6 w-6" />
                        <div>
                          <h3 className="text-2xl font-bold">Find Pincode</h3>
                          <p className="text-white/90">Search PIN codes by city or area name</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="space-y-6 p-6">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="Enter City/Area name"
                          value={pinQuery}
                          onChange={(e) => setPinQuery(e.target.value)}
                          className="pl-9 h-12 border-2 border-orange-200 focus:border-orange-500"
                        />
                      </div>
                      <Button className="w-full h-12 text-lg bg-orange-500 hover:bg-orange-600 text-white">
                        <Search className="h-5 w-5 mr-2" />
                        Search
                      </Button>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {pinResults.map((p) => (
                          <div
                            key={p}
                            className="flex items-center justify-between bg-orange-50 border border-orange-200 p-3 rounded"
                          >
                            <span className="font-medium text-orange-800">{p}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-orange-300 text-orange-700 bg-transparent"
                              onClick={() => copyPin(p)}
                            >
                              Copy
                            </Button>
                          </div>
                        ))}
                      </div>
                      {pinQuery && pinResults.length === 0 && (
                        <div className="flex items-center gap-2 text-orange-800 bg-orange-50 border border-orange-200 p-3 rounded">
                          <AlertCircle className="h-5 w-5" />
                          <span>No PIN codes found. Try another area.</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Tab 5: Customer Registration */}
                <TabsContent value="register">
                  <Card className="shadow-xl border-0 bg-white overflow-hidden">
                    <div className="bg-green-600 text-white p-6">
                      <div className="flex items-center gap-3">
                        <UserPlus className="h-6 w-6" />
                        <div>
                          <h3 className="text-2xl font-bold">Customer Registration</h3>
                          <p className="text-green-100">Register as a customer for faster service</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="space-y-6 p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          placeholder="Full Name"
                          value={regName}
                          onChange={(e) => setRegName(e.target.value)}
                          className="h-12 border-2 border-green-200 focus:border-green-500"
                        />
                        <Input
                          type="email"
                          placeholder="Email"
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          className="h-12 border-2 border-green-200 focus:border-green-500"
                        />
                        <Input
                          placeholder="Mobile Number"
                          value={regMobile}
                          onChange={(e) => setRegMobile(e.target.value)}
                          className="h-12 border-2 border-green-200 focus:border-green-500"
                        />
                        <Input
                          placeholder="PIN Code"
                          value={regPin}
                          onChange={(e) => setRegPin(e.target.value)}
                          className="h-12 border-2 border-green-200 focus:border-green-500"
                        />
                        <Input
                          placeholder="City"
                          value={regCity}
                          onChange={(e) => setRegCity(e.target.value)}
                          className="h-12 border-2 border-green-200 focus:border-green-500"
                        />
                        <Input
                          placeholder="State"
                          value={regState}
                          onChange={(e) => setRegState(e.target.value)}
                          className="h-12 border-2 border-green-200 focus:border-green-500"
                        />
                      </div>
                      <Input
                        placeholder="Address"
                        value={regAddress}
                        onChange={(e) => setRegAddress(e.target.value)}
                        className="h-24 border-2 border-green-200 focus:border-green-500"
                      />
                      <div className="flex items-center gap-2">
                        <Checkbox id="terms" checked={regAgree} onCheckedChange={(v) => setRegAgree(!!v)} />
                        <label htmlFor="terms" className="text-sm">
                          I agree to the Terms & Conditions
                        </label>
                      </div>
                      <Button onClick={submitRegister} className="w-full h-12 text-lg bg-green-600 hover:bg-green-700">
                        <UserPlus className="h-5 w-5 mr-2" />
                        Register
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Services grid and News sections */}
        <ServicesSection />
        <NewsSection go={go} />
      </>
    )
  }

  // Shared sections reused
  function ServicesSection() {
    return (
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
              { icon: Building, title: "Business Solutions", desc: "Postal solutions for businesses of all sizes" },
              { icon: CreditCard, title: "Retail Services", desc: "Retail postal and courier services" },
              { icon: Shield, title: "Insurance (PLI/RPLI)", desc: "Insurance schemes for urban and rural" },
              { icon: FileText, title: "Philately", desc: "Stamp collection and philatelic products" },
              { icon: Truck, title: "Money Transfer", desc: "Secure money transfer services" },
              { icon: CreditCard, title: "Banking Services", desc: "IPPB banking across the network" },
            ].map((service, i) => (
              <Card key={i} className="hover:shadow-2xl transition-all duration-300 border-0 bg-white group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-red-50 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-red-600" />
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
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white border-0 hover:shadow-lg transition-all duration-200"
                  >
                    Learn More <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  function NewsSection({ go }: { go: (p: PageKey) => void }) {
    return (
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
                    date: "2025-10-01",
                    title: "Speed Post routes expanded to 25 new cities",
                    category: "Service Update",
                    priority: "high",
                  },
                  {
                    date: "2025-09-15",
                    title: "Digital payment enhancements at branch counters",
                    category: "Technology",
                    priority: "medium",
                  },
                ].map((news, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-6 py-4 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium ${
                          news.priority === "high"
                            ? "bg-red-100 text-red-700 border-red-200"
                            : "bg-yellow-100 text-yellow-700 border-yellow-200"
                        }`}
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
                  onClick={() => go("tenders")}
                >
                  View All News & Tenders <ChevronRight className="h-4 w-4 ml-2" />
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
                {tenders.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-green-500 pl-6 py-4 bg-white rounded-r-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className="text-xs font-medium bg-orange-100 text-orange-700 border-orange-200"
                      >
                        Tender
                      </Badge>
                      <span className="text-xs text-gray-500 font-medium">{item.closing}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 hover:text-green-600 cursor-pointer transition-colors leading-relaxed mb-2">
                      {item.title} — {item.reference}
                    </h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-600 font-medium">{item.value}</span>
                      <Button variant="link" className="px-0 text-green-600" onClick={() => go("recruitment")}>
                        View Recruitment
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full mt-6 border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
                  onClick={() => go("recruitment")}
                >
                  View Recruitment <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  // Dedicated Digital Services page (stacked sections) + same hero as homepage
  const DigitalServices = () => {
    // Track
    const [trackNum, setTrackNum] = useState("")
    const [trackCaptcha, setTrackCaptcha] = useState("")
    const [trackResult, setTrackResult] = useState<string | null>(null)
    const submitTrack = () => {
      if (!/^[A-Z]{2}\d{9}[A-Z]{2}$/.test(trackNum)) {
        setTrackResult("Please enter a valid 13-character number (e.g., EE123456789IN).")
        return
      }
      if (!trackCaptcha.trim()) {
        setTrackResult("Please complete captcha.")
        return
      }
      setTrackResult("In Transit — Dispatched from Sorting Center (Static Demo)")
    }

    // Postage
    const [postWeight, setPostWeight] = useState("")
    const [postService, setPostService] = useState<string | undefined>()
    const [postDest, setPostDest] = useState<string | undefined>()
    const [postResult, setPostResult] = useState<string | null>(null)
    const submitPostage = () => {
      const w = Number(postWeight) || 0
      const base = postService === "speed" ? 60 : postService === "registered" ? 45 : 30
      const distance = postDest ? 1.15 : 1
      let total = base + Math.ceil(w / 50) * 8
      total = Math.round(total * distance)
      setPostResult(`Estimated: ₹${total} (Static Estimate)`)
    }

    // Locate
    const [locQuery, setLocQuery] = useState("")
    const locResults = useMemo(() => {
      const q = locQuery.trim().toLowerCase()
      if (!q) return []
      return offices
        .filter(
          (o) =>
            o.city.toLowerCase().includes(q) ||
            o.pin.includes(q) ||
            o.name.toLowerCase().includes(q) ||
            o.address.toLowerCase().includes(q),
        )
        .slice(0, 6)
    }, [locQuery])

    // Pincode
    const [pinQuery, setPinQuery] = useState("")
    const pinResults = useMemo(() => {
      const q = pinQuery.trim().toLowerCase()
      if (!q) return []
      const matches = offices.filter(
        (o) =>
          o.city.toLowerCase().includes(q) || o.name.toLowerCase().includes(q) || o.address.toLowerCase().includes(q),
      )
      return Array.from(new Set(matches.map((m) => m.pin)))
    }, [pinQuery])
    const copyPin = async (pin: string) => {
      try {
        await navigator.clipboard.writeText(pin)
        alert(`Copied PIN: ${pin}`)
      } catch {
        alert("Copy failed. Please copy manually.")
      }
    }

    // Registration
    const [regName, setRegName] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const [regMobile, setRegMobile] = useState("")
    const [regAddress, setRegAddress] = useState("")
    const [regCity, setRegCity] = useState("")
    const [regState, setRegState] = useState("")
    const [regPin, setRegPin] = useState("")
    const [regAgree, setRegAgree] = useState(false)
    const submitRegister = () => {
      if (!regName || !regEmail || !regMobile || !regAddress || !regCity || !regState || !regPin || !regAgree) {
        alert("Please complete all fields and accept Terms & Conditions.")
        return
      }
      alert(`Registered successfully! Welcome, ${regName}.`)
    }

    return (
      <>
        <section className="bg-transparent">
          <HeroCarousel />
        </section>
        <Breadcrumbs page="digital" />

        <section className="py-10 bg-white">
          <div className="w-full px-6 max-w-6xl mx-auto space-y-10">
            {/* 1. Track */}
            <Card className="shadow-xl border-0 bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6" />
                  <div>
                    <h3 className="text-2xl font-bold">Track Your Consignment</h3>
                    <p className="text-red-100">Enter your consignment number to track your shipment in real-time</p>
                  </div>
                </div>
              </div>
              <CardContent className="space-y-6 p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="EE123456789IN"
                    value={trackNum}
                    onChange={(e) => setTrackNum(e.target.value.toUpperCase())}
                    className="h-12 text-base border-2 border-red-200 focus:border-red-500"
                  />
                  <Input
                    placeholder="Enter Captcha"
                    value={trackCaptcha}
                    onChange={(e) => setTrackCaptcha(e.target.value)}
                    className="h-12 text-base border-2 border-red-200 focus:border-red-500"
                  />
                </div>
                <Button
                  onClick={submitTrack}
                  className="w-full h-12 text-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                >
                  <Package className="h-5 w-5 mr-2" />
                  Track Now
                </Button>
                {trackResult && (
                  <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 p-3 rounded">
                    <CheckCircle className="h-5 w-5" />
                    <span>{trackResult}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 2. Calculate Postage */}
            <Card className="shadow-xl border-0 bg-white overflow-hidden">
              <div className="bg-amber-200 text-amber-900 p-6">
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6" />
                  <div>
                    <h3 className="text-2xl font-bold">Calculate Postage</h3>
                    <p className="opacity-80">Calculate postal rates instantly</p>
                  </div>
                </div>
              </div>
              <CardContent className="space-y-6 p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Input
                    type="number"
                    placeholder="Weight in grams"
                    value={postWeight}
                    onChange={(e) => setPostWeight(e.target.value)}
                    className="h-12 border-2 border-amber-200 focus:border-amber-500"
                  />
                  <Select onValueChange={setPostService} value={postService}>
                    <SelectTrigger className="h-12 border-2 border-amber-200 focus:border-amber-500">
                      <SelectValue placeholder="Service Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ordinary">Ordinary</SelectItem>
                      <SelectItem value="registered">Registered</SelectItem>
                      <SelectItem value="speed">Speed Post</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={setPostDest} value={postDest}>
                    <SelectTrigger className="h-12 border-2 border-amber-200 focus:border-amber-500">
                      <SelectValue placeholder="Destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="West Bengal">West Bengal</SelectItem>
                      <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={submitPostage}
                  className="w-full h-12 text-lg bg-amber-500 hover:bg-amber-600 text-white"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate
                </Button>
                {postResult && (
                  <div className="flex items-center gap-2 text-blue-800 bg-blue-50 border border-blue-200 p-3 rounded">
                    <CheckCircle className="h-5 w-5" />
                    <span>{postResult}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 3. Locate Post Office */}
            <Card className="shadow-xl border-0 bg-white overflow-hidden">
              <div className="bg-yellow-300 text-yellow-900 p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <h3 className="text-2xl font-bold">Locate Post Office</h3>
                    <p className="opacity-80">Find nearest postal office by location or PIN code</p>
                  </div>
                </div>
              </div>
              <CardContent className="space-y-6 p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="City/State/Area/PIN Code"
                    value={locQuery}
                    onChange={(e) => setLocQuery(e.target.value)}
                    className="pl-9 h-12 border-2 border-yellow-200 focus:border-yellow-500"
                  />
                </div>
                <Button className="w-full h-12 text-lg bg-yellow-500 hover:bg-yellow-600 text-white">
                  <MapPin className="h-5 w-5 mr-2" />
                  Find Location
                </Button>
                <div className="grid md:grid-cols-2 gap-3">
                  {locResults.map((o, i) => (
                    <div key={i} className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-gray-800">{o.name}</div>
                        <Badge className="bg-yellow-100 text-yellow-800">{o.pin}</Badge>
                      </div>
                      <div className="text-gray-700">{o.address}</div>
                      <div className="text-gray-700">Phone: {o.phone}</div>
                    </div>
                  ))}
                  {locQuery && locResults.length === 0 && (
                    <div className="flex items-center gap-2 text-yellow-800 bg-yellow-50 border border-yellow-200 p-3 rounded">
                      <AlertCircle className="h-5 w-5" />
                      <span>No results. Try a different query.</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* 4. Find Pincode */}
            <Card className="shadow-xl border-0 bg-white overflow-hidden">
              <div className="bg-orange-500 text-white p-6">
                <div className="flex items-center gap-3">
                  <Search className="h-6 w-6" />
                  <div>
                    <h3 className="text-2xl font-bold">Find Pincode</h3>
                    <p className="text-white/90">Search PIN codes by city or area name</p>
                  </div>
                </div>
              </div>
              <CardContent className="space-y-6 p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Enter City/Area name"
                    value={pinQuery}
                    onChange={(e) => setPinQuery(e.target.value)}
                    className="pl-9 h-12 border-2 border-orange-200 focus:border-orange-500"
                  />
                </div>
                <Button className="w-full h-12 text-lg bg-orange-500 hover:bg-orange-600 text-white">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {pinResults.map((p) => (
                    <div
                      key={p}
                      className="flex items-center justify-between bg-orange-50 border border-orange-200 p-3 rounded"
                    >
                      <span className="font-medium text-orange-800">{p}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-300 text-orange-700 bg-transparent"
                        onClick={() => copyPin(p)}
                      >
                        Copy
                      </Button>
                    </div>
                  ))}
                </div>
                {pinQuery && pinResults.length === 0 && (
                  <div className="flex items-center gap-2 text-orange-800 bg-orange-50 border border-orange-200 p-3 rounded">
                    <AlertCircle className="h-5 w-5" />
                    <span>No PIN codes found. Try another area.</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 5. Customer Registration */}
            <Card className="shadow-xl border-0 bg-white overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <UserPlus className="h-6 w-6" />
                  <div>
                    <h3 className="text-2xl font-bold">Customer Registration</h3>
                    <p className="text-green-100">Register as a customer for faster service</p>
                  </div>
                </div>
              </div>
              <CardContent className="space-y-6 p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Full Name"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="h-12 border-2 border-green-200 focus:border-green-500"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="h-12 border-2 border-green-200 focus:border-green-500"
                  />
                  <Input
                    placeholder="Mobile Number"
                    value={regMobile}
                    onChange={(e) => setRegMobile(e.target.value)}
                    className="h-12 border-2 border-green-200 focus:border-green-500"
                  />
                  <Input
                    placeholder="PIN Code"
                    value={regPin}
                    onChange={(e) => setRegPin(e.target.value)}
                    className="h-12 border-2 border-green-200 focus:border-green-500"
                  />
                  <Input
                    placeholder="City"
                    value={regCity}
                    onChange={(e) => setRegCity(e.target.value)}
                    className="h-12 border-2 border-green-200 focus:border-green-500"
                  />
                  <Input
                    placeholder="State"
                    value={regState}
                    onChange={(e) => setRegState(e.target.value)}
                    className="h-12 border-2 border-green-200 focus:border-green-500"
                  />
                </div>
                <Input
                  placeholder="Address"
                  value={regAddress}
                  onChange={(e) => setRegAddress(e.target.value)}
                  className="h-24 border-2 border-green-200 focus:border-green-500"
                />
                <div className="flex items-center gap-2">
                  <Checkbox id="terms-d" checked={regAgree} onCheckedChange={(v) => setRegAgree(!!v)} />
                  <label htmlFor="terms-d" className="text-sm">
                    I agree to the Terms & Conditions
                  </label>
                </div>
                <Button onClick={submitRegister} className="w-full h-12 text-lg bg-green-600 hover:bg-green-700">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Register
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </>
    )
  }

  // Other pages (existing content)
  const Track = () => {
    const [num, setNum] = useState("")
    const [captcha, setCaptcha] = useState("")
    const [result, setResult] = useState<string | null>(null)
    const submit = () => {
      if (!/^[A-Z]{2}\d{9}[A-Z]{2}$/.test(num)) {
        setResult("Please enter a valid 13-character number (e.g., EE123456789IN).")
        return
      }
      if (!captcha.trim()) {
        setResult("Please complete captcha.")
        return
      }
      setResult("In Transit — Dispatched from Sorting Center (Static Demo)")
    }
    return (
      <>
        <Breadcrumbs page="track" />
        <section className="py-10 bg-gradient-to-b from-white to-red-50">
          <div className="w-full px-6 max-w-4xl mx-auto">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Package className="h-6 w-6" />
                  <span>Track Your Consignment</span>
                </CardTitle>
                <CardDescription className="text-red-100">
                  Enter your consignment number to track your shipment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Consignment Number</label>
                    <Input
                      placeholder="EE123456789IN"
                      value={num}
                      onChange={(e) => setNum(e.target.value.toUpperCase())}
                      className="h-12 text-lg border-2 border-red-200 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Captcha Verification</label>
                    <Input
                      placeholder="Enter Captcha"
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      className="h-12 text-lg border-2 border-red-200 focus:border-red-500"
                    />
                  </div>
                </div>
                <Button
                  onClick={submit}
                  className="w-full h-12 text-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                >
                  Track Now
                </Button>
                {result && (
                  <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 p-3 rounded">
                    <CheckCircle className="h-5 w-5" />
                    <span>{result}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </>
    )
  }

  const Postage = () => {
    const [service, setService] = useState<string | undefined>()
    const [fromState, setFromState] = useState<string | undefined>()
    const [toState, setToState] = useState<string | undefined>()
    const [weight, setWeight] = useState("")
    const [length, setLength] = useState("")
    const [width, setWidth] = useState("")
    const [insurance, setInsurance] = useState(false)
    const [amount, setAmount] = useState<string | null>(null)

    const calc = () => {
      const w = Number(weight) || 0
      const base = service === "speed-post" ? 60 : service === "registered" ? 45 : 35
      const distance = fromState && toState && fromState !== toState ? 1.2 : 1
      const volumetric = (Number(length) || 0) * (Number(width) || 0) * 0.001
      const variable = Math.ceil(Math.max(w / 50, volumetric))
      let total = base + variable * 10
      if (insurance) total += 15
      total = Math.round(total * distance)
      setAmount(`Estimated Postage: ₹${total} (Static Estimate)`)
    }

    return (
      <>
        <Breadcrumbs page="postage" />
        <section className="py-10 bg-gradient-to-b from-white to-yellow-50">
          <div className="w-full px-6 max-w-5xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Calculator className="h-6 w-6" />
                  <span>Calculate Postage</span>
                </CardTitle>
                <CardDescription className="text-yellow-100">
                  Calculate postage for domestic services (static estimate)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                    <Select onValueChange={setService} value={service}>
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
                    <Select onValueChange={setFromState} value={fromState}>
                      <SelectTrigger className="h-12 border-2 border-yellow-200 focus:border-yellow-500">
                        <SelectValue placeholder="From State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="West Bengal">West Bengal</SelectItem>
                        <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">To State</label>
                    <Select onValueChange={setToState} value={toState}>
                      <SelectTrigger className="h-12 border-2 border-yellow-200 focus:border-yellow-500">
                        <SelectValue placeholder="To State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="West Bengal">West Bengal</SelectItem>
                        <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weight (grams)</label>
                    <Input
                      placeholder="Weight in grams"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="h-12 border-2 border-yellow-200 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Length (cm)</label>
                    <Input
                      placeholder="Length in cm"
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="h-12 border-2 border-yellow-200 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Width (cm)</label>
                    <Input
                      placeholder="Width in cm"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="h-12 border-2 border-yellow-200 focus:border-yellow-500"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                  <Checkbox id="insurance" checked={insurance} onCheckedChange={(v) => setInsurance(!!v)} />
                  <label htmlFor="insurance" className="text-sm font-medium text-gray-700">
                    Add Insurance Coverage
                  </label>
                </div>
                <Button
                  onClick={calc}
                  className="w-full h-12 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                >
                  Calculate Postage
                </Button>
                {amount && (
                  <div className="flex items-center gap-2 text-blue-800 bg-blue-50 border border-blue-200 p-3 rounded">
                    <CheckCircle className="h-5 w-5" />
                    <span>{amount}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </>
    )
  }

  const Locate = () => {
    const [query, setQuery] = useState("")
    const [filterPostal, setFilterPostal] = useState(true)
    const [filterParcel, setFilterParcel] = useState(true)
    const [filterFinancial, setFilterFinancial] = useState(true)

    const filtered = useMemo(() => {
      const q = query.trim().toLowerCase()
      return offices.filter((o) => {
        const match =
          o.city.toLowerCase().includes(q) ||
          o.pin.includes(q) ||
          o.name.toLowerCase().includes(q) ||
          o.address.toLowerCase().includes(q)
        const byPostal = filterPostal ? o.services.postal : true
        const byParcel = filterParcel ? o.services.parcel : true
        const byFin = filterFinancial ? o.services.financial : true
        return match && byPostal && byParcel && byFin
      })
    }, [query, filterPostal, filterParcel, filterFinancial])

    return (
      <>
        <Breadcrumbs page="locate" />
        <section className="py-10 bg-gradient-to-b from-white to-green-50">
          <div className="w-full px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </CardTitle>
                  <CardDescription>Search and narrow results</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search by city or PIN..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="postal" checked={filterPostal} onCheckedChange={(v) => setFilterPostal(!!v)} />
                    <label htmlFor="postal">Postal Services</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="parcel" checked={filterParcel} onCheckedChange={(v) => setFilterParcel(!!v)} />
                    <label htmlFor="parcel">Parcel Services</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="financial"
                      checked={filterFinancial}
                      onCheckedChange={(v) => setFilterFinancial(!!v)}
                    />
                    <label htmlFor="financial">Financial Services</label>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:col-span-3 space-y-4">
                {filtered.map((o, idx) => (
                  <Card key={idx} className="overflow-hidden">
                    <CardHeader className="bg-green-600 text-white">
                      <CardTitle className="flex items-center justify-between">
                        <span>{o.name}</span>
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {o.pin}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-green-100">{o.city}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-2">
                      <div className="text-gray-700">{o.address}</div>
                      <div className="text-gray-700">Phone: {o.phone}</div>
                      <div className="text-gray-700">Hours: {o.hours}</div>
                      <div className="flex gap-2 mt-2">
                        {o.services.postal && <Badge className="bg-green-100 text-green-700">Postal</Badge>}
                        {o.services.parcel && <Badge className="bg-purple-100 text-purple-700">Parcel</Badge>}
                        {o.services.financial && <Badge className="bg-blue-100 text-blue-700">Financial</Badge>}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {filtered.length === 0 && (
                  <div className="flex items-center gap-2 text-yellow-800 bg-yellow-50 border border-yellow-200 p-4 rounded">
                    <AlertCircle className="h-5 w-5" />
                    <span>No branches match your search. Try different filters.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  const About = () => (
    <>
      <Breadcrumbs page="about" />
      <section className="py-10 bg-white">
        <div className="w-full px-6 max-w-5xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Company Overview & Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                India Post is the backbone of the country{"'"}s communication network providing affordable and reliable
                postal, communication, banking, insurance, and retail services to citizens across India.
              </p>
              <p className="font-medium">Mission: Deliver trusted services that connect people and commerce.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-red-600" />
                Key Achievements & Milestones
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="bg-red-50 border border-red-100 p-4 rounded">1.5L+ post offices nationwide</div>
              <div className="bg-yellow-50 border border-yellow-100 p-4 rounded">Digitization of services</div>
              <div className="bg-green-50 border border-green-100 p-4 rounded">Financial inclusion via IPPB</div>
              <div className="bg-blue-50 border border-blue-100 p-4 rounded">Robust logistics nationwide</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-purple-600" />
                Organizational Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="list-disc pl-6 space-y-2">
                <li>Directorate: Policy and national operations</li>
                <li>Circles & Regions: State/zone administration</li>
                <li>Divisions: District-level operations</li>
                <li>Sub-offices & Branches: Frontline service delivery</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-600" />
                Vision & Values
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">Vision:</span> Inclusive, tech-enabled, customer-first postal network.
                </li>
                <li>
                  <span className="font-semibold">Values:</span> Integrity, Service Excellence, Transparency,
                  Innovation.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )

  const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const submit = () => {
      if (!name || !email || !message) return alert("Please fill all fields.")
      setSubmitted(true)
    }
    return (
      <>
        <Breadcrumbs page="contact" />
        <section className="py-10 bg-white">
          <div className="w-full px-6 max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-red-600" />
                  Regional Offices
                </CardTitle>
                <CardDescription>Addresses and office hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {offices.map((o, idx) => (
                  <div key={idx} className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r">
                    <div className="font-semibold text-gray-800">{o.name}</div>
                    <div className="text-gray-700">{o.address}</div>
                    <div className="text-gray-700">Phone: {o.phone}</div>
                    <div className="text-gray-700">Hours: {o.hours}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    Customer Care
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-700">
                  <div>1800-425-2555</div>
                  <div>1800-418-7777</div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    customercare@indiapost.gov.in
                  </div>
                  <div>Office Hours: Mon-Sat 9:00 AM - 6:00 PM</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ContactIcon className="h-5 w-5 text-blue-600" />
                    Contact Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                  <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Input
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="h-24"
                  />
                  <Button onClick={submit} className="w-full bg-red-600 hover:bg-red-700">
                    Send Message
                  </Button>
                  {submitted && (
                    <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 p-3 rounded">
                      <CheckCircle className="h-5 w-5" />
                      <span>Your message has been submitted. We will get back to you.</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </>
    )
  }

  const Employee = () => (
    <>
      <Breadcrumbs page="employee" />
      <section className="py-10 bg-white">
        <div className="w-full px-6 max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-red-600" />
                Employee Login
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Employee ID" />
              <Input placeholder="Password" type="password" />
              <Button className="w-full bg-red-600 hover:bg-red-700">Login</Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  HR Policies & Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Leave Policy", "Code of Conduct", "Transfer Guidelines", "Travel Policy"].map((doc, i) => (
                  <Button key={i} variant="ghost" className="justify-start w-full">
                    <FileDown className="h-4 w-4 mr-2" />
                    {doc}
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Career Development & Training
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <div>Leave Management Portal and workflow</div>
                <div>Skill upgrade programs and e-learning modules</div>
                <div>Leadership training and mentoring</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )

  const Feedback = () => {
    const [rating, setRating] = useState(0)
    const [comments, setComments] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [list, setList] = useState<{ rating: number; comments: string; name: string; status: string }[]>([
      { rating: 5, comments: "Speed Post delivered on time!", name: "Amit", status: "Resolved" },
      { rating: 4, comments: "Helpful staff at branch.", name: "Riya", status: "Acknowledged" },
    ])

    const submit = () => {
      if (!rating || !comments || !name || !email) return alert("Please complete all fields.")
      const statuses = ["Acknowledged", "In Review", "Resolved"]
      const status = statuses[Math.floor(Math.random() * statuses.length)]
      setList([{ rating, comments, name, status }, ...list])
      setRating(0)
      setComments("")
      setName("")
      setEmail("")
      alert("Feedback submitted. Thank you!")
    }

    return (
      <>
        <Breadcrumbs page="feedback" />
        <section className="py-10 bg-white">
          <div className="w-full px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-red-600" />
                  Feedback Form
                </CardTitle>
                <CardDescription>Rate our services and leave your comments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Rating</div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((r) => (
                      <Button
                        key={r}
                        type="button"
                        variant={r <= rating ? "default" : "outline"}
                        className={r <= rating ? "bg-yellow-500 hover:bg-yellow-600" : ""}
                        onClick={() => setRating(r)}
                        aria-label={`Rate ${r} star${r > 1 ? "s" : ""}`}
                      >
                        <Star className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </div>
                <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input placeholder="Your Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input
                  placeholder="Comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="h-24"
                />
                <div className="flex gap-3">
                  <Button onClick={submit} className="bg-red-600 hover:bg-red-700">
                    Submit Feedback
                  </Button>
                  <Button variant="outline" onClick={() => alert("Complaint registered. Ref: CMP" + Date.now())}>
                    Register Complaint
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {list.map((f, i) => (
                  <div key={i} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{f.name}</div>
                      <Badge>{f.status}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-600 mt-1">
                      {Array.from({ length: f.rating }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <div className="text-gray-700 mt-2">{f.comments}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </>
    )
  }

  const Forms = () => (
    <>
      <Breadcrumbs page="forms" />
      <section className="py-10 bg-white">
        <div className="w-full px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formsData.map((f, i) => (
              <Card key={i} className="hover:shadow-lg transition">
                <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 space-y-3">
                  <CardDescription className="text-gray-700">{f.description}</CardDescription>
                  <Button variant="outline" className="w-full bg-transparent" onClick={() => alert("Downloading...")}>
                    <FileDown className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )

  const Help = () => {
    const [q, setQ] = useState("")
    const filtered = faqs.filter((f) => f.question.toLowerCase().includes(q.toLowerCase()))
    return (
      <>
        <Breadcrumbs page="help" />
        <section className="py-10 bg-white">
          <div className="w-full px-6 max-w-6xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>Find answers to common queries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search FAQs..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <div className="space-y-3">
                  {filtered.map((f, i) => (
                    <div key={i} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r">
                      <div className="font-semibold">{f.question}</div>
                      <div className="text-gray-700 mt-1">{f.answer}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Service Guides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["Speed Post Guide", "Registered Post Guide", "Parcel Guide", "IPPB Banking Guide"].map((g, i) => (
                    <Button key={i} variant="ghost" className="justify-start w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      {g}
                    </Button>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How-to Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["Calculate Postage", "Find a Branch", "Track Shipment", "Register Feedback"].map((g, i) => (
                    <Button key={i} variant="ghost" className="justify-start w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      {g}
                    </Button>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["Speed Post Booking", "Using IPPB App", "Filing RTI"].map((v, i) => (
                    <Button key={i} variant="outline" className="justify-start w-full bg-transparent">
                      <Play className="h-4 w-4 mr-2" />
                      {v}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </>
    )
  }

  const POS = () => (
    <>
      <Breadcrumbs page="pos" />
      <section className="py-10 bg-white">
        <div className="w-full px-6 max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-purple-600" />
                Authorized Retailers Directory
              </CardTitle>
              <CardDescription>Retail points offering POS services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {retailers.map((r, i) => (
                <div key={i} className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-gray-800">{r.name}</div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {r.location}
                    </Badge>
                  </div>
                  <div className="text-gray-700 mt-1">Services: {r.services.join(", ")}</div>
                  <div className="text-gray-700">Contact: {r.contact}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>POS Services Offered</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <div>Consignment Booking (Letters, Parcels)</div>
                <div>Bill Payments & Basic Banking Assistance</div>
                <div>Philately Products and Applications</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Retailer Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Retailer ID" />
                <Input placeholder="Password" type="password" />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Login</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Commission Structure</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-1">
                <div>Booking Commission: upto 3% (service-wise)</div>
                <div>Bill Payment: ₹5-₹20 per transaction</div>
                <div>Incentives for monthly targets</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )

  const Recruitment = () => (
    <>
      <Breadcrumbs page="recruitment" />
      <section className="py-10 bg-white">
        <div className="w-full px-6 max-w-6xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Current Openings</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              {jobs.map((j, i) => (
                <div key={i} className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r">
                  <div className="font-semibold">{j.title}</div>
                  <div className="text-gray-700">Positions: {j.positions}</div>
                  <div className="text-gray-700">Deadline: {j.deadline}</div>
                  <Button className="mt-2" onClick={() => alert("How to apply...")}>
                    Apply Now
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              {jobs.map((j, i) => (
                <div key={i} className="bg-yellow-50 border border-yellow-100 p-3 rounded">
                  <span className="font-semibold">{j.title}:</span> {j.eligibility}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How to Apply</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <div>1. Check eligibility for the position</div>
                <div>2. Prepare documents (ID, certificates, photos)</div>
                <div>3. Submit online application and pay fee if applicable</div>
                <div>4. Download admit card and appear for test/interview</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Previous Year Papers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {previousPapers.map((p, i) => (
                  <Button key={i} variant="ghost" className="justify-start w-full">
                    <FileDown className="h-4 w-4 mr-2" />
                    {p.title}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Results & Admit Cards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {resultsAndAdmitCards.map((r, i) => (
                <Button key={i} variant="link" className="px-0">
                  {r.title}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )

  const RTI = () => (
    <>
      <Breadcrumbs page="rti" />
      <section className="py-10 bg-white">
        <div className="w-full px-6 max-w-5xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Right to Information — Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <p>The RTI Act empowers citizens to seek information from public authorities to promote transparency.</p>
              <ul className="list-disc pl-6">
                <li>Timelines and exemptions apply as per RTI Act.</li>
                <li>Designated PIOs/CPIOs process RTI applications.</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>RTI Application Process</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <div>1. Identify the public authority and subject</div>
                <div>2. Submit RTI application with fee (if applicable)</div>
                <div>3. Await response within prescribed timelines</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Appeal Procedures</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <div>1. First Appeal to Appellate Authority</div>
                <div>2. Second Appeal to Central Information Commission</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Transparency Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {transparencyReports.map((t, i) => (
                  <Button key={i} variant="ghost" className="justify-start w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    {t.period}
                  </Button>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Download RTI Forms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["RTI Application Form", "First Appeal Form", "Second Appeal Form"].map((f, i) => (
                  <Button key={i} variant="outline" className="justify-start w-full bg-transparent">
                    <FileDown className="h-4 w-4 mr-2" />
                    {f}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )

  const Tenders = () => (
    <>
      <Breadcrumbs page="tenders" />
      <section className="py-10 bg-white">
        <div className="w-full px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tenders.map((t, i) => (
              <Card key={i} className="hover:shadow-lg transition">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                  <CardTitle className="text-lg">{t.title}</CardTitle>
                  <CardDescription className="text-green-100">{t.reference}</CardDescription>
                </CardHeader>
                <CardContent className="p-5 space-y-2 text-gray-700">
                  <div>Estimated Value: {t.value}</div>
                  <div>Closing Date: {t.closing}</div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download Notice
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )

  const SitemapPage = () => {
    const links: { label: string; page: PageKey; icon: React.ElementType }[] = [
      { label: "Home", page: "home", icon: HomeIcon },
      { label: "Digital Services", page: "digital", icon: Globe },
      { label: "Track", page: "track", icon: Package },
      { label: "Postage", page: "postage", icon: Calculator },
      { label: "Locate", page: "locate", icon: MapPin },
      { label: "Recruitment", page: "recruitment", icon: Briefcase },
      { label: "Contact", page: "contact", icon: ContactIcon },
      { label: "About", page: "about", icon: Info },
      { label: "Forms", page: "forms", icon: FileText },
      { label: "Feedback", page: "feedback", icon: MessageSquare },
      { label: "RTI", page: "rti", icon: FileSearch },
      { label: "Tenders", page: "tenders", icon: FileText },
      { label: "Help", page: "help", icon: HelpCircle },
      { label: "Employee Corner", page: "employee", icon: User },
      { label: "POS", page: "pos", icon: ShoppingBag },
    ]
    return (
      <>
        <Breadcrumbs page="sitemap" />
        <section className="py-10 bg-white">
          <div className="w-full px-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sitemap className="h-5 w-5 text-red-600" />
                  Complete Website Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {links.map((l, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="justify-start bg-transparent"
                    onClick={() => go(l.page)}
                    aria-label={`Go to ${l.label}`}
                  >
                    <l.icon className="h-4 w-4 mr-2" />
                    {l.label}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </>
    )
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 ${
        fontSize === "small" ? "text-sm" : fontSize === "large" ? "text-lg" : "text-base"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white py-3 shadow-lg">
        <div className="w-full px-6 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-yellow-200 hover:bg-red-600/50 transition-all duration-200"
              onClick={() => alert("Sign In (demo)")}
            >
              Sign In
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-yellow-200 hover:bg-red-600/50 transition-all duration-200"
              onClick={() => alert("Register (demo)")}
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
              onClick={() => go("help")}
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
              <button className="flex items-center gap-4" onClick={() => go("home")} aria-label="India Post Home">
                <Image
                  src="/india-post-logo.png"
                  alt="India Post Logo"
                  width={50}
                  height={50}
                  className="drop-shadow-sm flex-shrink-0"
                />
                <div className="min-w-0 text-left">
                  <h1 className="text-xl font-bold text-red-700 whitespace-nowrap">India Post</h1>
                  <p className="text-xs text-gray-600 whitespace-nowrap">Department of Posts</p>
                  <p className="text-xs text-gray-500 whitespace-nowrap">
                    Ministry of Communications, Government of India
                  </p>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 flex-shrink-0">
              {mainNav.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  aria-current={currentPage === item.page}
                  className={`flex items-center space-x-1 text-sm hover:bg-red-50 hover:text-red-700 transition-all duration-200 px-2 py-2 rounded-lg ${
                    currentPage === item.page ? activeBtn : ""
                  }`}
                  onClick={() => go(item.page)}
                >
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </Button>
              ))}

              {/* More Menu */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className={`flex items-center space-x-1 text-sm hover:bg-red-50 hover:text-red-700 transition-all duration-200 px-2 py-2 rounded-lg ${
                    ["about", "forms", "feedback", "rti", "tenders", "sitemap", "help", "employee", "pos"].includes(
                      currentPage,
                    )
                      ? activeBtn
                      : ""
                  }`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">More</span>
                </Button>

                {mobileMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="py-2">
                      {moreNav.map((item, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className={`w-full justify-start text-sm hover:bg-red-50 hover:text-red-700 transition-all duration-200 px-4 py-2 rounded-none ${
                            currentPage === item.page ? "bg-red-50 text-red-700" : ""
                          }`}
                          onClick={() => go(item.page)}
                        >
                          {<item.icon className={`h-4 w-4 mr-3 ${item.color}`} />}
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
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-red-600" /> : <Menu className="h-6 w-6 text-red-600" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-6 border-t border-red-100">
              <div className="grid grid-cols-2 gap-3 mt-6">
                {mobileNav.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`justify-start text-sm hover:bg-red-50 hover:text-red-700 transition-all duration-200 ${
                      currentPage === item.page ? "bg-red-50 text-red-700" : ""
                    }`}
                    onClick={() => go(item.page)}
                  >
                    {<item.icon className={`h-4 w-4 mr-2 ${item.color}`} />}
                    {item.label}
                  </Button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content Switcher */}
      {currentPage === "home" && <Home />}
      {currentPage === "digital" && <DigitalServices />}
      {currentPage === "track" && <Track />}
      {currentPage === "postage" && <Postage />}
      {currentPage === "locate" && <Locate />}
      {currentPage === "recruitment" && <Recruitment />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "about" && <About />}
      {currentPage === "forms" && <Forms />}
      {currentPage === "feedback" && <Feedback />}
      {currentPage === "rti" && <RTI />}
      {currentPage === "tenders" && <Tenders />}
      {currentPage === "sitemap" && <SitemapPage />}
      {currentPage === "help" && <Help />}
      {currentPage === "employee" && <Employee />}
      {currentPage === "pos" && <POS />}

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
                  { label: "Digital Services", page: "digital" as PageKey },
                  { label: "Track & Trace", page: "track" as PageKey },
                  { label: "Calculate Postage", page: "postage" as PageKey },
                  { label: "Find Post Office", page: "locate" as PageKey },
                  { label: "Recruitment", page: "recruitment" as PageKey },
                ].map((item, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="text-gray-300 hover:text-yellow-300 hover:bg-red-800/30 p-0 h-auto transition-colors"
                      onClick={() => go(item.page)}
                    >
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-300">Important Links</h3>
              <ul className="space-y-3">
                {[
                  { label: "Forms", page: "forms" as PageKey },
                  { label: "RTI", page: "rti" as PageKey },
                  { label: "Tenders", page: "tenders" as PageKey },
                  { label: "Help", page: "help" as PageKey },
                  { label: "Employee Corner", page: "employee" as PageKey },
                ].map((item, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className="text-gray-300 hover:text-yellow-300 hover:bg-red-800/30 p-0 h-auto transition-colors"
                      onClick={() => go(item.page)}
                    >
                      {item.label}
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
            <p>© 2025 Department of Posts, Ministry of Communications, Government of India</p>
            <p>Last Updated: October 08, 2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
