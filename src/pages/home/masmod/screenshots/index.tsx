import React from "react";

import clsx from "clsx";
import { Image } from "@fluentui/react-components";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from "@docusaurus/Translate";

import styles from "@site/src/pages/home/masmod/screenshots/styles.module.css";
import sharedCss from "@site/src/pages/home/shared.module.css";

const MasmodScreenshots: React.FC = () => {
  const ideImgUrl = useBaseUrl("/img/screenshots/ide.gif");
  const nmImgUrl = useBaseUrl("/img/screenshots/nm-capability.gif");

  return (
    <div className={styles.masmodScreenshots}>
      <div
        className={clsx(
          styles.masmodScreenshotsContent,
          styles.masmodScreenshotsContentStack
        )}
      >
        <div
          className={clsx(
            styles.masmodScreenshotsTextContainer,
            styles.masmodScreenshotsTextContainerWidth
          )}
        >
          <h2 className={sharedCss.titleH2}>
            💻 <Translate>IDE Experience</Translate>
          </h2>
          <p className={clsx(sharedCss.text, sharedCss.paragraph)}>
            <Translate>
              Enjoy a IDE-like coding experience using Maspectra Code Editor.
            </Translate>
            <Translate>
              Accelerate your Modeling and Simulation with code completion,
              auto suggestion, syntax hight-light, inline documentation, and
              more.
            </Translate>
          </p>
        </div>
        <div
          className={clsx(
            styles.masmodScreenshotsImageContainer,
            styles.masmodScreenshotsImageContainerWidth
          )}
        >
          <Image
            className={styles.masmodScreenshotsImage}
            src={ideImgUrl}
            alt="ide"
            shadow
            shape="rounded"
          />
        </div>
      </div>
      <div
        className={clsx(
          styles.masmodScreenshotsContent,
          styles.masmodScreenshotsContentStack
        )}
      >
        <div
          className={clsx(
            styles.masmodScreenshotsImageContainer,
            styles.masmodScreenshotsImageContainerWidth
          )}
        >
          <Image
            className={styles.masmodScreenshotsImage}
            src={nmImgUrl}
            alt="nm-capability"
            shadow
            shape="rounded"
          />
        </div>
        <div
          className={clsx(
            styles.masmodScreenshotsTextContainer,
            styles.masmodScreenshotsTextContainerWidth
          )}
        >
          <h2 className={sharedCss.titleH2}>
            🗂️ <Translate>NONMEM Capable</Translate>
          </h2>
          <p className={clsx(sharedCss.text, sharedCss.paragraph)}>
            <Translate>
              Capable of NONMEM models with one-click translation.
            </Translate>
            <Translate>
              Jump start your modeling and simulation with masmod from NONMEM
              models with no pain.
            </Translate>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasmodScreenshots;
