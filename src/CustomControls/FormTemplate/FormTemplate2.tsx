import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';

const FormTemplate2 = ({ schema, formFields }: any) => {
    const { handleSubmit } = useFormApi();
  
  return (
    <form onSubmit={handleSubmit} style={{"padding":"2rem"}}>

        { schema.title }
        { formFields }
      </form>
    )
}
export default FormTemplate2;