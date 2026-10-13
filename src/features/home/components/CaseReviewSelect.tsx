import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type CaseReviewSelectProps = {
  id: string;
  placeholder: string;
  value: string;
  options: readonly string[];
  invalid?: boolean;
  onChange: (value: string) => void;
};

export function CaseReviewSelect({
  id,
  placeholder,
  value,
  options,
  invalid,
  onChange,
}: CaseReviewSelectProps) {
  return (
    <Select key={value || 'empty'} value={value || undefined} onValueChange={onChange}>
      <SelectTrigger id={id} aria-invalid={invalid}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
