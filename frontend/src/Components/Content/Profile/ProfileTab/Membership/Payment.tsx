/* eslint-disable @typescript-eslint/no-explicit-any */
// PaymentScreen.tsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaypal, FaGooglePay, FaApplePay, FaAmazonPay } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import Header from "../../../Home/Header/Header";

type LocationState = {
  membershipId: string;
  membershipName: string;
  membershipPrice: string;
};

const PaymentScreen: React.FC = () => {
  const location = useLocation();

  const { membershipName, membershipPrice } = location.state as LocationState;
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const PAYPAL_API = "https://api-m.sandbox.paypal.com/v1/payments/payment";

  const handlePayPalPayment = async () => {
    setSelectedMethod("PayPal");
    setLoading(true);
    try {
      const formattedPrice = parseFloat(
        membershipPrice.replace("$", "")
      ).toFixed(2);
      const response = await fetch(PAYPAL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer A21AAJoEU9NrcJY5Rwp3Ru9w4FUL5udQ0bC5MMeau-HvbiTVx1NuG-IYAk_7U6RhlCRBg6r6QOEUQ9cloPn649-uBSWEf4Nzg`,
        },
        body: JSON.stringify({
          intent: "sale",
          payer: {
            payment_method: "paypal",
          },
          transactions: [
            {
              amount: {
                total: formattedPrice,
                currency: "USD",
              },
              description: `Payment for ${membershipName}`,
            },
          ],
          redirect_urls: {
            return_url: "https://your-app.com/payment-success",
            cancel_url: "https://your-app.com/payment-cancel",
          },
        }),
      });

      const paymentResult = await response.json();
      if (paymentResult && paymentResult.links) {
        const approvalUrl = paymentResult.links.find(
          (link: any) => link.rel === "approval_url"
        ).href;
        window.location.href = approvalUrl;
      } else {
        alert("Payment initiation failed.");
      }
    } catch (error) {
      console.error("Payment Error: ", error);
      alert("An error occurred while processing the payment.");
    } finally {
      setLoading(false);
      setSelectedMethod(null);
    }
  };

  const handleOtherPayments = (method: string) => {
    setSelectedMethod(method);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSelectedMethod(null);
      alert(`${method} Payment is under development.`);
    }, 2000); // Simulate a delay for loading
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">Pay for {membershipName}</h1>
          <p className="text-xl mb-6">Price: {membershipPrice}</p>
        </motion.div>

        <motion.button
          className={`bg-white p-4 mb-4 rounded-lg shadow-lg w-full max-w-sm flex items-center justify-center ${
            selectedMethod === "PayPal" && loading
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handlePayPalPayment}
          disabled={loading}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {loading && selectedMethod === "PayPal" ? (
            <span className="text-blue-500">Loading...</span>
          ) : (
            <FaPaypal className="text-blue-500 text-4xl" />
          )}
        </motion.button>

        <motion.button
          className={`bg-purple-600 p-4 mb-4 rounded-lg shadow-lg w-full max-w-sm flex items-center justify-center ${
            selectedMethod === "Shop Pay" && loading
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={() => handleOtherPayments("Shop Pay")}
          disabled={loading}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {loading && selectedMethod === "Shop Pay" ? (
            <span className="text-white">Loading...</span>
          ) : (
            <IoMdCash className="text-white text-4xl" />
          )}
        </motion.button>

        <motion.button
          className={`bg-white p-4 mb-4 rounded-lg shadow-lg w-full max-w-sm flex items-center justify-center ${
            selectedMethod === "Amazon Pay" && loading
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={() => handleOtherPayments("Amazon Pay")}
          disabled={loading}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {loading && selectedMethod === "Amazon Pay" ? (
            <span className="text-gray-500">Loading...</span>
          ) : (
            <FaAmazonPay className="text-gray-500 text-4xl" />
          )}
        </motion.button>

        <motion.button
          className={`bg-white p-4 mb-4 rounded-lg shadow-lg w-full max-w-sm flex items-center justify-center ${
            selectedMethod === "Apple Pay" && loading
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={() => handleOtherPayments("Apple Pay")}
          disabled={loading}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {loading && selectedMethod === "Apple Pay" ? (
            <span className="text-gray-500">Loading...</span>
          ) : (
            <FaApplePay className="text-gray-500 text-4xl" />
          )}
        </motion.button>

        <motion.button
          className={`bg-white p-4 mb-4 rounded-lg shadow-lg w-full max-w-sm flex items-center justify-center ${
            selectedMethod === "Google Pay" && loading
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={() => handleOtherPayments("Google Pay")}
          disabled={loading}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {loading && selectedMethod === "Google Pay" ? (
            <span className="text-gray-500">Loading...</span>
          ) : (
            <FaGooglePay className="text-gray-500 text-4xl" />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default PaymentScreen;
