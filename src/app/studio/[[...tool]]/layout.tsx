export const metadata = {
  title: "Liquid Salt Divers — CMS Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "100vh" }}>{children}</div>
  );
}
