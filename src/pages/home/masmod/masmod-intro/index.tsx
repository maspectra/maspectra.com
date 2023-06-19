import React from "react";

import { Button, Tooltip } from "@fluentui/react-components";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import IconExternalLink from "@theme/Icon/ExternalLink";

import styles from "@site/src/pages/home/masmod/masmod-intro/styles.module.css";

import ManWithCode from "@site/static/img/man-with-code.svg";
import sharedCss from "@site/src/pages/home/shared.module.css";

const MasmodIntroSection: React.FC = () => {
  return (
    <div className={styles.masmodIntro}>
      <div
        className={clsx(
          styles.masmodIntroContent,
          styles.masmodIntroContentStack
        )}
      >
        <div
          className={clsx(
            styles.masmodIntroTextContainer,
            styles.masmodIntroTextContainerWidth
          )}
        >
          <h3 className={sharedCss.titleH3}>
            <Translate>MASMOD</Translate>
          </h3>
          <h2 className={sharedCss.titleH2}>
            <Translate>MIDD workflow in Python</Translate>
          </h2>
          <p className={clsx(sharedCss.text, sharedCss.paragraph)}>
            <Translate
              values={{
                what: (
                  <Translate
                    values={{
                      masmod: <b>masmod</b>
                    }}
                  >
                    {"{masmod} - the powerful Python-based framework"}
                  </Translate>
                )
              }}
            >
              {
                "Experience the endless possibilities of pharmacometrics modeling and simulation with {what}."
              }
            </Translate>
            <Translate>
              You have everything you need and unlimited potential by
              incorporating AI models and other data science tools in the
              Python ecosystem.
            </Translate>
          </p>
          <div
            className={clsx(
              sharedCss.buttonsContainer,
              sharedCss.buttonsStack
            )}
          >
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
              </Button>
            </Tooltip>
          </div>
        </div>
        <div
          className={clsx(
            styles.masmodIntroImageContainer,
            styles.masmodIntroImageContainerWidth
          )}
        >
          <ManWithCode className={styles.masmodIntroImage} />
        </div>
      </div>
    </div>
  );
};

export default MasmodIntroSection;
