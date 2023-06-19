import React from "react";

import clsx from "clsx";
import { Image, TabList, Tab, TabListProps } from "@fluentui/react-components";
import {
    DataUsageEdit24Regular,
    DataUsageEdit24Filled,
    DocumentTable24Filled,
    DocumentTable24Regular,
    Flowchart24Filled,
    Flowchart24Regular,
    bundleIcon
} from "@fluentui/react-icons";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from "@docusaurus/Translate";

import styles from "@site/src/pages/home/analysis/screenshots/styles.module.css";
import sharedCss from "@site/src/pages/home/shared.module.css";

type ScreenshotTypes = "workflow" | "summary-tables" | "plot-editor";

const FlowChartIcon = bundleIcon(Flowchart24Filled, Flowchart24Regular);
const DocumentTableIcon = bundleIcon(
    DocumentTable24Filled,
    DocumentTable24Regular
);
const DataUsageEditIcon = bundleIcon(
    DataUsageEdit24Filled,
    DataUsageEdit24Regular
);

const AnalysisScreenshots: React.FC = () => {
    const [selectedValue, setSelectedValue] =
        React.useState<ScreenshotTypes>("workflow");

    const onTabSelect = React.useCallback<TabListProps["onTabSelect"]>(
        (e, data) => {
            setSelectedValue(data.value as ScreenshotTypes);
        },
        []
    );

    const workflowImgUrl = useBaseUrl(
        "/img/screenshots/workflow-visualization.png"
    );
    const summaryTablesImgUrl = useBaseUrl(
        "/img/screenshots/summary-tables.png"
    );
    const plotEditorImgUrl = useBaseUrl("/img/screenshots/plot-editor.png");

    return (
        <div className={styles.analysisScreenshots}>
            <div
                className={clsx(
                    styles.analysisScreenshotsContent,
                    styles.analysisScreenshotsContentStack
                )}
            >
                <TabList
                    selectedValue={selectedValue}
                    onTabSelect={onTabSelect}
                    vertical
                    appearance="subtle"
                    size="large"
                    className={styles.screenshotTabs}
                >
                    <Tab
                        value="workflow"
                        className={styles.screenshotTabButton}
                        icon={<FlowChartIcon />}
                    >
                        <p className={sharedCss.text}>
                            <Translate>Workflow Visualization</Translate>
                        </p>
                    </Tab>
                    <Tab
                        value="summary-tables"
                        className={styles.screenshotTabButton}
                        icon={<DocumentTableIcon />}
                    >
                        <p className={sharedCss.text}>
                            <Translate>Summary Tables</Translate>
                        </p>
                    </Tab>
                    <Tab
                        value="plot-editor"
                        className={styles.screenshotTabButton}
                        icon={<DataUsageEditIcon />}
                    >
                        <p className={sharedCss.text}>
                            <Translate>Plot Editor</Translate>
                        </p>
                    </Tab>
                </TabList>
                {selectedValue === "workflow" && (
                    <div>
                        <div
                            className={clsx(
                                styles.analysisScreenshotsTextContainer,
                                styles.analysisScreenshotsTextContainerWidth
                            )}
                        >
                            <h2 className={sharedCss.titleH2}>
                                <Translate>Workflow Visualization</Translate>
                            </h2>
                            <p
                                className={clsx(
                                    sharedCss.text,
                                    sharedCss.paragraph
                                )}
                            >
                                <Translate>
                                    View your workflow in a single glance.
                                </Translate>
                                <Translate>
                                    Present your workflow to your team and
                                    clients with ease. No more messy
                                    flowcharts!
                                </Translate>
                            </p>
                        </div>
                        <div
                            className={clsx(
                                styles.analysisScreenshotsImageContainer,
                                styles.analysisScreenshotsImageContainerWidth
                            )}
                        >
                            <Image
                                className={styles.analysisScreenshotsImage}
                                src={workflowImgUrl}
                                alt="workflow-visualization"
                            />
                        </div>
                    </div>
                )}
                {selectedValue === "summary-tables" && (
                    <div>
                        <div
                            className={clsx(
                                styles.analysisScreenshotsTextContainer,
                                styles.analysisScreenshotsTextContainerWidth
                            )}
                        >
                            <h2 className={sharedCss.titleH2}>
                                <Translate>Summary Tables</Translate>
                            </h2>
                            <p
                                className={clsx(
                                    sharedCss.text,
                                    sharedCss.paragraph
                                )}
                            >
                                <Translate>
                                    Understand your analysis results in
                                    prettier-formatted summary tables.
                                </Translate>
                                <Translate>
                                    Export or copy summary tables with single
                                    click.
                                </Translate>
                            </p>
                        </div>
                        <div
                            className={clsx(
                                styles.analysisScreenshotsImageContainer,
                                styles.analysisScreenshotsImageContainerWidth
                            )}
                        >
                            <Image
                                className={styles.analysisScreenshotsImage}
                                src={summaryTablesImgUrl}
                                alt="summary-tables"
                            />
                        </div>
                    </div>
                )}
                {selectedValue === "plot-editor" && (
                    <div>
                        <div
                            className={clsx(
                                styles.analysisScreenshotsTextContainer,
                                styles.analysisScreenshotsTextContainerWidth
                            )}
                        >
                            <h2 className={sharedCss.titleH2}>
                                <Translate>Plot Editor</Translate>
                            </h2>
                            <p
                                className={clsx(
                                    sharedCss.text,
                                    sharedCss.paragraph
                                )}
                            >
                                <Translate>
                                    Better plotting experience with embedded
                                    powerful interactive plot editor.
                                </Translate>
                                <Translate>
                                    Customizing plot with
                                    border/color/point(line) type/layout and
                                    more as you want.
                                </Translate>
                            </p>
                        </div>
                        <div
                            className={clsx(
                                styles.analysisScreenshotsImageContainer,
                                styles.analysisScreenshotsImageContainerWidth
                            )}
                        >
                            <Image
                                className={styles.analysisScreenshotsImage}
                                src={plotEditorImgUrl}
                                alt="plot-editor"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnalysisScreenshots;
