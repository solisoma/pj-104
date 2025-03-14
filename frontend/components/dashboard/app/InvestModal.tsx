import { investmentPlans } from "@/utils/info";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { LogOutActionType, User } from "../type";
import { create_plan } from "@/api/app";

export default function InvestModal({
  details,
  closeModal,
  userDetail,
  onPurchase,
}: LogOutActionType & {
  details: (typeof investmentPlans)[0];
  userDetail: User;
}) {
  const [amount, setAmount] = useState("");

  const handleSubscribe = async () => {
    if (Number(amount) > userDetail.plan_balance) {
      toast.info("Insufficient balance. Please top up your account.");
      return;
    }
    if (Number(amount) <= 0) {
      toast.info("Please enter a valid subscription amount.");
      return;
    }
    if (Number(amount) > details.maxDeposit) {
      toast.info(
        `Subscription amount shouldn't be greater than max deposit! $${details.maxDeposit}.`
      );
      return;
    }
    if (Number(amount) < details.minDeposit) {
      toast.info(
        `Subscription amount shouldn't be less than min deposit! $${details.minDeposit}.`
      );
      return;
    }

    //invest
    const send = await create_plan({
      roi: parseInt(details.interestRate!),
      amount: Number(amount),
      duration: details.termDays,
    });

    if (send) {
      toast.success(`Subscription successful! You subscribed with $${amount}.`);
      onPurchase!();
      closeModal!();
      return;
    }
    toast.error(`Subscription failed! Please try again.`);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-3xl font-semibold text-white">
          Subscribe to a Plan
        </h2>
        <p className="text-[#A0AEC0]">
          Enter the amount you wish to subscribe with. Ensure you have enough
          balance in your account.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl text-bold font-medium text-white">Plan Name:</h3>
        <p className="text-[#A0AEC0]] font-semibold">{details.plan}</p>
      </div>

      <div className="mb-2">
        <label htmlFor="amount" className="block text-[#A0AEC0] mb-2">
          Subscription Amount (USD):
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="outline-none w-full p-2 border border-gray-300 rounded-md text-gray-700"
        />
      </div>

      <div className="flex justify-end mb-6">
        <span className="text-[#A0AEC0] font-semibold">
          ${userDetail.plan_balance}
        </span>
      </div>

      <button
        onClick={handleSubscribe}
        className="w-full py-3 bg-background2 text-white font-semibold rounded-md hover:bg-[#2563EB] transition duration-200"
      >
        Subscribe
      </button>
    </div>
  );
}
