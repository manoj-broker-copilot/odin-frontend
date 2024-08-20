import { FC, ReactNode } from "react";
import { Controller, Control } from "react-hook-form";
import { Input, theme } from "antd";
import { ErrorText } from "../Elements";

const { useToken } = theme;

interface InputFieldProps {
    label?: string;
    type?: "text" | "number" | "password";
    placeholder?: string;
    control: Control<any>;
    name: string;
    error?: string;
    readonly?: boolean;
    disabled?: boolean;
    variant?: "outlined" | "borderless" | "filled";
    prefix?: string | ReactNode;
    suffix?: string | ReactNode;
    size?: "large" | "middle" | "small";
    formDirection?: "row" | "column";
    required?: boolean;
}

const InputField: FC<InputFieldProps> = ({
    name,
    control,
    label,
    type = "text",
    placeholder,
    variant = "outlined",
    readonly = false,
    disabled = false,
    error,
    prefix,
    suffix,
    size = "middle",
    formDirection = "column",
    required = false,
}) => {
    const errorStatus = error ? "error" : undefined;
    const { token } = useToken();
    return (
        <div className={`form-control ${formDirection}`}>
           
                {label && (
                    <div className={`form-label-wrap ${required ? 'required' : ''}`}>
                        <label className="form-label" style={{ color: token.colorTextSecondary }}>
                            {label}
                        </label>
                    </div>
                )}
                <div className="input-containter">
                    <Controller
                        name={name}
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                prefix={prefix}
                                suffix={suffix}
                                type={type}
                                readOnly={readonly}
                                variant={variant}
                                placeholder={placeholder}
                                status={errorStatus}
                                size={size}
                                disabled={disabled}
                            />
                        )}
                    />
                    {error && <ErrorText error={error} />}
                </div>
            
        </div>
    );
};

export default InputField;
