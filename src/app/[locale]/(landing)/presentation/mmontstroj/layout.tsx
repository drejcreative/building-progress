export default function MMontStrojPresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Presentation doesn't need navigation or footer - it's fullscreen
  return <>{children}</>;
}

