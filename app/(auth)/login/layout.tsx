

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md space-y-4">
            {children}
        </div>
    </main>
  );
}
