import React from "react";
import { Button, Divider } from "@fluentui/react-components";

import Translate from "@docusaurus/Translate";

import styles from "@site/src/pages/home/explore-card/styles.module.css";

const ExploreCard: React.FC = () => {
  return (
    <div className={styles.exploreCard}>
      <div className={styles.exploreCardBg}>
        <div className={styles.bgInvert} />
        <div className={styles.bgBlank} />
      </div>
      <div className={styles.exploreCardContent}>
        <div className={styles.featureCardContainer}>
          <div className={styles.featureListContainer}>
            <ul className={styles.featureList}>
              <li>
                <Translate>PD Models</Translate>
              </li>
              <li>
                <Translate>Descriptive Statistics</Translate>
              </li>
              <li>
                <Translate>Frequency Analysis</Translate>
              </li>
              <li>
                <Translate>Correlation</Translate>
              </li>
              <li>
                <Translate>One/Two Sample T-test</Translate>
              </li>
              <li>
                <Translate>ANOVA</Translate>
              </li>
              <li>
                <Translate>Nonparametric Analysis</Translate>
              </li>
              <li>
                <Translate>Linear Regression</Translate>
              </li>
              <li>
                <Translate>Keplan-Meier</Translate>
              </li>
              <li>
                <Translate>Cox Regression</Translate>
              </li>
              <li>
                <Translate>Data Split</Translate>
              </li>
              <li>
                <Translate>Data Pivot</Translate>
              </li>
            </ul>
          </div>
          <Divider vertical={false} />
          <div className={styles.actionContainer}>
            <Button
              appearance="transparent"
              as="a"
              href="/docs/intro"
              disabled
            >
              <Translate>
                Explore Maspectra&apos;s potential with our documentation
              </Translate>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
