import React from "react";

import { Button } from "@fluentui/react-components";
import clsx from "clsx";
import IconExternalLink from "@theme/Icon/ExternalLink";

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
                        thirdSectionCss.thirdSectionText1ContainerWidth
                    )}
                >
                    <h3 className={sharedCss.titleH3}>Heading 3</h3>
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
                            appearance="transparent"
                            size="large"
                            as="a"
                            className={sharedCss.linkButton}
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
                        thirdSectionCss.thirdSectionTextContainer,
                        thirdSectionCss.thirdSectionText1ContainerWidth
                    )}
                >
                    <h3 className={sharedCss.titleH3}>Heading 3</h3>
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
                            appearance="transparent"
                            size="large"
                            as="a"
                            className={sharedCss.linkButton}
                            href="/"
                            icon={<IconExternalLink />}
                            iconPosition="after"
                        >
                            Playground
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
