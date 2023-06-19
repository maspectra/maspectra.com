import React from "react";
import Translate from "@docusaurus/Translate";

import quoteSectionCss from "@site/src/pages/home/quote-section/styles.module.css";
import QuoteCard from "@site/src/components/quote-card";

const QuoteSection: React.FC = () => {
  const [sectionWidth, setSectionWidth] = React.useState("100%");

  const contentContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // use this trick since overflow-x cannot be handled with css
    setSectionWidth(`${contentContainerRef.current.scrollWidth}px`);
  }, []);

  return (
    <div className={quoteSectionCss.quoteSection}>
      <div className={quoteSectionCss.quoteBg} style={{ width: sectionWidth }}>
        <div className={quoteSectionCss.bgBrand} />
        <div className={quoteSectionCss.bgBlank} />
      </div>
      <div className={quoteSectionCss.quoteContent} ref={contentContainerRef}>
        <QuoteCard
          content={
            <p>
              <Translate>
                It is proposed that simulation has a much broader potential to
                aid in the clinical development, regulatory review,
                commercialization, and medical application process.
              </Translate>
            </p>
          }
          caption={{
            primary: "Lewis B. Sheiner",
            secondary: <Translate>Founder of MIDD</Translate>
          }}
        />

        <QuoteCard
          content={
            <p>
              <Translate>
                It is proposed that simulation has a much broader potential to
                aid in the clinical development, regulatory review,
                commercialization, and medical application process.
              </Translate>
            </p>
          }
          caption={{
            primary: "Lewis B. Sheiner"
          }}
        />
      </div>
    </div>
  );
};

export default QuoteSection;
