import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";

import {
    FluentProvider,
    webDarkTheme,
    webLightTheme
} from "@fluentui/react-components";
import Header from "@site/src/pages/home/header";
import FirstSection from "@site/src/pages/home/first-section";
import SecondSection from "@site/src/pages/home/second-section";
import ThirdSection from "@site/src/pages/home/third-section";

const Home: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();

    const [fuiTheme, setFuiTheme] = React.useState(webLightTheme);

    React.useEffect(() => {
        const _setAttribute = document.documentElement.setAttribute;
        document.documentElement.setAttribute = (
            key: string,
            value: string
        ) => {
            if (key === "data-theme") {
                setFuiTheme(value === "light" ? webLightTheme : webDarkTheme);
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
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                </main>
            </Layout>
        </FluentProvider>
    );
};

export default Home;
