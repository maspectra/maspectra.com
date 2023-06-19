import React from "react";

import quoteCardCss from "@site/src/components/quote-card/styles.module.css";

export interface IQuoteCardProps {
  content: React.ReactNode;
  caption: {
    primary: React.ReactNode;
    secondary?: React.ReactNode;
  };
}

const QuoteCard: React.FC<IQuoteCardProps> = ({ content, caption }) => {
  return (
    <div className={quoteCardCss.quoteCardContainer}>
      <div className={quoteCardCss.quotationMark}>
        <span>“</span>
      </div>
      <div className={quoteCardCss.quotationContent}>{content}</div>
      <div className={quoteCardCss.quotationCaptionContainer}>
        <div className={quoteCardCss.quotationCaptionStack}>
          <div className={quoteCardCss.quotationCaptionPrimary}>
            {caption.primary}
          </div>
          {caption.secondary && (
            <div className={quoteCardCss.quotationCaptionSecondary}>
              {caption.secondary}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
