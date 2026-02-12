import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Form, Path } from "react-hook-form";

// accepts a generic type T that extends FieldValues, which is a type from react-hook-form representing the shape of form data.
// This allows the FormField component to be flexible and work with any form data structure defined by the parent component.
interface FormFieldProps<T extends FieldValues> {
  control: Control<T>; // The control object from react-hook-form, used to manage form state and validation.
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className="input" placeholder={placeholder} type={type} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
