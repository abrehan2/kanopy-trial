export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-form-md">
      <div className="text-center">
        <h1 className="font-sf text-2xl font-semibold text-security-text">
          Page not found
        </h1>
        <p className="mt-resend-gap font-sf text-sm text-medium-grey">
          The page you requested does not exist.
        </p>
      </div>
    </main>
  );
}
