import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

const SelectComponent = ({ names }) => {
	const [selectValue, setSelectValue] = React.useState('');

	const handleChange = event => {
		setSelectValue(event.target.value);
	};

	return (
		<FormControl sx={{ m: 1, width: 300 }}>
			<Select
				displayEmpty
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={selectValue}
				onChange={handleChange}
				input={<OutlinedInput />}
			>
				{names.map(name => (
					<MenuItem key={name} value={name}>
						{name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectComponent;
