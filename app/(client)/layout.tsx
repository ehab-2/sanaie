import Footer from "@/components/common/client/Footer";
import Navbar from "@/components/common/client/Navbar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
