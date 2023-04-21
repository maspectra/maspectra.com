import React from "react";

import clsx from "clsx";
import Translate from "@docusaurus/Translate";

import secondSectionCss from "@site/src/pages/home/second-section/styles.module.css";
import MainWithPoster from "@site/static/img/man-with-poster.svg";
import sharedCss from "@site/src/pages/home/shared.module.css";

const SecondSection: React.FC = () => {
    return (
        <div className={secondSectionCss.secondSection}>
            <div
                className={clsx(
                    secondSectionCss.secondSectionContent,
                    secondSectionCss.secondSectionContentStack
                )}
            >
                <div
                    className={clsx(
                        secondSectionCss.secondSectionImageContainer,
                        secondSectionCss.secondSectionImageContainerWidth
                    )}
                >
                    <MainWithPoster
                        className={secondSectionCss.secondSectionImage}
                    />
                </div>
                <div
                    className={clsx(
                        secondSectionCss.secondSectionTextContainer,
                        secondSectionCss.secondSectionTextContainerWidth
                    )}
                >
                    <h3 className={sharedCss.titleH3}>
                        <Translate>PHARMACOLOGY & STATISTICS</Translate>
                    </h3>
                    <h2 className={sharedCss.titleH2}>
                        <Translate>Data analysis in one platform</Translate>
                    </h2>
                    <p className={sharedCss.text}>
                        <Translate>
                            Consolidate multiple software functionalities into
                            one streamlined platform for efficient drug
                            development data analysis. Perform PK/PD and
                            statistical analysis seamlessly from a single
                            software. Experience a hassle-free workflow today!
                        </Translate>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;
