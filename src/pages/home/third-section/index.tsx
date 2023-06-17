import React from "react";

import { Button } from "@fluentui/react-components";
import clsx from "clsx";
import IconExternalLink from "@theme/Icon/ExternalLink";
import Translate from "@docusaurus/Translate";

import thirdSectionCss from "@site/src/pages/home/third-section/styles.module.css";

import sharedCss from "@site/src/pages/home/shared.module.css";

const ThirdSection: React.FC = () => {
    return (
        <div className={thirdSectionCss.thirdSection}>
            <div
                className={clsx(
                    thirdSectionCss.thirdSectionContent,
                    thirdSectionCss.thirdSectionContentStack
                )}
            >
                <div
                    className={clsx(
                        thirdSectionCss.thirdSectionTextContainer,
                        thirdSectionCss.thirdSectionTextContainerWidth
                    )}
                >
                    <h2 className={sharedCss.titleH2}>
                        <Translate>NCA & Compartmental Model</Translate>
                    </h2>
                    <p
                        className={clsx(
                            sharedCss.text,
                            thirdSectionCss.thirdSectionContentText
                        )}
                    >
                        <Translate>
                            Robust and powerful noncompartmental/compartmental
                            PK analysis for preclinical and clinical studies.
                        </Translate>
                    </p>
                    <div className={sharedCss.buttonsContainer}>
                        <Button
                            appearance="transparent"
                            size="large"
                            as="a"
                            className={clsx(
                                sharedCss.button,
                                sharedCss.linkButton,
                                thirdSectionCss.learnMoreButton
                            )}
                            href="/"
                            disabled
                            icon={<IconExternalLink />}
                            iconPosition="after"
                        >
                            <Translate>Learn more</Translate>
                        </Button>
                    </div>
                </div>
                <div
                    className={clsx(
                        thirdSectionCss.thirdSectionTextContainer,
                        thirdSectionCss.thirdSectionTextContainerWidth
                    )}
                >
                    <h2 className={sharedCss.titleH2}>
                        <Translate>Bioequivalence</Translate>
                    </h2>
                    <p
                        className={clsx(
                            sharedCss.text,
                            thirdSectionCss.thirdSectionContentText
                        )}
                    >
                        <Translate>
                            Maspectra supports various ABE trial designs
                            including crossover and parallel studies.
                        </Translate>
                    </p>
                    <div className={sharedCss.buttonsContainer}>
                        <Button
                            appearance="transparent"
                            size="large"
                            as="a"
                            className={clsx(
                                sharedCss.button,
                                sharedCss.linkButton,
                                thirdSectionCss.learnMoreButton
                            )}
                            href="/"
                            disabled
                            icon={<IconExternalLink />}
                            iconPosition="after"
                        >
                            <Translate>Learn more</Translate>
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className={clsx(
                    thirdSectionCss.thirdSectionContent,
                    thirdSectionCss.thirdSectionContentStack
                )}
            >
                <div
                    className={clsx(
                        thirdSectionCss.thirdSectionTextContainer,
                        thirdSectionCss.thirdSectionTextContainerWidth
                    )}
                >
                    <h2 className={sharedCss.titleH2}>
                        <Translate>Exploratory statistics</Translate>
                    </h2>
                    <p
                        className={clsx(
                            sharedCss.text,
                            thirdSectionCss.thirdSectionContentText
                        )}
                    >
                        <Translate>
                            Effortlessly explore and visualize preclinical and
                            clinical data with utmost efficiency.
                        </Translate>
                    </p>
                    <div className={sharedCss.buttonsContainer}>
                        <Button
                            appearance="transparent"
                            size="large"
                            as="a"
                            className={clsx(
                                sharedCss.button,
                                sharedCss.linkButton,
                                thirdSectionCss.learnMoreButton
                            )}
                            href="/"
                            disabled
                            icon={<IconExternalLink />}
                            iconPosition="after"
                        >
                            <Translate>Learn more</Translate>
                        </Button>
                    </div>
                </div>
                <div
                    className={clsx(
                        thirdSectionCss.thirdSectionTextContainer,
                        thirdSectionCss.thirdSectionTextContainerWidth
                    )}
                >
                    <h2 className={sharedCss.titleH2}>
                        <Translate>Statistical tests & models</Translate>
                    </h2>
                    <p
                        className={clsx(
                            sharedCss.text,
                            thirdSectionCss.thirdSectionContentText
                        )}
                    >
                        <Translate>
                            Perform statistical tests and regression analysis
                            for in-depth insights.
                        </Translate>
                    </p>
                    <div className={sharedCss.buttonsContainer}>
                        <Button
                            appearance="transparent"
                            size="large"
                            as="a"
                            className={clsx(
                                sharedCss.button,
                                sharedCss.linkButton,
                                thirdSectionCss.learnMoreButton
                            )}
                            href="/"
                            disabled
                            icon={<IconExternalLink />}
                            iconPosition="after"
                        >
                            <Translate>Learn more</Translate>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
