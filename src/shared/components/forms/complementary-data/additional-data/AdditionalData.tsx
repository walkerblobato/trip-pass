import { Typography, Box,  MenuItem } from '@mui/material';
import { LayoutForms } from '../../../../layouts';
import { VTextField } from '../../../../forms';
import { EnvironmentProfessions } from '../../../../environment/professions';


export const AddicionalData = () => {

  return (
    <>
      <Typography variant='h5' paddingBottom={3}>Dados Complementares</Typography>

      <Box paddingBottom={2}>
        <VTextField
          select
          fullWidth
          label='Profissão'
          name='Profissao'
        >
          {EnvironmentProfessions.PROFISSOES.map(profession => (
            <MenuItem key={profession.code} value={profession.name}>
              {profession.name}
            </MenuItem>
          ))}
        </VTextField>
      </Box>

      <Box paddingBottom={2}>
        <VTextField
          fullWidth 
          label='Email'
          name='Email'
        />
      </Box>

      <Box paddingBottom={3}>
        <VTextField
          fullWidth 
          label='Confimação de E-mail'
          name='ConfimacaoDeEmail'
        />
      </Box>
    </>
  );
};