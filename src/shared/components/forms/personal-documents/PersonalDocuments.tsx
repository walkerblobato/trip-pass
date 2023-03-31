import { Box } from '@mui/material';
import { LayoutForms } from '../../../layouts';
import { BirthCertificate } from './birth-certificate/BirthCertificate';
import { Cpf } from './cpf/Cpf';
import { Identification } from './identification/Identification';
import { PreviousPassport } from './previous-passport/PreviousPassport';


export const PersonalDocuments = () => {
  return (
    <>
      <LayoutForms>
        <Identification />
        <Cpf />
        <BirthCertificate />
        <PreviousPassport />
      </LayoutForms>
    </>
  );
};