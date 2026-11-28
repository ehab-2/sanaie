import Sidebar from "@/components/common/admin/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground md:grid md:grid-cols-[236px_1fr]">
      <Sidebar />
      <main className="min-w-0 px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </main>
    </div>
  );
}
