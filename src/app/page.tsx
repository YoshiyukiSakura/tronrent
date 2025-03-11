"use client";
import Image from "next/image";
import WalletButton from "@/components/WalletButton";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(65000);
  const [duration, setDuration] = useState("1h");
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountChange = (value) => {
    if (value > 0) {
      setAmount(value);
    }
  };

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
          {/* <ul className="flex gap-6">
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
          </ul> */}
        </nav>
        <WalletButton />
      </header>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          ¡NUESTRA PLATAFORMA DE ALQUILER DE ENERGÍA TRON CON LOS PRECIOS MÁS
          BAJOS DE TODA LA RED!
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#161b22] p-8 rounded-lg border border-[#30363d] flex flex-col">
            <h3 className="text-xl font-bold mb-2">Buy Energy</h3>
            <p className="text-gray-300 mb-6">
              Rent TRON energy for your transactions
            </p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center text-sm text-gray-300">
                  Resource target address
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter TRON address"
                  className="w-full px-3 py-2 bg-[#1c2128] border border-[#30363d] rounded-md text-white focus:outline-none focus:ring-1 focus:ring-[#f05e23]"
                />
                <button className="bg-transparent border border-[#30363d] px-3 py-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center text-sm text-gray-300">
                  Amount
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <div className="flex items-center">
                  <span className="text-sm text-gray-300">Advance</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <input
                onChange={(e) => handleAmountChange(e.target.value)}
                type="text"
                value={amount}
                className="w-full px-3 py-2 bg-[#1c2128] border border-[#30363d] rounded-md text-white focus:outline-none focus:ring-1 focus:ring-[#f05e23] mb-2"
              />
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => handleAmountChange(65000)}
                  className="cursor-pointer bg-[#1c2128] border border-[#30363d] px-3 py-1 rounded-md text-sm text-white"
                >
                  USDT Trf
                </button>
                <button
                  onClick={() => handleAmountChange(130000)}
                  className="cursor-pointer bg-[#1c2128] border border-[#30363d] px-3 py-1 rounded-md text-sm text-white"
                >
                  Double
                </button>
                <button
                  onClick={() => handleAmountChange(100000)}
                  className="cursor-pointer bg-[#1c2128] border border-[#30363d] px-3 py-1 rounded-md text-sm text-white"
                >
                  3x
                </button>
                <button
                  onClick={() => handleAmountChange(200000)}
                  className="cursor-pointer bg-[#1c2128] border border-[#30363d] px-3 py-1 rounded-md text-sm text-white"
                >
                  4x
                </button>
                <button
                  onClick={() => handleAmountChange(650000)}
                  className="cursor-pointer bg-[#1c2128] border border-[#30363d] px-3 py-1 rounded-md text-sm text-white"
                >
                  10x
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="text-sm text-gray-300 mr-2">
                  Saving TRX by renting energy
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <span className="text-gray-400 line-through mr-2">
                  {(amount / 5000).toFixed(2)} TRX
                </span>
                <span className="text-green-500 font-bold">
                  {((amount / 65000) * 2.9).toFixed(2)} TRX
                </span>
              </div>
            </div>

            <button className="bg-[#4ade80] hover:bg-[#22c55e] transition-colors px-4 py-3 rounded-md font-medium w-full text-black relative">
              Rent Energy for 1 hour
              <div className="absolute -top-4 right-0 bg-yellow-400 px-3 py-1 rounded-md text-black font-bold transform rotate-6">
                SAVE{" "}
                {(
                  ((amount / 5000 - (amount / 65000) * 2.9) / (amount / 5000)) *
                  100
                ).toFixed(0)}
                %
              </div>
            </button>
          </div>
        </div>
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
