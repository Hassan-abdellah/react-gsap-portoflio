import { Input } from "../ui/input.tsx";
import { Label } from "../ui/label.tsx";
import { Textarea } from "../ui/textarea.tsx";

const FormController = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  isTextArea = false,
}: {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isTextArea?: boolean;
}) => {
  return (
    <div className="grid gap-3">
      <Label htmlFor={id} className="text-ghost-white">
        {label}
      </Label>
      {isTextArea ? (
        <Textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="input-field"
        />
      ) : (
        <Input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder={placeholder}
          className="input-field"
        />
      )}
    </div>
  );
};

export default FormController;
