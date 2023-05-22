import React from "react";

import { Button } from "@fluentui/react-components";
import clsx from "clsx";
import IconExternalLink from "@theme/Icon/ExternalLink";
import Translate from "@docusaurus/Translate";

import headerCss from "@site/src/pages/home/header/styles.module.css";
import sharedCss from "@site/src/pages/home/shared.module.css";

const Header: React.FC = () => {
    return (
        <header>
            <div className={headerCss.hero}>
                <div
                    className={clsx(
                        headerCss.heroContent,
                        headerCss.heroContentStack
                    )}
                >
                    <div
                        className={clsx(
                            headerCss.heroTextContainer,
                            headerCss.heroTextContainerWidth
                        )}
                    >
                        <h1 className={sharedCss.titleH1}>
                            <Translate
                                values={{
                                    target: (
                                        <span
                                            className={clsx(
                                                sharedCss.titleH1,
                                                sharedCss.highlightText
                                            )}
                                        >
                                            <Translate>
                                                Modeling & Simulation
                                            </Translate>
                                        </span>
                                    )
                                }}
                            >
                                {"All-in-one solution for {target}"}
                            </Translate>
                        </h1>
                        <p className={sharedCss.text}>
                            <Translate>
                                MaSolve™ unlocks the power to implement the
                                Model Informed Drug Development (MIDD) approach
                                in one software platform.
                            </Translate>
                        </p>
                        <div className={sharedCss.buttonsContainer}>
                            <Button
                                appearance="primary"
                                size="large"
                                as="a"
                                className={sharedCss.button}
                                href="/"
                            >
                                <Translate>Get Started</Translate>
                            </Button>
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
                            headerCss.heroVideoContainer,
                            headerCss.heroVideoContainerWidth
                        )}
                    >
                        <iframe
                            src="//player.bilibili.com/player.html?aid=818467067&bvid=BV1oG4y1g7jn&cid=912752325&page=1"
                            className={headerCss.heroVideoFrame}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
