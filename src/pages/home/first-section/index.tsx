import React from "react";

import { Button } from "@fluentui/react-components";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import IconExternalLink from "@theme/Icon/ExternalLink";

import firstSectionCss from "@site/src/pages/home/first-section/styles.module.css";

import ManWithCode from "@site/static/img/man-with-code.svg";
import sharedCss from "@site/src/pages/home/shared.module.css";

const FirstSection: React.FC = () => {
    return (
        <div className={firstSectionCss.firstSection}>
            <div
                className={clsx(
                    firstSectionCss.firstSectionContent,
                    firstSectionCss.firstSectionContentStack
                )}
            >
                <div
                    className={clsx(
                        firstSectionCss.firstSectionTextContainer,
                        firstSectionCss.firstSectionTextContainerWidth
                    )}
                >
                    <h3 className={sharedCss.titleH3}>
                        <Translate>MASMOD</Translate>
                    </h3>
                    <h2 className={sharedCss.titleH2}>
                        <Translate>MIDD workflow in Python</Translate>
                    </h2>
                    <p className={sharedCss.text}>
                        <Translate
                            values={{
                                what: (
                                    <Translate
                                        values={{
                                            masmod: <b>masmod</b>
                                        }}
                                    >
                                        {
                                            "{masmod} - the powerful Python-based framework"
                                        }
                                    </Translate>
                                )
                            }}
                        >
                            {
                                "Experience the endless possibilities of pharmacometrics modeling and simulation with {what}. You have everything you need and unlimited potential by incorporating AI models and other data science tools in the Python ecosystem."
                            }
                        </Translate>
                    </p>
                    <div className={sharedCss.buttonsContainer}>
                        <Button
                            appearance="outline"
                            size="large"
                            as="a"
                            className={clsx(
                                sharedCss.button,
                                sharedCss.outlineButton
                            )}
                            href="/"
                            icon={<IconExternalLink />}
                            iconPosition="after"
                        >
                            <Translate>Playground</Translate>
                        </Button>
                    </div>
                </div>
                <div
                    className={clsx(
                        firstSectionCss.firstSectionImageContainer,
                        firstSectionCss.firstSectionImageContainerWidth
                    )}
                >
                    <ManWithCode
                        className={firstSectionCss.firstSectionImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
