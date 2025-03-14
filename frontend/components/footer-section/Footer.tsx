import React from "react";

function InfoFooter({ info, desc }: { info: string; desc: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <p>{info}</p>
        <span className="w-full border-b-2 border-white md:w-[20vw]" />
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="relative flex w-full justify-center min-h-[35vh] overflow-hidden py-[.8rem]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/footer-image.jpg')]"></div>

      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02082D] to-[#081C49] opacity-95"></div>

      <div className="relative flex flex-col w-[90%] gap-4 md:flex-row md:gap-10 md:w-[95%] lg:w-[70%]">
        <div className="flex flex-col gap-4">
          <img src="/full-icon.png" className="w-[15rem]" />
          <div className="flex flex-col gap-2">
            <InfoFooter info="©2023 Noble Elite" desc="Email" />
            <InfoFooter info="Mail Nobleelitetrade@gmail.com" desc="Phone" />
            <InfoFooter info="+1 (580) 760-7297" desc="Address" />
          </div>
          <div>
            <p>1322 Madison Ave #12 Woodward, Oklahoma(OK), 73801</p>
          </div>
        </div>
        <div>
          <p className="text-sm md:pt-8">
            Transactions with financial instruments offered on the Website
            involve substantial risk and trading may be very risky. If you make
            Transactions with the financial instruments offered on this Website,
            you might incur substantial losses or even lose everything in your
            Account. Before you decide to start Transactions with the financial
            instruments offered on the Website, you must review the Service
            Agreement and Risk Disclosure Information.
          </p>
        </div>
      </div>
    </div>
  );
}
