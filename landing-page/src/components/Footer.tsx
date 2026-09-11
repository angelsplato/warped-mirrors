function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#09090b] py-10">
      <div className="page-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#" className="inline-flex min-h-11 items-center" aria-label="warpedmirrors home">
            <img
              src="/warpedmirrors-logo.svg"
              alt="warpedmirrors"
              className="h-8 w-auto"
            />
          </a>
          <p className="type-body mt-2 text-zinc-400">Data groundwork for the AI age.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.9375rem] text-zinc-400">
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
