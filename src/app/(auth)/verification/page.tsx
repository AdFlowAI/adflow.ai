"use client";
import { useState } from "react";

import { OtpInput } from "@/components/shared";

const Page = () => {
  const [otp, setOtp] = useState("");
  const isReadOnly = otp.length >= 6;

  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex w-[320px] flex-col items-center gap-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xl font-semibold">Adly.ai</p>
          <div>
            <p className="text-lg font-medium">Verification</p>
            <p className="text-sm text-gray-600">Enter the OTP sent your mail to continue.</p>
          </div>
        </div>
        <OtpInput length={6} onChange={setOtp} readOnly={isReadOnly} value={otp} />
      </div>
    </div>
  );
};

export default Page;
