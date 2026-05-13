import {
    FiPhone,
    FiMail,
    FiMapPin,
} from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-[#fef7f6] py-12">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-8">

                <div className="max-w-md">
                    <h2 className="mb-4 text-2xl font-semibold">
                        <span className="text-[#6D5BA8]">Bu</span>
                        <span className="text-[#FF725E]">cheen</span>
                    </h2>

                    <p className="text-base text-[#959393]">
                        The most accurate and simplest time tracking for all of you and we have been serving for more than 4 years and have made you happy.
                    </p>
                </div>

                <div className="flex gap-24 justify-center">
                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#FF725E]">
                            About Us
                        </h3>

                        <ul className="space-y-4 text-base text-[#959393] ">
                            <li>
                                <a href="/" className="hover:text-black">
                                    Our people
                                </a>
                            </li>

                            <li>
                                <a href="/" className="hover:text-black">
                                    Our categories
                                </a>
                            </li>

                            <li>
                                <a href="/" className="hover:text-black">
                                    Contact us
                                </a>
                            </li>

                            <li>
                                <a href="/" className="hover:text-black">
                                    Testimonial
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#FF725E]">
                            Product
                        </h3>

                        <ul className="space-y-4 text-base text-[#959393]">
                            <li>
                                <a href="/" className="hover:text-black">
                                    Task Management
                                </a>
                            </li>

                            <li>
                                <a href="/" className="hover:text-black">
                                    Service
                                </a>
                            </li>

                            <li>
                                <a href="/" className="hover:text-black">
                                    Task Schedule
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#FF725E]">
                            Contact us
                        </h3>

                        <ul className="space-y-4 text-base text-[#959393]">

                            <li className="flex items-start gap-4">
                                <FiPhone className="text-xl mt-1 text-[#959393]"/>
                                <span>(021) 3258 4930</span>
                            </li>

                            <li className="flex items-start gap-4">
                                <FiMail className="text-xl mt-1 text-[#959393]"/>
                                <span>Pokan@Hola.com</span>
                            </li>

                            <li className="flex items-start gap-4">
                                <FiMapPin className="text-xl mt-1 text-[#959393]"/>
                                <span>
                                    Sukabumi, Jawa Barat
                                    <br/>
                                    Indonesia, IDN
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}