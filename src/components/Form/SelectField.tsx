import React from "react";
import { Controller, Control } from "react-hook-form";
import { Select, theme } from "antd";
import { ErrorText } from "../Elements";

const { useToken } = theme;


type DefaultOptionType = {
    value: string,
    label: string
}
const defaultFieldNames:DefaultOptionType = {
    value: "value",
    label: "label"
}
interface SelectFieldProps {
    label?: string;
    placeholder?: string;
    control: Control<any>;
    name: string;
    options: Record<string, any>[];
    error?: string;
    showSearch?: boolean;
    size?: "large" | "middle" | "small";
    formDirection?: "row" | "column";
    disabled?: boolean; 
    required?: boolean;
    fieldNames?: any
}

const SelectField: React.FC<SelectFieldProps> = ({ label, control, name, placeholder, options, showSearch = false, error, size = "middle", formDirection = "column", disabled=false, required=false, fieldNames={defaultFieldNames} }) => {
    const errorStatus = error ? "error" : undefined;
    const { token } = useToken();
    return (
        <div className={`form-control ${formDirection}`}>
            {label && (
                <div className={`form-label-wrap ${required ? 'required' : ''}`}>
                    <label className="form-label" style={{ color: token.colorTextSecondary }}>
                        {" "}
                        {label}
                    </label>
                </div>
            )}
            <div className="input-containter">
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            disabled={disabled}
                            showSearch={showSearch}
                            onChange={value => field.onChange(value)}
                            status={errorStatus}
                            options={options}
                            placeholder={placeholder}
                            size={size}
                            style={{ width: "100%" }}
                            fieldNames={fieldNames}
                        />
                    )}
                />
                {error && <ErrorText error={error} />}
            </div>
        </div>
    );
};

export default SelectField;
