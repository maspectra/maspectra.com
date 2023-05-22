import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";
import Header from "@site/src/pages/home/header";
// import QuoteSection from "@site/src/pages/home/quote-section";
import FirstSection from "@site/src/pages/home/first-section";
import SecondSection from "@site/src/pages/home/second-section";
import ThirdSection from "@site/src/pages/home/third-section";
import ForthSection from "@site/src/pages/home/forth-section";

const Home: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`Hello ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <Header />
            <main>
                {/* <QuoteSection /> */}
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <ForthSection />
            </main>
        </Layout>
    );
};

export default Home;
