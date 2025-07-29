import MainProvider from "@/provider/main.provider";
import React from "react";

export default async function layout({children, params}: {
    children: React.ReactNode;
    params: Promise<{ lang: any }>
}) {
    const {lang} = await params;

    return  <MainProvider>{children}</MainProvider>
}

