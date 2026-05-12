export default function Footer() {
    return (
        <footer className="bg-[#F8EFEF] py-12">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-8">

                <div className="max-w-md">
                    <h2 className="mb-4 text-2xl font-semibold">
                        <span className="text-[#6D5BA8]">Bu</span>
                        <span className="text-[#FF725E]">cheen</span>
                    </h2>

                    <p className="text-base text-[#999999]">
                        The most accurate and simplest time tracking for all of you.
                        and we have been serving for more than 4 years and have made
                        you happy.
                    </p>
                </div>

                <div className="flex gap-24 justify-center">
                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#FF725E]">
                            About Us
                        </h3>

                        <ul className="space-y-4 text-base text-[#999999]">
                            <li>
                                <a href="#">
                                    Our people
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Our categories
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Contact us
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Testimonial
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#FF725E]">
                            Product
                        </h3>

                        <ul className="space-y-4 text-base text-[#999999]">
                            <li>
                                <a href="#">
                                    Task Management
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Service
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Task Schedule
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#FF725E]">
                            Contact us
                        </h3>

                        <ul className="space-y-4 text-base text-[#999999]">

                            <li className="flex items-start gap-4">
                                <span>📞</span>
                                <span>(021) 3258 4930</span>
                            </li>

                            <li className="flex items-start gap-4">
                                <span>✉️</span>
                                <span>Pokan@Hola.com</span>
                            </li>

                            <li className="flex items-start gap-4">
                                <span>📍</span>
                                <span>
                                    Sukabumi, Jawa Barat
                                    <br />
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