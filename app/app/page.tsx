import Navbar from "@/components/Navbar";
import React from "react";
import CardOption from "@/components/CardOption";
import { CardType } from "@/types/CardType";

const cardOptions: CardType[] = [
  {
    title: "Debit Card", // Add your card images to public/images/
    features: [
      "Instant payments and withdrawals",
      "No annual fees",
      "Worldwide acceptance",
      "Secure transactions with OTP",
      "Real-time transaction alerts",
    ],
    route: "/debitcard",
  },
  {
    title: "Credit Card",
    features: [
      "High credit limits",
      "Cashback rewards",
      "Interest-free period",
      "EMI conversion facility",
      "Premium lifestyle benefits",
    ],
    route: "/creditcard",
  },
  {
    title: "FD Credit Card",
    features: [
      "Credit limit backed by FD",
      "Lower interest rates",
      "No income proof required",
      "Build credit history",
      "Flexible FD tenure options",
    ],
    route: "/fd-creditcard",
  },
];

const page = () => {
  return (
    <main>
      <Navbar pageType="app" />
      <div className="container mx-auto px-4">
        <div className="pt-24 pb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Choose Your Card
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardOptions.map((card, index) => (
              <CardOption key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
