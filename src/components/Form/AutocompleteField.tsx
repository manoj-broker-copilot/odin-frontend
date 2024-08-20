import React from "react";
import { Controller, Control } from "react-hook-form";
import { AutoComplete, theme } from "antd";
import { ErrorText } from "../Elements";

const { useToken } = theme;

interface AutocompleteFieldProps {
    label?: string;
    placeholder?: string;
    control: Control<any>;
    name: string;
    options: Array<{ label: string | JSX.Element | React.ReactNode; value: any; disabled?: boolean }>;
    error?: string;
    size?: "large" | "middle" | "small";
    formDirection?: "row" | "column";
    defaultValue?: string;
    onSearch: (value: string) => void;
    disabled?: boolean;
    onChange? : (value: string) => void;
}

const AutocompleteField: React.FC<AutocompleteFieldProps> = ({
    label,
    control,
    name,
    placeholder,
    options,
    error,
    size = "middle",
    formDirection = "column",
    defaultValue,
    onSearch,
    disabled=false,
    onChange
}) => {
    const errorStatus = error ? "error" : undefined;
    const { token } = useToken();
    // const [displayValue, setDisplayValue] = useState<any>("");
    const handleSearch = (value: string) => {
        // setDisplayValue(value);
        onSearch(value);
    };
    return (
        <div className={`form-control ${formDirection}`}>
            {label && (
                <div className="form-label-wrap">
                    <label className="form-label" style={{ color: token.colorTextSecondary }}>
                        {label}
                    </label>
                </div>
            )}
            <div className="input-containter">
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <AutoComplete
                            {...field}
                            // value={displayValue}
                            options={options}
                            onSelect={(value, option) => {
                                field.onChange(value);

                                if(onChange) {
                                    onChange(value);
                                }
                            }}
                            onSearch={handleSearch} 
                            placeholder={placeholder}
                            status={errorStatus}
                            size={size}
                            disabled={disabled}
                            style={{ width: "100%" }}
                        />
                    )}
                />
                {error && <ErrorText error={error} />}
            </div>
        </div>
    );
};

export default AutocompleteField;
