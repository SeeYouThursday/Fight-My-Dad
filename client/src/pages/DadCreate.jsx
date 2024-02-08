import { useMutation } from 'react';
import Btn from '../Components/Btn'

const DadCreate = () => {
  //card component
  //closebtn componet - top right
  //btn component - submit
  //submit logic - need to complete
  const handleDadSubmit = () => {
    const [createDad] = useMutation(CREATE_DAD);
  };

  return (
  <>
   <Btn />
  </>
  );
};

export default DadCreate;
