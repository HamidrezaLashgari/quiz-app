import React, { useState } from 'react'

import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material'

const SelectField = (props) => {
  const { label, options } = props

  const [value, setvalue] = useState('')

  const handleChange = (e) => {
      setvalue(e.target.value)
  }

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectField
