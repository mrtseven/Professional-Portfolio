import React from "react";
import { siteConfig } from "@/config/config";

type ProviderProps = {
  children: React.ReactNode;
  lang: string;
}

const Provider = async ({ children, lang }: ProviderProps) => {
  if (!siteConfig.languages.includes(lang)) {
    throw new Error(`Unsupported language: ${lang}`);
  }

  const direction = siteConfig.rtlSupport && siteConfig.rtlLanguages.includes(lang) ? "rtl" : "ltr";

  return (
    <div dir={direction}>
      {children}
    </div>
  );
};

export default Provider;
