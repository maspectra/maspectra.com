import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";

import { FluentProvider } from "@fluentui/react-components";
import { lightTheme, darkTheme } from "@site/src/components/fui-theme";
import Header from "@site/src/pages/home/header";
// import QuoteSection from "@site/src/pages/home/quote-section";
import FirstSection from "@site/src/pages/home/first-section";
import SecondSection from "@site/src/pages/home/second-section";
import ThirdSection from "@site/src/pages/home/third-section";
import ForthSection from "@site/src/pages/home/forth-section";

const Home: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();

    const [fuiTheme, setFuiTheme] = React.useState(lightTheme);

    React.useEffect(() => {
        const _setAttribute = document.documentElement.setAttribute;
        document.documentElement.setAttribute = (
            key: string,
            value: string
        ) => {
            if (key === "data-theme") {
                setFuiTheme(value === "light" ? lightTheme : darkTheme);
            }
            _setAttribute.call(document.documentElement, key, value);
        };
    }, []);

    return (
        <FluentProvider theme={fuiTheme}>
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
        </FluentProvider>
    );
};

export default Home;
