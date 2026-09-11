import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  ChevronDown,
  ArrowRight,
  Scan,
  BookOpen,
  Gauge,
  FileSpreadsheet,
  Database,
  Scale,
  Building2,
  Home,
  DollarSign,
  FileText,
  Mail,
  Shield,
  Menu
} from "lucide-react"

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-semibold tracking-tight text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            warpedmirrors
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1 bg-transparent border-0 outline-none">
              Products
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 border-zinc-800 w-[500px] p-4">
              <div className="grid grid-cols-2 gap-3">
                <DropdownMenuItem asChild>
                  <a href="#product-scanwise" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex flex-col items-start gap-1 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Scan className="h-4 w-4" />
                      <span className="font-medium">ScanWise</span>
                    </div>
                    <span className="text-xs text-zinc-500">document intelligence & text extraction</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#product-knowhub" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex flex-col items-start gap-1 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span className="font-medium">KnowHub</span>
                    </div>
                    <span className="text-xs text-zinc-500">ai knowledge base</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#product-datadash" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex flex-col items-start gap-1 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4" />
                      <span className="font-medium">DataDash</span>
                    </div>
                    <span className="text-xs text-zinc-500">analytics & insights engine</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#product-formflow" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex flex-col items-start gap-1 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="h-4 w-4" />
                      <span className="font-medium">FormFlow</span>
                    </div>
                    <span className="text-xs text-zinc-500">process digitization & automation</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#product-dataengine" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex flex-col items-start gap-1 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      <span className="font-medium">DataEngine</span>
                    </div>
                    <span className="text-xs text-zinc-500">custom ai model training</span>
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1 bg-transparent border-0 outline-none">
              Industries
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 border-zinc-800 w-[400px] p-4">
              <div className="grid grid-cols-2 gap-3">
                <DropdownMenuItem asChild>
                  <a href="#industry-law" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex flex-col items-start gap-1 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4" />
                      <span className="font-medium">Law Firms</span>
                    </div>
                    <span className="text-xs text-zinc-500">case management & contracts</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#industry-finance" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex flex-col items-start gap-1 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-medium">Finance & Banking</span>
                    </div>
                    <span className="text-xs text-zinc-500">loans & compliance</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#industry-realestate" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex flex-col items-start gap-1 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      <span className="font-medium">Real Estate</span>
                    </div>
                    <span className="text-xs text-zinc-500">property & portfolio management</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#industry-government" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex flex-col items-start gap-1 p-3 rounded-md">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">Government</span>
                    </div>
                    <span className="text-xs text-zinc-500">permits & citizen services</span>
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1 bg-transparent border-0 outline-none">
              Resources
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900 border-zinc-800 w-[300px] p-4">
              <div className="flex flex-col gap-2">
                <DropdownMenuItem asChild>
                  <a href="#about" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex items-center gap-2 p-3 rounded-md">
                    <FileText className="h-4 w-4" />
                    <span className="font-medium">About</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#contact" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex items-center gap-2 p-3 rounded-md">
                    <Mail className="h-4 w-4" />
                    <span className="font-medium">Contact Us</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#security" className="text-zinc-300 hover:text-white hover:bg-zinc-800 cursor-pointer flex items-center gap-2 p-3 rounded-md">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium">Security</span>
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden md:flex bg-white hover:bg-zinc-100 text-zinc-950 items-center gap-2" asChild>
            <a href="#contact">
              get in touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-800 w-[300px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <SheetHeader>
                <SheetTitle className="text-white text-left">menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {/* Products */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">products</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#product-scanwise" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <Scan className="h-4 w-4" />
                      scanwise
                    </a>
                    <a href="#product-knowhub" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <BookOpen className="h-4 w-4" />
                      knowhub
                    </a>
                    <a href="#product-datadash" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <Gauge className="h-4 w-4" />
                      datadash
                    </a>
                    <a href="#product-formflow" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <FileSpreadsheet className="h-4 w-4" />
                      formflow
                    </a>
                    <a href="#product-dataengine" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <Database className="h-4 w-4" />
                      dataengine
                    </a>
                  </div>
                </div>

                {/* Industries */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">industries</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#industry-law" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <Scale className="h-4 w-4" />
                      law firms
                    </a>
                    <a href="#industry-finance" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <DollarSign className="h-4 w-4" />
                      finance & banking
                    </a>
                    <a href="#industry-realestate" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <Home className="h-4 w-4" />
                      real estate
                    </a>
                    <a href="#industry-government" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <Building2 className="h-4 w-4" />
                      government
                    </a>
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">resources</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#about" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <FileText className="h-4 w-4" />
                      about
                    </a>
                    <a href="#contact" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <Mail className="h-4 w-4" />
                      contact us
                    </a>
                    <a href="#security" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white py-2">
                      <Shield className="h-4 w-4" />
                      security
                    </a>
                  </div>
                </div>

                {/* Mobile CTA */}
                <Button className="w-full bg-white hover:bg-zinc-100 text-zinc-950 flex items-center gap-2 mt-4" asChild>
                  <a href="#contact">
                    get in touch
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
