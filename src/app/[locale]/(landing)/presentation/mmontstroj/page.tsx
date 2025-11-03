import { Metadata } from "next";
import MMontStrojPresentation from "@/components/presentation/mmontstroj/presentation-container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MMontStroj Presentation",
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default function MMontStrojPresentationPage() {
  return <MMontStrojPresentation />;
}

