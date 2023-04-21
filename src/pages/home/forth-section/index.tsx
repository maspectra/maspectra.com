import React from "react";
import { Button, Divider } from "@fluentui/react-components";

import Translate from "@docusaurus/Translate";

import forthSectionCss from "@site/src/pages/home/forth-section/styles.module.css";

const ForthSection: React.FC = () => {
    return (
        <div className={forthSectionCss.forthSection}>
            <div className={forthSectionCss.forthSectionBg}>
                <div className={forthSectionCss.bgInvert} />
                <div className={forthSectionCss.bgBlank} />
            </div>
            <div className={forthSectionCss.forthSectionContent}>
                <div className={forthSectionCss.featureCardContainer}>
                    <div className={forthSectionCss.featureListContainer}>
                        <ul className={forthSectionCss.featureList}>
                            <li>
                                <Translate>PD Models</Translate>
                            </li>
                            <li>
                                <Translate>Descriptive Statistics</Translate>
                            </li>
                            <li>
                                <Translate>Frequency Analysis</Translate>
                            </li>
                            <li>
                                <Translate>Correlation</Translate>
                            </li>
                            <li>
                                <Translate>One/Two Sample T-test</Translate>
                            </li>
                            <li>
                                <Translate>ANOVA</Translate>
                            </li>
                            <li>
                                <Translate>Nonparametric Analysis</Translate>
                            </li>
                            <li>
                                <Translate>Linear Regression</Translate>
                            </li>
                            <li>
                                <Translate>Keplan-Meier</Translate>
                            </li>
                            <li>
                                <Translate>Cox regression</Translate>
                            </li>
                            <li>
                                <Translate>Data Split</Translate>
                            </li>
                            <li>
                                <Translate>Data Pivot</Translate>
                            </li>
                        </ul>
                    </div>
                    <Divider vertical={false} />
                    <div className={forthSectionCss.actionContainer}>
                        <Button
                            appearance="transparent"
                            as="a"
                            href="/docs/intro"
                        >
                            <Translate>
                                Explore MaSolve&apos;s potential with our
                                documentation
                            </Translate>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForthSection;
