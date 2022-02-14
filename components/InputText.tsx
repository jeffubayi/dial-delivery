import { useRef } from "react";

type InputTextProps = {
  id: string;
  children: React.ReactNode;
  required: boolean;
  onChange?: any;
};

export function InputText({
  id,
  children,
  required,
  onChange,
}: InputTextProps) {
  const textInputRef = useRef<HTMLInputElement>();

  function handleChange() {
    onChange(textInputRef.current.value);
  }

  return (
    <section>
      <label htmlFor={id}>
        {children} {!required && <small>optional</small>}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        required={required}
        ref={textInputRef}
        onChange={handleChange}
      />
    </section>
  );
}
