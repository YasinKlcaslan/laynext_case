export default function Navbar() {
    return (
        <nav className="bg-neutral-primary fixed top-0 start-0 z-20 w-full border">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-8">
                <a className="flex items-center">
                    <span className="self-center text-3xl font-bold text-heading text-[#776bb3]">
                        Bu
                    </span>
                    <span className="self-center text-3xl font-bold text-heading text-[#FF725E]">
                        cheen
                    </span>
                </a>

                <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">

                    <button type="button" className="rounded-xl border border-[#FF725E] bg-white px-5 py-3 text-base leading-5 text-[#FF725E] transition-all duration-300 hover:bg-[#FF725E] hover:text-white">
                        Sign In
                    </button>

                    <button type="button" className="rounded-xl border border-[#FF725E] bg-[#FF725E] px-5 py-3 text-base leading-5 text-white transition-all duration-300 hover:bg-white hover:text-[#FF725E]">
                        Sign Up
                    </button>

                </div>

                <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
                    <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0">
                        <li>
                            <a href="#" className="block px-3 py-2 text-[#FF725E] md:p-0">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#" className="block px-3 py-2 text-[#999999] md:p-0">
                                Service
                            </a>
                        </li>

                        <li>
                            <a href="#" className="block px-3 py-2 text-[#999999] md:p-0">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#" className="block px-3 py-2 text-[#999999] md:p-0">
                                Pricing
                            </a>
                        </li>

                        <li>
                            <a href="#" className="block px-3 py-2 text-[#999999] md:p-0">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}