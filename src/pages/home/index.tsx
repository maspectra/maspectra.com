import React from "react";

import Layout from "@theme/Layout";
import Header from "@site/src/pages/home/header";
// import QuoteSection from "@site/src/pages/home/quote-section";
import MasmodIntro from "@site/src/pages/home/masmod-intro";
import SecondSection from "@site/src/pages/home/second-section";
import ThirdSection from "@site/src/pages/home/third-section";
import ExploreCard from "@site/src/pages/home/explore-card";
import WaitList from "@site/src/pages/home/wait-list";

import sharedCss from "@site/src/pages/home/shared.module.css";

const Home: React.FC = () => {
    return (
        <Layout description="Maspectra™, MIDD development platform.">
            <Header />
            <main className={sharedCss.rootLayout}>
                {/* <QuoteSection /> */}
                <MasmodIntro />
                <SecondSection />
                <ThirdSection />
                <ExploreCard />
                <WaitList />
            </main>
        </Layout>
    );
};

export default Home;
