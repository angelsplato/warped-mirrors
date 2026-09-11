function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#09090b] py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
        <div>
          <a href="#" className="text-xl font-semibold tracking-[-0.05em] text-white">warpedmirrors</a>
          <p className="mt-2 text-sm text-zinc-500">Data groundwork for the AI age.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500">
          <a className="flex min-h-11 items-center transition hover:text-white" href="#product">Product</a>
          <a className="flex min-h-11 items-center transition hover:text-white" href="#approach">Approach</a>
          <a className="flex min-h-11 items-center transition hover:text-white" href="mailto:hello@warpedmirrors.com">Email</a>
          <span>© {currentYear} warpedmirrors</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
