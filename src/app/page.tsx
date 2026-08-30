import { useTranslations } from "next-intl";
import Box from "@/shared/components/melcuers/Box";
import PublicLayOut from "@/shared/components/layout/PublicLayOut";
import ThemeToggle from "@/shared/components/atom/ThemeToggle";
export default function Home() {
  const t = useTranslations();
  return (
    <PublicLayOut>
      <ThemeToggle />
      <div className="ds-container">
        <Box />
        <h1>{t("HomePage.title")}</h1>
      </div>
    </PublicLayOut>
  );
}
