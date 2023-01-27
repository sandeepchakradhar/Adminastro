import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Inputs = () => {
  return (
    <div>
      <TextField
        sx={{ maxWidth: "400px" }}

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}

        variant="outlined"
      />
    </div>
  )
}

export default Inputs