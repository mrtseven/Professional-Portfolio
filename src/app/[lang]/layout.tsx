import {siteConfig} from "@/config/config";
import Provider from "@/provider/provider";
import React from "react";
import '@/assets/css/main.css'
import '@/assets/css/bootstrap.css'
import '@/assets/css/fonts.css'
import reportWebVitals from "@/provider/reportWebVitals";

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
};
export default async function RootLayout({children, params}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>
}) {
    const {lang} = await params;

    
    return (
        <html lang={lang} suppressHydrationWarning>
        <body className="bg-gray-50 dark:bg-[#2c2d30]" suppressHydrationWarning>

            <Provider lang={lang}>{children}</Provider>

        </body>
        </html>

    );

}
