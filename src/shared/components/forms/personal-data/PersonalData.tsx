import { LayoutForms } from '../../../layouts';
import { Birthplace } from './birthplace/Birthplace';
import { Personal } from './personal/Personal';
import { PreviousNames } from './previous-names/PreviousNames';


export const PersonalData = () => {
  return (
    <>
      <LayoutForms>
        <Personal />
        <Birthplace />
        <PreviousNames />
      </LayoutForms>
    </>
  );
};