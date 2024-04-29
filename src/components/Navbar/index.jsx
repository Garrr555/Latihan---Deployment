export default function Nav() {
  return (
    <nav className="justify-between py-4 xl:px-10 md:px-10 flex flex-col md:flex-row items-center fixed w-full bg-white shadow-lg">
      <div className="mr-5 md:text-left">
        <p className="text-2xl">
          <span className="text-[#37517E] font-bold">Simple</span> Header
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        <ul className="flex gap-4 md:gap-3">
          <li>
            <a
              href="#"
              className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
