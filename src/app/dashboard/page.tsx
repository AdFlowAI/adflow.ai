import { ScrollArea } from "@/components/shared";

const Page = () => {
  return (
    <ScrollArea className="h-full w-full space-y-6">
      <div className="grid h-[400px] w-full grid-cols-3 gap-5">
        <div className="col-span-1 rounded-xl bg-gray-300 p-4"></div>
        <div className="col-span-1 rounded-xl bg-gray-300 p-4"></div>
        <div className="col-span-1 rounded-xl bg-gray-300 p-4"></div>
      </div>
      <div className="grid h-[400px] w-full grid-cols-6 gap-5">
        <div className="col-span-5 rounded-xl bg-gray-300 p-4"></div>
        <div className="col-span-1 rounded-xl bg-gray-300 p-4"></div>
      </div>
      <div className="grid h-[400px] w-full grid-cols-6 gap-5">
        <div className="col-span-2 rounded-xl bg-gray-300 p-4"></div>
        <div className="col-span-4 rounded-xl bg-gray-300 p-4"></div>
      </div>
    </ScrollArea>
  );
};

export default Page;
