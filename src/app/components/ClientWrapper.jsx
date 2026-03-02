"use client";

import dynamic from "next/dynamic";

// Load the popup ONLY on the client side
const OfferPopup = dynamic(() => import("./OfferPopup"), {
  ssr: false,
});

export default function ClientWrapper() {
  return <OfferPopup />;
}