export function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12.5px] text-gray-500 font-medium tracking-wide">
          © {new Date().getFullYear()} Brendan Jay R. Condes.
        </p>
        <p className="text-[12px] text-gray-500">Cebu, Philippines</p>
      </div>
    </footer>
  )
}