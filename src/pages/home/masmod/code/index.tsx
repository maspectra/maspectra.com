import React from "react";

import clsx from "clsx";
import CodeBlock from "@theme/CodeBlock";
import Translate from "@docusaurus/Translate";
import BrowserOnly from "@docusaurus/BrowserOnly";

import styles from "@site/src/pages/home/masmod/code/styles.module.css";
import sharedCss from "@site/src/pages/home/shared.module.css";

const MasmodCodeSection: React.FC = () => {
  return (
    <div className={styles.masmodCode}>
      <div
        className={clsx(
          styles.masmodCodeContent,
          styles.masmodCodeContentStack
        )}
      >
        <div className={styles.masmodCodeCodeBlockContainerWidth}>
          <BrowserOnly>
            {() => (
              <CodeBlock language="python" title="demo.py" showLineNumbers>
                {`class DemoPopPKProblem(Module):
    def __init__(self) -> None:
        super().__init__()

        # pk parameters
        self.tv_v = theta(8.06, bounds=(0.01, 20))
        self.tv_cl = theta(0.131, bounds=(0.01, 1))
        self.tv_ka = theta(1.325, bounds=(0.01, None))
        self.tv_alag = theta(1.03, bounds=(0.01, 24))
        self.eta_v = omega(0.016744)
        self.eta_cl = omega(0.0662868)
        self.eta_ka = omega(0.452064)
        self.eta_alag = omega(0.302627)
        self.eps_prop_pk = sigma(0.00478)
        self.eps_add_pk = sigma(0.135)

        # Compartments
        self.dose_cmt = compartment(default_dose=True)
        self.central_cmt = compartment(default_obs=True)

        self.wt, self.dvid = column(['WT', 'DVID'])

    def pred(self) -> Expression:
        cl = self.tv_cl * (self.wt / 70)**0.75 * exp(self.eta_cl)  # Clearance
        v = self.tv_v * (self.wt / 70) * exp(self.eta_v)  # Volume
        ka = self.tv_ka * exp(self.eta_ka)  # Absorption rate
        alag = self.tv_alag * exp(self.eta_alag)  # Absorption lag time
        k20 = cl / v

        self.dose_cmt.alag = alag  # Alag on dosing compartment
        cp = self.central_cmt.A / v  # Central compartment concentration
        self.dose_cmt.dAdt = -ka * self.dose_cmt.A  # Dose compartment dynamics
        self.central_cmt.dAdt = ka * self.dose_cmt.A - k20 * self.central_cmt.A  # Central compartment dynamics
        y = cp * (1 + self.eps_prop_pk) + self.eps_add_pk  # Additive and proportional error
        return y

model = PopModel(DemoPopPKProblem, data=data)
fit_result = model.fit(FOCEi)`}
              </CodeBlock>
            )}
          </BrowserOnly>
        </div>
        <div
          className={clsx(
            styles.masmodCodeTextContainer,
            styles.masmodCodeTextContainerWidth
          )}
        >
          <h2 className={sharedCss.titleH2}>
            📚 <Translate>Learnability</Translate>
          </h2>
          <p className={clsx(sharedCss.text, sharedCss.paragraph)}>
            <Translate
              values={{
                masmod: <b>masmod</b>
              }}
            >
              {
                "Using {masmod} is as simple as writing a Python script. The syntax is designed to be intuitive and easy to learn. Any experienced Python user can start using {masmod} in a few minutes."
              }
            </Translate>
          </p>
          <h2 className={sharedCss.titleH2}>
            📖 <Translate>Readability</Translate>
          </h2>
          <p className={clsx(sharedCss.text, sharedCss.paragraph)}>
            <Translate values={{ masmod: <b>masmod</b> }}>
              {
                "{masmod} is easy to read and understand. The syntax is designed to be as close as possible to the mathematical notation used in pharmacometrics."
              }
            </Translate>
          </p>
          <h2 className={sharedCss.titleH2}>
            🔌 <Translate>Extensibility</Translate>
          </h2>
          <p className={clsx(sharedCss.text, sharedCss.paragraph)}>
            <Translate values={{ masmod: <b>masmod</b> }}>
              {
                "{masmod} is designed to be extensible. You can easily reach out to the underlying Python code to add new methodology/algorithm or to customize the behavior of the library."
              }
            </Translate>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasmodCodeSection;
