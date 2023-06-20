import React from "react";

import { Button, Tooltip, Image } from "@fluentui/react-components";
import clsx from "clsx";
import IconExternalLink from "@theme/Icon/ExternalLink";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";

import headerCss from "@site/src/pages/home/header/styles.module.css";
import sharedCss from "@site/src/pages/home/shared.module.css";

const Header: React.FC = () => {
  const lightScreenshotImg = useBaseUrl("img/interface-light.png");
  const darkScreenshotImg = useBaseUrl("img/interface-dark.png");

  return (
    <header>
      <div className={headerCss.hero}>
        <div
          className={clsx(headerCss.heroContent, headerCss.heroContentStack)}
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
                      <br />
                      <Translate>Modeling & Simulation</Translate>
                    </span>
                  )
                }}
              >
                {"All-in-one solution for {target}"}
              </Translate>
            </h1>
            <p className={clsx(sharedCss.text, sharedCss.paragraph)}>
              <Translate>
                Maspectra™ unlocks the power to implement the Model Informed
                Drug Development (MIDD) approach in one software platform.
              </Translate>
            </p>
            <div
              className={clsx(
                sharedCss.buttonsContainer,
                sharedCss.buttonsStack
              )}
            >
              <Button
                appearance="primary"
                size="large"
                as="a"
                className={sharedCss.button}
                href="/"
              >
                <Translate>Get Started</Translate>
              </Button>
              <Tooltip content="Coming soon..." relationship="label">
                <Button
                  appearance="outline"
                  size="large"
                  as="a"
                  disabled
                  className={clsx(sharedCss.button, sharedCss.outlineButton)}
                  href="/"
                  icon={<IconExternalLink />}
                  iconPosition="after"
                >
                  Playground
                  {/* <Translate>Playground</Translate> */}
                </Button>
              </Tooltip>
            </div>
          </div>
          <div
            className={clsx(
              headerCss.heroFrameContainer,
              headerCss.heroFrameContainerWidth
            )}
          >
            <BrowserOnly
              fallback={
                <Image
                  alt="interface screenshot"
                  src={lightScreenshotImg}
                  className={headerCss.heroScreenshot}
                />
              }
            >
              {() => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const { colorMode } = useColorMode();
                return (
                  <Image
                    alt="interface screenshot"
                    src={
                      colorMode === "dark"
                        ? darkScreenshotImg
                        : lightScreenshotImg
                    }
                    className={headerCss.heroScreenshot}
                  />
                );
              }}
            </BrowserOnly>

            {/* <iframe
                            src="//player.bilibili.com/player.html?aid=818467067&bvid=BV1oG4y1g7jn&cid=912752325&page=1"
                            className={headerCss.heroVideoFrame}
                        /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
