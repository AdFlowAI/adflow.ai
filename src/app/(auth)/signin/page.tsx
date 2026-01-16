import { RiGoogleLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Page = () => {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="flex w-[320px] flex-col items-center gap-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xl font-semibold">Adflow.ai</p>
          <div>
            <p className="text-lg font-medium">Welcome back</p>
          </div>
        </div>
        <form className="w-full space-y-4">
          <Input />
          <Button className="w-full">Continue</Button>
        </form>
        <Button className="w-full" variant="outline">
          <RiGoogleLine /> Continue with Google
        </Button>
        <div className="space-y-4 text-center">
          <p className="text-sm text-gray-600">By continuing, you agree to our Terms and Privacy Policy.</p>
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link className="underline" href="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
