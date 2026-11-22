import SingInForm from "@/components/signIn/SingInForm";
import PageHeader from "@/components/common/PageHeader";

export function JoinPage() {
  return (
    <section className="w-full bg-background py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-10">
        {/* Left Column: Editorial Intro */}
        <div className="lg:col-span-5">
          <PageHeader
            title={"Join as a craftsman"}
            subTitle={
              "Tell us about your trade and your work. Verified applications get a public profile with your portfolio and a direct WhatsApp button."
            }
          />
        </div>
        {/* Right Column: Static UI Form Card */}
        <div className="lg:col-span-7">
          <SingInForm/>
        </div>
      </div>
    </section>
  );
}

export default JoinPage;
