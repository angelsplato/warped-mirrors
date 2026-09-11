function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="w-full py-8 sm:py-12 bg-zinc-950 border-t border-zinc-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">warpedmirrors</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
              A data company building the foundations for useful AI in Africa.
            </p>
          </div>
          <a href="#product" className="text-sm text-zinc-400 transition-colors hover:text-white">explore what we are building</a>
        </div>
        <p className="mt-8 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          © {currentYear} warpedmirrors. all rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
