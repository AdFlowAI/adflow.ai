import { Footer, Navbar } from "@/components/shared";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen">
        <section className="container mx-auto h-screen py-20 sm:py-40">
          <div className="grid h-full w-full place-items-center text-center">
            <div>
              <p className="text-4xl font-semibold sm:text-8xl">Adly.ai</p>
              <p className="text-gray-600">This is where the tagline would sit beautifully</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto space-y-4 py-10 sm:py-20">
          <p className="">FEATURES</p>
        </section>
        <section className="container mx-auto space-y-4 py-10 sm:py-20">
          <p className="">FEATURES</p>
        </section>
        <section className="container mx-auto space-y-4 py-10 sm:py-20">
          <p className="">FEATURES</p>
        </section>
        <section className="container mx-auto space-y-4 py-10 sm:py-20">
          <p className="">FEATURES</p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
