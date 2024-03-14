import { useState, useEffect } from "react";

export interface InputTextProps {
  labelTitle?: string;
  defaultValue?: string;
  updateFormValue?: (updateType: string, value: string) => void;
  updateType?: string;
  name?: string;
}

function InputText({
  labelTitle,
  defaultValue,
  updateFormValue,
  updateType,
}: InputTextProps) {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (updateFormValue && updateType) {
      updateFormValue(updateType, newValue);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {labelTitle}
      </label>
      <input
        type="text"
        name={updateType}
        value={value}
        onChange={handleInputChange}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>
  );
}

export default InputText;
