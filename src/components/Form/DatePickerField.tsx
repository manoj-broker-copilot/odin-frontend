import React from "react";
import dayjs from "dayjs";
import { Controller, Control } from "react-hook-form";
import { DatePicker, theme } from "antd";
import { ErrorText } from "../Elements";

const { useToken } = theme;

interface DatePickerFieldProps {
    label?: string;
    control: Control<any>;
    name: string;
    error?: string;
    required?: boolean;
    formDirection?: "row" | "column";
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ label, control, name, error, formDirection = "column", required = false, }) => {
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
                        render={({ field }) => <DatePicker     style={{ width: '100%' }} status={errorStatus} onChange={(date, dateString) => 
                            field.onChange(date)} 
                            value={field.value ? dayjs(field.value) : null} />}
                    />
                    {error && <ErrorText error={error} />}
               </div>
        </div>
    );
};

export default DatePickerField;
