export const metadata = {
  title: "Articles | Diallo Chicken",
  description: "Découvrez nos conseils cuisine, recettes et actualités sur la volaille locale",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}