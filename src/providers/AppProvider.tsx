import { NextIntlClientProvider } from "next-intl";
import ThemeProviders from "./ThemeProviders";
interface Props {
  children: React.ReactNode;
}
export default function AppProvider({ children }: Props) {
  return (
    <NextIntlClientProvider>
      <ThemeProviders>{children}</ThemeProviders>
    </NextIntlClientProvider>
  );
}
