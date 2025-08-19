"use client";

import React from "react";
import {FUNDING, PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

export default function PayPal() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">PayPal Integration</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">
          This is the PayPal page. You can integrate PayPal functionality here.
        </p>
        <PayPalScriptProvider options={{ "clientId": "Aa3PQrsRLkg9MpbJFCYlUr8ipJrNytEJG3yKxckWNHQuzGbLMFGlpD0k0N_OhFdxmSbsVUWgc0YIJqft",
          currency: "USD" }}>
          <PayPalButtons
              style={{
                layout: "horizontal", // or 'vertical'
                color: "white",        // gold | blue | silver | white | black
                shape: "pill",        // pill | rect
                // label: "paypal",      // paypal | checkout | buynow | pay | installment
                height: 45,           // in pixels
                tagline: false        // hide the small tagline
              }}
              createOrder={(_data, actions) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units:[
                    {
                      amount: {
                        currency_code: "USD", // Recommended to include explicitly
                        value: "10.00",
                      },
                    },
                  ]
                });
              }}
              onApprove={async (_data, actions) => {
                const details = await actions.order.capture();
                alert(`Transaction completed by ${details.payer.name.given_name}`);
                console.log(details); // Transaction details
              }}
          />
          <PayPalButtons
              fundingSource={FUNDING.CARD}
              style={{
                layout: "horizontal", // or 'vertical'
                color: "white",        // gold | blue | silver | white | black
                shape: "pill",        // pill | rect
                // label: "paypal",      // paypal | checkout | buynow | pay | installment
                height: 45,           // in pixels
                tagline: false        // hide the small tagline
              }}
              createOrder={(_data, actions) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units:[
                    {
                      amount: {
                        currency_code: "USD", // Recommended to include explicitly
                        value: "10.00",
                      },
                    },
                  ]
                });
              }}
              onApprove={async (_data, actions) => {
                const details = await actions.order.capture();
                alert(`Transaction completed by ${details.payer.name.given_name}`);
                console.log(details); // Transaction details
              }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
} 