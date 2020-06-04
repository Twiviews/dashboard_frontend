
import React from 'react';
import Radio from '@material-ui/core/Radio';
import { default as MaterialRadioGroup } from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioGroup = ({ value, options, name, label, onChange }) => (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <MaterialRadioGroup
        name={name}
        value={value}
        onChange={onChange}
        disabled
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={<Radio />}
            value={option.value}
            label={option.label}
          />
        ))}
      </MaterialRadioGroup>
    </FormControl>
  );

  export default RadioGroup;