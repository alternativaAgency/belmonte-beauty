// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen px-4 py-8">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
