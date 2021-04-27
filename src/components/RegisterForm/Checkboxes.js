import React, { useState } from 'react';
import { Controller } from "react-hook-form";
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useListProgram } from '../../utils/hooks/useListProgram';

function Checkboxes({ name, value, register, control }) {
    const [program, setProgram] = useState({});
    const [checked, setChecked] = useState(true);

    // const programs = useListProgram();

    const handleChange = (event) => {
        setProgram({ ...program, [event.target.name]: event.target.checked });
    };
    return (
        // <FormControlLabel
        //     value={value}
        //     control={
        <Controller
            // render={() => <FormControlLabel
            //     // value={value}
            //     control={<Checkbox />}
            //     label={value}
            // />}
            render={() => <Checkbox
                onClick={handleChange}
                value={program.name}
                name={value}
                // inputRef={(ref) => {
                //     if (!ref) return;
                //     register({
                //         name: value,
                //         value: true,
                //     });
                // }}

            />}
            name={value}
            type="checkbox"

            value={program}
            register={register}
            control={control}
        // label={value}
        />
        // }
        // label={value}
        // />
    )
}

export default Checkboxes;


