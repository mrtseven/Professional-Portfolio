"use client";
import React from "react";
import TargetCursor from "@/components/targetCursor";

const MainProvider = ({children}: { children: React.ReactNode }) => {
    return <div className="relative">
        <TargetCursor
            spinDuration={2}
            hideDefaultCursor={true}/>

        <div className=''> {children}</div>

    </div>
};

export default MainProvider;
