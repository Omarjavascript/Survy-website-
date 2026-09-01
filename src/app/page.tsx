import { useTranslations } from "next-intl";
import PublicLayOut from "@/shared/components/layout/PublicLayOut";
import ThemeToggle from "@/shared/components/atom/ThemeToggle";
import HowItsWorks from "@/shared/components/organsims/HowItsWorks";
export default function Home() {
  const t = useTranslations();
  return (
    <PublicLayOut>
      <ThemeToggle />
      <div className="ds-container">
        <HowItsWorks />
        <h1>{t("HomePage.title")}</h1>
      </div>
    </PublicLayOut>
  );
}
