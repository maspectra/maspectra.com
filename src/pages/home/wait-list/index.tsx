import React from "react";

import { Button } from "@fluentui/react-components";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";

import waitListCss from "@site/src/pages/home/wait-list/styles.module.css";

import sharedCss from "@site/src/pages/home/shared.module.css";

const WaitList: React.FC = () => {
    return (
        <div className={waitListCss.waitList}>
            <div
                className={clsx(
                    waitListCss.waitListContent,
                    waitListCss.waitListContentStack
                )}
            >
                <div className={waitListCss.waitListTextContainer}>
                    <h2 className={sharedCss.titleH2}>
                        <Translate>Ready to play with Maspectra?</Translate>
                    </h2>
                    <p className={sharedCss.text}>
                        <Translate>
                            Maspectra is still a work in progress, but it will
                            be generally available soon.
                        </Translate>
                        <Translate>
                            You are welcome to join our wait list and we will
                            notify you when it is ready.
                        </Translate>
                    </p>
                </div>
                <Button appearance="primary" size="large">
                    <Translate>Sign Up and Join Wait List</Translate>
                </Button>
            </div>
        </div>
    );
};

export default WaitList;
