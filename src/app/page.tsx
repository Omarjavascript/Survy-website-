import { useTranslations } from "next-intl";
import Text from "@/shared/components/atom/Text";
import Title from "@/shared/components/atom/Title";
import Box from "@/shared/components/melcuers/Box";
import PublicLayOut from "@/shared/components/layout/PublicLayOut";
import ThemeToggle from "@/shared/components/atom/ThemeToggle";
export default function Home() {
  const t = useTranslations();
  return (
    <PublicLayOut>
      <ThemeToggle />
      <div className="ds-container">
        <Title size="sm" variant="secondry">
          heading Hello World
        </Title>
        <Title size="md">heading Hello World</Title>
        <Title size="lg" variant="secondry">
          heading Hello World
        </Title>
        <Text size="sm" variant="disabeld" center={true}>
          text hello world this is omar
        </Text>

        <Box />
        <h1>{t("HomePage.title")}</h1>
      </div>
    </PublicLayOut>
  );
}
