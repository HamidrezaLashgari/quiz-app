import React, { useState } from 'react'

import { FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material'
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from '../../src/redux/actions'
import { useDispatch } from 'react-redux'

const SelectField = (props) => {
  const { label, options } = props

  const [value, setvalue] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setvalue(e.target.value)
    switch (label) {
      case 'Category':
        dispatch(handleCategoryChange(e.target.value))
        break
      case 'Difficulty':
        dispatch(handleDifficultyChange(e.target.value))
        break
      case 'Type':
        dispatch(handleTypeChange(e.target.value))
        break
      case 'Category':
        dispatch(handleCategoryChange(e.target.value))
        break
      default:
        return
    }
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
