function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="w-full py-8 sm:py-12 md:py-16 bg-zinc-950 border-t border-zinc-800" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-3">warped mirrors</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-sm">
              intelligent document processing solutions that transform how teams work with data
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                𝕏
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                in
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors">
                ⚡
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">products</h4>
            <ul className="space-y-2">
              <li><a href="#product-scanwise" className="text-sm text-zinc-400 hover:text-white transition-colors">scanwise</a></li>
              <li><a href="#product-knowhub" className="text-sm text-zinc-400 hover:text-white transition-colors">knowhub</a></li>
              <li><a href="#product-datadash" className="text-sm text-zinc-400 hover:text-white transition-colors">datadash</a></li>
              <li><a href="#product-formflow" className="text-sm text-zinc-400 hover:text-white transition-colors">formflow</a></li>
              <li><a href="#product-dataengine" className="text-sm text-zinc-400 hover:text-white transition-colors">dataengine</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">industries</h4>
            <ul className="space-y-2">
              <li><a href="#industry-law" className="text-sm text-zinc-400 hover:text-white transition-colors">law</a></li>
              <li><a href="#industry-government" className="text-sm text-zinc-400 hover:text-white transition-colors">government</a></li>
              <li><a href="#industry-realestate" className="text-sm text-zinc-400 hover:text-white transition-colors">real estate</a></li>
              <li><a href="#industry-finance" className="text-sm text-zinc-400 hover:text-white transition-colors">finance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">about</a></li>
              <li><a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">contact us</a></li>
              <li><a href="#security" className="text-sm text-zinc-400 hover:text-white transition-colors">security</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-500">
              &copy; {currentYear} warped mirrors. all rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-400 transition-colors">privacy policy</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-400 transition-colors">terms of service</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-400 transition-colors">cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
