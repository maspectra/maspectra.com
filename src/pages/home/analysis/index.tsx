import React from "react";
import AnalysisIntro from "@site/src/pages/home/analysis/analysis-intro";
import LearnMoreSection from "@site/src/pages/home/analysis/learn-more";
import AnalysisScreenshots from "@site/src/pages/home/analysis/screenshots";

const AnalysisSection: React.FC = () => {
    return (
        <>
            <AnalysisIntro />
            <LearnMoreSection />
            <AnalysisScreenshots />
        </>
    );
};

export default AnalysisSection;
