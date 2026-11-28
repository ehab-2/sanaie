type LoadingPageProps = {
  message?: string;
};

export function LoadingPage({ message = "Loading..." }: LoadingPageProps) {
  return (
    <section
      aria-busy="true"
      aria-label={message}
      className="flex min-h-[55vh] w-full flex-1 items-center justify-center px-5 py-20"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div
          aria-hidden="true"
          className="relative flex h-20 w-20 items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-border" />
          <div className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-t-primary" />
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        </div>
        <p className="mono-label" role="status">
          {message}
        </p>
      </div>
    </section>
  );
}
