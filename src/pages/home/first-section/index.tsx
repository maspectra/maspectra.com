import React from "react";

import { Button } from "@fluentui/react-components";
import clsx from "clsx";
import IconExternalLink from "@theme/Icon/ExternalLink";

import firstSectionCss from "@site/src/pages/home/first-section/styles.module.css";

import ManWithMugCup from "@site/static/img/man-with-mugcup.svg";
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
                    <h3 className={sharedCss.titleH3}>Heading 3</h3>
                    <h2 className={sharedCss.titleH2}>Heading 2</h2>
                    <p className={sharedCss.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Aenean euismod bibendum laoreet. Proin gravida
                        dolor sit amet lacus accumsan et viverra justo commodo.
                        Proin sodales pulvinar sic tempor. Sociis natoque
                        penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus
                    </p>
                    <div>
                        <Button
                            appearance="secondary"
                            size="large"
                            as="a"
                            className={sharedCss.button}
                            href="/"
                            icon={<IconExternalLink />}
                            iconPosition="after"
                        >
                            Playground
                        </Button>
                    </div>
                </div>
                <div
                    className={clsx(
                        firstSectionCss.firstSectionImageContainer,
                        firstSectionCss.firstSectionImageContainerWidth
                    )}
                >
                    <ManWithMugCup
                        className={firstSectionCss.firstSectionImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
