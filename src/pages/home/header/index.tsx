import React from "react";

import { Button } from "@fluentui/react-components";
import clsx from "clsx";
import IconExternalLink from "@theme/Icon/ExternalLink";

import headerCss from "@site/src/pages/home/header/styles.module.css";
import sharedCss from "@site/src/pages/home/shared.module.css";

const Header: React.FC = () => {
    return (
        <header>
            <div className={headerCss.hero}>
                <div className={headerCss.heroContentStack}>
                    <div
                        className={clsx(
                            headerCss.heroContent,
                            headerCss.heroTextContainerWidth
                        )}
                    >
                        <h1 className={sharedCss.titleH1}>
                            All-in-one solution for
                            <br />
                            <span
                                className={clsx(
                                    sharedCss.titleH1,
                                    sharedCss.highlightText
                                )}
                            >
                                Modeling & Simulation
                            </span>
                        </h1>
                        <p className={sharedCss.text}>
                            Masolve™ unlocks the power to implement the Model
                            Informed Drug Development (MIDD) approach in one
                            software platform.
                        </p>
                        <div className={sharedCss.buttonsContainer}>
                            <Button
                                appearance="primary"
                                size="large"
                                as="a"
                                className={sharedCss.button}
                                href="/"
                            >
                                Get Started
                            </Button>
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
                            headerCss.heroVideoContainer,
                            headerCss.heroVideoContainerWidth
                        )}
                    >
                        <iframe
                            className={headerCss.heroVideoFrame}
                            src="//player.bilibili.com/player.html?aid=439902766&bvid=BV1sL411f7j8&page=1&high_quality=1"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
