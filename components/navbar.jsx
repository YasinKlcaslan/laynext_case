export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-50 h-32 w-full bg-white">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">

                <a href="/" className="flex items-center">
                    <span className="text-3xl font-bold text-[#776BB3]">
                        Bu
                    </span>

                    <span className="text-3xl font-bold text-[#FF725E]">
                        cheen
                    </span>
                </a>

                <div className="hidden md:flex">
                    <ul className="flex items-center gap-10 font-medium">
                        <li>
                            <a href="/" className="text-[#FF725E] transition hover:text-[#776BB3]">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="/" className="text-[#777777] transition hover:text-black">
                                Service
                            </a>
                        </li>

                        <li>
                            <a href="/" className="text-[#777777] transition hover:text-black">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="/" className="text-[#777777] transition hover:text-black">
                                Pricing
                            </a>
                        </li>

                        <li>
                            <a href="/" className="text-[#777777] transition hover:text-black">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <button className="rounded-xl border border-[#FF725E] bg-white px-5 py-3 text-base font-medium text-[#FF725E] transition-all duration-300 hover:bg-[#FF725E] hover:text-white">
                        Sign In
                    </button>

                    <button className="rounded-xl bg-[#FF725E] px-5 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#FF725E] hover: border border-[#FF725E]">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}