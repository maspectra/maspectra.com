import React from "react";

import clsx from "clsx";
import Translate from "@docusaurus/Translate";

import styles from "@site/src/pages/home/analysis/analysis-intro/styles.module.css";
import MainWithPoster from "@site/static/img/man-with-poster.svg";
import sharedCss from "@site/src/pages/home/shared.module.css";

const AnalysisIntro: React.FC = () => {
    return (
        <div className={styles.analysisIntro}>
            <div
                className={clsx(
                    styles.analysisIntroContent,
                    styles.analysisIntroContentStack
                )}
            >
                <div
                    className={clsx(
                        styles.analysisIntroImageContainer,
                        styles.analysisIntroImageContainerWidth
                    )}
                >
                    <MainWithPoster className={styles.analysisIntroImage} />
                </div>
                <div
                    className={clsx(
                        styles.analysisIntroTextContainer,
                        styles.analysisIntroTextContainerWidth
                    )}
                >
                    <h3 className={sharedCss.titleH3}>
                        <Translate>PHARMACOLOGY & STATISTICS</Translate>
                    </h3>
                    <h2 className={sharedCss.titleH2}>
                        <Translate>
                            Data Analysis with all-in-one Platform
                        </Translate>
                    </h2>
                    <p className={clsx(sharedCss.text, sharedCss.paragraph)}>
                        <Translate>
                            Consolidate multiple software functionalities into
                            one streamlined platform for efficient drug
                            development data analysis.
                        </Translate>
                        <Translate>
                            Perform PK/PD and statistical analysis seamlessly
                            from a single software.
                        </Translate>
                        <Translate>
                            Experience a hassle-free MIDD workflow today!
                        </Translate>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AnalysisIntro;
