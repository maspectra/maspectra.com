import React from "react";

import Layout from "@theme/Layout";
import Header from "@site/src/pages/home/header";
// import QuoteSection from "@site/src/pages/home/quote-section";
import MasmodSection from "@site/src/pages/home/masmod";
import AnalysisSection from "@site/src/pages/home/analysis";
import ExploreCard from "@site/src/pages/home/explore-card";
import WaitList from "@site/src/pages/home/waitlist";

import sharedCss from "@site/src/pages/home/shared.module.css";

const Home: React.FC = () => {
    return (
        <Layout description="Maspectra™, MIDD development platform.">
            <Header />
            <main className={sharedCss.rootLayout}>
                {/* <QuoteSection /> */}
                <MasmodSection />
                <AnalysisSection />
                <ExploreCard />
                <WaitList />
            </main>
        </Layout>
    );
};

export default Home;
