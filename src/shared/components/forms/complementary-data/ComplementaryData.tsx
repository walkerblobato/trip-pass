import { LayoutForms } from '../../../layouts';
import { AddicionalData } from './additional-data/AdditionalData';
import { ApplicantAddress } from './applicant-address/ApplicantAddress';


export const ComplementaryData = () => {
  
  return (
    <LayoutForms>
      <AddicionalData />
      <ApplicantAddress />
    </LayoutForms>
  );
};