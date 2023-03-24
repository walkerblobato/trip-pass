import { FormControlLabel, Checkbox } from '@mui/material';

interface IVCheckbox {
  label: string;
}
export const VCheckbox: React.FC<IVCheckbox> = ({ label, ...rest }) => {
  return (
    <FormControlLabel {...rest} control={<Checkbox />} label={label} />
  );
};