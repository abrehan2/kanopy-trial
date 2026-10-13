export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-page-x">
      <div className="text-center">
        <h1 className="font-heading text-title text-pine">Page not found</h1>
        <p className="mt-field-gap font-jost text-sm text-stone">
          The page you requested does not exist.
        </p>
      </div>
    </main>
  );
}
