import { Typography, Box, Grid, MenuItem, Button } from '@mui/material';

import { VTextField } from '../../../../forms';
import { EnvironmentForms } from '../../../../environment/forms';
import { InformationButton } from '../../components/InformationButton';


export const PreviousNames = () => {
  
  return (
    <>
      <Box display='flex' paddingBottom={2}>
        <Typography variant='h5' paddingRight={1}>Nomes Anteriores</Typography>
        <InformationButton />
      </Box>

      <Typography variant='body2' paddingBottom={2}>Para cada nome anterior, digite o nome, escolha o motivo da mudança e clique em Adicionar.</Typography>

      <Box paddingBottom={2}>
        <Grid container >
          
          <Grid item xs={8}>
            <VTextField
              fullWidth
              label='Nome anterior'
              name='NomeAnterior'
            />
          </Grid>

        </Grid>
      </Box>

      <Box >
        <Grid container spacing={2}>
          
          <Grid item xs={8}>
            <VTextField
              select
              fullWidth
              label='Motivo da mudança'
              name='MotivoMudança'
            >
              {EnvironmentForms.REASONS_NAME_CHANGE.map(reason => (
                <MenuItem key={reason.value} value={reason.value}>
                  {reason.label}
                </MenuItem>
              ))}
            </VTextField>
          </Grid>

          <Grid item xs={4}>
            <Button 
              fullWidth
              variant='contained'
              color='primary'
              size='large'
              sx={{
                height:'100%',
              }}
            >
              Adicionar
            </Button>
          </Grid>

        </Grid>
      </Box>
    </>
  );
};