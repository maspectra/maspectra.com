import React from "react";

import clsx from "clsx";
import { Image, TabList, Tab, TabListProps } from "@fluentui/react-components";
import {
    DataUsage24Regular,
    DataUsageEdit24Filled,
    DocumentTable24Filled,
    DocumentTable24Regular,
    Flowchart24Filled,
    Flowchart24Regular,
    bundleIcon
} from "@fluentui/react-icons";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate from "@docusaurus/Translate";

import styles from "@site/src/pages/home/masmod/screenshots/styles.module.css";
import sharedCss from "@site/src/pages/home/shared.module.css";

type ScreenshotTypes = "workflow" | "summary-tables" | "plot-editor";

const FlowChartIcon = bundleIcon(Flowchart24Filled, Flowchart24Regular);
const DocumentTableIcon = bundleIcon(
    DocumentTable24Filled,
    DocumentTable24Regular
);
const DataUsageEditIcon = bundleIcon(
    DataUsageEdit24Filled,
    DataUsage24Regular
);

const MasmodScreenshots: React.FC = () => {
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
        <div className={styles.masmodScreenshots}>
            <div
                className={clsx(
                    styles.masmodScreenshotsContent,
                    styles.masmodScreenshotsContentStack
                )}
            >
                <TabList
                    selectedValue={selectedValue}
                    onTabSelect={onTabSelect}
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
                                styles.masmodScreenshotsTextContainer,
                                styles.masmodScreenshotsTextContainerWidth
                            )}
                        >
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
                                styles.masmodScreenshotsImageContainer,
                                styles.masmodScreenshotsImageContainerWidth
                            )}
                        >
                            <Image
                                className={styles.masmodScreenshotsImage}
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
                                styles.masmodScreenshotsTextContainer,
                                styles.masmodScreenshotsTextContainerWidth
                            )}
                        >
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
                                styles.masmodScreenshotsImageContainer,
                                styles.masmodScreenshotsImageContainerWidth
                            )}
                        >
                            <Image
                                className={styles.masmodScreenshotsImage}
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
                                styles.masmodScreenshotsTextContainer,
                                styles.masmodScreenshotsTextContainerWidth
                            )}
                        >
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
                                styles.masmodScreenshotsImageContainer,
                                styles.masmodScreenshotsImageContainerWidth
                            )}
                        >
                            <Image
                                className={styles.masmodScreenshotsImage}
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

export default MasmodScreenshots;
