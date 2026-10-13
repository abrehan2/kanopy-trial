import { CASE_REVIEW_COPY } from '@/features/home/schemas/case-review';

type CaseReviewHeadingProps = {
  showAlert?: boolean;
};

export function CaseReviewHeading({ showAlert }: CaseReviewHeadingProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <h2 className="font-heading text-title font-normal text-pine max-compact:text-title-sm">
        Free case review
      </h2>
      <p className="font-jost text-hint font-normal text-dust max-compact:hidden">
        Fields marked * are required.
      </p>
      {showAlert ? (
        <p className="font-jost text-alert font-medium text-destructive">{CASE_REVIEW_COPY.formAlert}</p>
      ) : null}
    </div>
  );
}
