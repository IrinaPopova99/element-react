import React from 'react';
import { Controller } from "react-hook-form";
import { TextField } from '@material-ui/core';
import './TextFields.scss';

function TextFields({ name, label, control, type }) {
    return (
        <div className="text-field">
            <Controller
                control={control}
                name={name}
                render={({ field: props }) => (
                    <TextField
                        className="text-field__item"
                        type={type}
                        onChange={(e) => props.onChange(e.target.value)}
                        required
                        variant="outlined"
                        margin="dense"
                        label={label}
                    />
                )}
            />
        </div>
    )
}

export default TextFields;
