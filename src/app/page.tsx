"use client";
import Image from "next/image";
import WalletButton from "@/components/WalletButton";
import { useEffect, useState } from "react";
import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { toaster } from "@/components/ui/toaster";
import {
  Heading,
  Link,
  Text,
  VStack,
  Button,
  Input,
  Flex,
  Box,
  Container,
  SimpleGrid,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
// import { InfoIcon, SettingsIcon } from "@chakra-ui/icons";

export default function Home() {
  const { address, connect } = useWallet();
  const [amount, setAmount] = useState(65000);
  const [inputAddress, setInputAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userEditFlag, setUserEditFlag] = useState(false);
  const [step, setStep] = useState("idle");

  useEffect(() => {
    if (address && inputAddress === "" && !userEditFlag) {
      setInputAddress(address);
    }
  }, [inputAddress, address]);

  const handleAmountChange = (value: number) => {
    if (value > 0) {
      setAmount(value);
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDir="column"
      bgGradient="linear(to-b, #0d1117, #161b22)"
      color="white"
    >
      {/* Header */}
      <Box
        as="header"
        py={6}
        px={8}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px"
        borderColor="#30363d"
      >
        <Flex alignItems="center" gap={2}>
          <Image
            src="/tron-logo.svg"
            alt="TronRent Logo"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <Heading
            as="h1"
            fontSize="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, #c23631, #f05e23)"
            bgClip="text"
          >
            TronRent
          </Heading>
        </Flex>
        <Box as="nav"></Box>
        <WalletButton />
      </Box>

      {/* Pricing Section */}
      <Box as="section" py={20} px={8}>
        <Heading as="h2" fontSize="3xl" textAlign="center" mb={16}>
          THE LOWEST PRICES FOR TRON ENERGY RENTAL ACROSS THE ENTIRE NETWORK!
        </Heading>
        <Container maxW="6xl">
          <Box
            bg="#161b22"
            p={8}
            borderRadius="lg"
            border="1px"
            borderColor="#30363d"
          >
            <Heading as="h3" fontSize="xl" mb={2}>
              Get Energy
            </Heading>
            <Text color="gray.300" mb={6}>
              Use TRON energy for your transactions to get 0 charge of TRX gas
              fees
            </Text>

            <Box mb={6}>
              <Flex alignItems="center" justifyContent="space-between" mb={2}>
                <HStack gap={1}>
                  <Text fontSize="sm" color="gray.300">
                    Energy target address
                  </Text>
                  {/* <Tooltip content="Info about energy target">
                    <Text>1</Text>
                  </Tooltip> */}
                </HStack>
              </Flex>
              <Flex gap={2}>
                <Input
                  value={inputAddress}
                  onChange={(e) => {
                    setUserEditFlag(true);
                    setInputAddress(e.target.value);
                  }}
                  placeholder="Enter TRON address"
                  bg="#1c2128"
                  border="1px"
                  borderColor="#30363d"
                  _focus={{
                    outline: "none",
                    ring: "1px",
                    ringColor: "#f05e23",
                  }}
                />
                <Button
                  onClick={() => connect()}
                  variant="outline"
                  borderColor="#30363d"
                  p={2}
                >
                  {/* <Icon viewBox="0 0 20 20" boxSize={5}>
                    <path
                      fill="currentColor"
                      d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
                    />
                    <path
                      fill="currentColor"
                      d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
                    />
                  </Icon> */}
                </Button>
              </Flex>
            </Box>

            <Box mb={6}>
              <Flex alignItems="center" justifyContent="space-between" mb={2}>
                <HStack gap={1}>
                  <Text fontSize="sm" color="gray.300">
                    Amount
                  </Text>
                  {/* <Tooltip content="Info about amount">
                    <Text>1</Text>
                  </Tooltip> */}
                </HStack>
                <HStack>
                  <Text fontSize="sm" color="gray.300">
                    Advance
                  </Text>
                  {/* <SettingsIcon color="gray.400" /> */}
                </HStack>
              </Flex>
              <Input
                value={amount}
                onChange={(e) => handleAmountChange(Number(e.target.value))}
                mb={2}
                bg="#1c2128"
                border="1px"
                borderColor="#30363d"
                _focus={{
                  outline: "none",
                  ring: "1px",
                  ringColor: "#f05e23",
                }}
              />
              <HStack gap={2} mb={4}>
                <Button
                  onClick={() => handleAmountChange(65000)}
                  size="sm"
                  variant="outline"
                  borderColor="#30363d"
                  bg="#1c2128"
                >
                  USDT Tsf
                </Button>
                <Button
                  onClick={() => handleAmountChange(130000)}
                  size="sm"
                  variant="outline"
                  borderColor="#30363d"
                  bg="#1c2128"
                >
                  Double
                </Button>
                <Button
                  onClick={() => handleAmountChange(100000)}
                  size="sm"
                  variant="outline"
                  borderColor="#30363d"
                  bg="#1c2128"
                >
                  3x
                </Button>
                <Button
                  onClick={() => handleAmountChange(200000)}
                  size="sm"
                  variant="outline"
                  borderColor="#30363d"
                  bg="#1c2128"
                >
                  4x
                </Button>
                <Button
                  onClick={() => handleAmountChange(650000)}
                  size="sm"
                  variant="outline"
                  borderColor="#30363d"
                  bg="#1c2128"
                >
                  10x
                </Button>
              </HStack>
            </Box>

            <Flex alignItems="center" justifyContent="space-between" mb={6}>
              <HStack>
                <Text fontSize="sm" color="gray.300">
                  Saving TRX by renting energy
                </Text>
                {/* <Tooltip content="Info about savings">
                  <Text>1</Text>
                </Tooltip> */}
              </HStack>
              <Box>
                <Text
                  as="span"
                  color="gray.400"
                  textDecoration="line-through"
                  mr={2}
                >
                  {(amount / 5000).toFixed(2)} TRX
                </Text>
                <Text as="span" color="green.500" fontWeight="bold">
                  {((amount / 65000) * 2.9).toFixed(2)} TRX
                </Text>
              </Box>
            </Flex>

            <Button
              onClick={async () => {
                try {
                  setIsLoading(true);
                  setStep("checking");

                  if (amount % 65000 !== 0) {
                    toaster.create({
                      type: "info",
                      description: "Amount must be a multiple of 65000",
                    });
                    return;
                  }

                  if (!inputAddress) {
                    toaster.create({
                      type: "info",
                      description: "Please input the address needs Energy",
                    });
                    return;
                  }

                  if (window?.tronLink?.ready) {
                    const tronweb = window.tronLink.tronWeb;
                    toaster.create({
                      type: "info",
                      description: "Building transaction...",
                      duration: 99000,
                    });
                    setStep("building");

                    const tx = await tronweb.transactionBuilder.sendTrx(
                      `TEFo6e9GLKaVD6ac42dgKnSU2m6Rnfx8uo`,
                      Number(((amount / 65000) * 2.9).toFixed(2)) * 1000000,
                      inputAddress ?? ""
                    );
                    console.log("tx:", tx);

                    setStep("signing");
                    toaster.create({
                      type: "info",
                      description: "Signing transaction...",
                      duration: 99000,
                    });
                    const signedTx = await tronweb.trx.sign(tx);
                    console.log("sign", signedTx);

                    setStep("sending");
                    toaster.create({
                      type: "info",
                      description: "Sending transaction...",
                      duration: 99000,
                    });
                    const result = await tronweb.trx.sendRawTransaction(
                      signedTx
                    );

                    if (result.result) {
                      toaster.create({
                        type: "success",
                        description: "Transaction sent successfully",
                        duration: 99000,
                      });

                      try {
                        setStep("sending Energy");
                        toaster.create({
                          type: "info",
                          description: "Sending Energy to your account...",
                          duration: 99000,
                        });
                        const apiResponse = await fetch(
                          "https://sjo.fee.xhain.io/php/energy.php",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              hash: result.txid,
                              targetAddress: inputAddress,
                            }),
                          }
                        );

                        if (!apiResponse.ok) {
                          console.error("failed:", await apiResponse.text());
                        } else {
                          toaster.create({
                            type: "success",
                            description: "Energy sent successfully",
                            duration: 99000,
                          });
                          console.log("success");
                        }
                      } catch (apiError) {
                        console.error("Error notifying API:", apiError);
                      }
                    }
                    setStep("completed");
                  }
                } catch (e) {
                  console.log(e);
                  toaster.create({
                    type: "error",
                    description: e?.toString() ?? "Error sending transaction",
                  });
                  setStep("error");
                } finally {
                  setIsLoading(false);
                }
              }}
              loading={isLoading}
              loadingText={step}
              bg={isLoading ? "#c23631" : "#c23631"}
              _hover={{ bg: "#f05e23" }}
              position="relative"
              w="full"
              h={12}
              transition="colors"
              disabled={isLoading}
            >
              {step === "completed" ? "completed" : "Rent Energy for 1 hour"}
              <Badge
                position="absolute"
                top="-4"
                right="0"
                bg="yellow.400"
                color="black"
                px={3}
                py={1}
                borderRadius="md"
                fontWeight="bold"
                transform="rotate(6deg)"
              >
                SAVE{" "}
                {(
                  ((amount / 5000 - (amount / 65000) * 2.9) / (amount / 5000)) *
                  100
                ).toFixed(0)}
                %
              </Badge>
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        py={10}
        px={8}
        borderTopWidth="1px"
        borderColor="#30363d"
        bg="#0d1117"
      >
        <Container maxW="6xl" mx="auto">
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
            <Box>
              <Flex alignItems="center" gap={2} mb={4}>
                <Image
                  src="/tron-logo.svg"
                  alt="TronRent Logo"
                  width={30}
                  height={30}
                  className="rounded-full bg-[#c23631]"
                />
                <Heading as="h3" fontSize="xl" fontWeight="bold">
                  TronRent
                </Heading>
              </Flex>
              <Text color="gray.300">
                The premier platform for Tron energy rentals, helping users
                optimize their blockchain experience.
              </Text>
            </Box>

            <Box>
              <Heading as="h4" fontWeight="bold" mb={4}>
                Quick Links
              </Heading>
              <VStack align="flex-start" gap={2}>
                <Link
                  href="#features"
                  color="gray.300"
                  _hover={{ color: "#f05e23" }}
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  color="gray.300"
                  _hover={{ color: "#f05e23" }}
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  color="gray.300"
                  _hover={{ color: "#f05e23" }}
                >
                  FAQ
                </Link>
              </VStack>
            </Box>

            <Box>
              <Heading as="h4" fontWeight="bold" mb={4}>
                Resources
              </Heading>
              <VStack align="flex-start" gap={2}>
                <Link href="#" color="gray.300" _hover={{ color: "#f05e23" }}>
                  Documentation
                </Link>
                <Link href="#" color="gray.300" _hover={{ color: "#f05e23" }}>
                  API
                </Link>
                <Link href="#" color="gray.300" _hover={{ color: "#f05e23" }}>
                  Smart Contracts
                </Link>
              </VStack>
            </Box>

            <Box>
              <Heading as="h4" fontWeight="bold" mb={4}>
                Connect
              </Heading>
              <VStack align="flex-start" gap={2}>
                <Link href="#" color="gray.300" _hover={{ color: "#f05e23" }}>
                  Twitter
                </Link>
                <Link href="#" color="gray.300" _hover={{ color: "#f05e23" }}>
                  Telegram
                </Link>
                <Link href="#" color="gray.300" _hover={{ color: "#f05e23" }}>
                  Discord
                </Link>
              </VStack>
            </Box>
          </SimpleGrid>

          <Box
            mt={10}
            pt={6}
            borderTopWidth="1px"
            borderColor="#30363d"
            textAlign="center"
          >
            <Text color="gray.400">
              &copy; 2025 TronRent. All rights reserved.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
