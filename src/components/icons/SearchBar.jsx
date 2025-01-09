import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import sampledata from '../../data/sampledata'

export default function SearchBar() {
    return (
        <Autocomplete
        
        disableClearable

        size='medium'
        options={sampledata.map((option) => option.label)}
        style={{ width: '40%', paddingRight: '100px' }}
        renderInput={(params) => (
        <TextField
        {...params}
        label="검색어 입력"
        slotProps={{
          input: {
            ...params.InputProps,
            type: 'search',
          },
        }}
      />
    )}
        />
    );

}