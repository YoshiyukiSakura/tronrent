import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white">
      {/* Header */}
      <header className="py-6 px-8 flex justify-between items-center border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <Image
            src="/tron-logo.svg"
            alt="TronRent Logo"
            width={40}
            height={40}
            className="rounded-full bg-[#c23631]"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#c23631] to-[#f05e23] text-transparent bg-clip-text">
            TronRent
          </h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a
                href="#features"
                className="hover:text-[#f05e23] transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-[#f05e23] transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#f05e23] transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#f05e23] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-[#c23631] hover:bg-[#f05e23] transition-colors px-4 py-2 rounded-md font-medium">
          Connect Wallet
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 flex-grow">
        <h2 className="text-5xl font-bold mb-6 max-w-3xl">
          Rent Tron Energy Resources When You Need Them
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
          Save on transaction fees and optimize your DApp performance with
          on-demand Tron energy rentals
        </p>
        <div className="flex gap-4">
          <button className="bg-[#c23631] hover:bg-[#f05e23] transition-colors px-6 py-3 rounded-md font-medium text-lg">
            Rent Energy Now
          </button>
          <button className="border border-[#c23631] hover:border-[#f05e23] hover:text-[#f05e23] transition-colors px-6 py-3 rounded-md font-medium text-lg">
            Become a Provider
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 bg-[#0d1117]">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose TronRent?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]">
            <div className="w-12 h-12 bg-[#c23631] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Energy Access</h3>
            <p className="text-gray-300">
              Get immediate access to Tron energy resources without long-term
              staking commitments.
            </p>
          </div>
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]">
            <div className="w-12 h-12 bg-[#c23631] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Cost-Effective</h3>
            <p className="text-gray-300">
              Pay only for the energy you need, reducing overall transaction
              costs on the Tron network.
            </p>
          </div>
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]">
            <div className="w-12 h-12 bg-[#c23631] rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Trustless</h3>
            <p className="text-gray-300">
              Our smart contracts ensure secure, transparent, and trustless
              energy rental transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#161b22] p-8 rounded-lg border border-[#30363d] flex flex-col">
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <p className="text-gray-300 mb-6">
              For small transactions and testing
            </p>
            <div className="text-4xl font-bold mb-6">10 TRX</div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>1,000 Energy Units</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>24-hour rental period</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Basic support</span>
              </li>
            </ul>
            <button className="bg-[#c23631] hover:bg-[#f05e23] transition-colors px-4 py-2 rounded-md font-medium w-full">
              Rent Now
            </button>
          </div>
          <div className="bg-[#161b22] p-8 rounded-lg border border-[#c23631] flex flex-col relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#c23631] px-4 py-1 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Standard</h3>
            <p className="text-gray-300 mb-6">For regular DApp users</p>
            <div className="text-4xl font-bold mb-6">50 TRX</div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>10,000 Energy Units</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>3-day rental period</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Priority support</span>
              </li>
            </ul>
            <button className="bg-[#c23631] hover:bg-[#f05e23] transition-colors px-4 py-2 rounded-md font-medium w-full">
              Rent Now
            </button>
          </div>
          <div className="bg-[#161b22] p-8 rounded-lg border border-[#30363d] flex flex-col">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-300 mb-6">For businesses and power users</p>
            <div className="text-4xl font-bold mb-6">200 TRX</div>
            <ul className="mb-8 flex-grow">
              <li className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>50,000 Energy Units</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>7-day rental period</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>24/7 dedicated support</span>
              </li>
            </ul>
            <button className="bg-[#c23631] hover:bg-[#f05e23] transition-colors px-4 py-2 rounded-md font-medium w-full">
              Rent Now
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-8 bg-[#0d1117]">
        <h2 className="text-3xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]">
            <h3 className="text-xl font-bold mb-2">What is Tron Energy?</h3>
            <p className="text-gray-300">
              Tron Energy is a resource on the Tron blockchain that is consumed
              when executing smart contracts or performing certain transactions.
              Having sufficient energy reduces the TRX cost of transactions.
            </p>
          </div>
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]">
            <h3 className="text-xl font-bold mb-2">
              How does energy rental work?
            </h3>
            <p className="text-gray-300">
              Our platform connects users who need energy with providers who
              have staked TRX. Through our smart contracts, providers can
              delegate their energy to users for a specified period in exchange
              for a fee.
            </p>
          </div>
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]">
            <h3 className="text-xl font-bold mb-2">
              Is it safe to rent energy?
            </h3>
            <p className="text-gray-300">
              Yes, our platform uses secure smart contracts that have been
              audited by leading security firms. The rental process is trustless
              and transparent, with all transactions recorded on the Tron
              blockchain.
            </p>
          </div>
          <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d]">
            <h3 className="text-xl font-bold mb-2">
              How do I become an energy provider?
            </h3>
            <p className="text-gray-300">
              To become a provider, you need to stake TRX on the Tron network
              and register on our platform. Once registered, you can list your
              available energy for rental and earn passive income.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your Tron Experience?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join thousands of users saving on transaction costs with TronRent
        </p>
        <button className="bg-[#c23631] hover:bg-[#f05e23] transition-colors px-8 py-4 rounded-md font-medium text-lg">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 border-t border-[#30363d] bg-[#0d1117]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/tron-logo.svg"
                alt="TronRent Logo"
                width={30}
                height={30}
                className="rounded-full bg-[#c23631]"
              />
              <h3 className="text-xl font-bold">TronRent</h3>
            </div>
            <p className="text-gray-300">
              The premier platform for Tron energy rentals, helping users
              optimize their blockchain experience.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-[#f05e23]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-[#f05e23]"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-[#f05e23]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f05e23]">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f05e23]">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f05e23]">
                  Smart Contracts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f05e23]">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f05e23]">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f05e23]">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[#30363d] text-center text-gray-400">
          <p>&copy; 2024 TronRent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
