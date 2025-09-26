import './form-event.css';
import { FormField } from "../FormField";
import { FormLabel } from "../FormLabel";
import { FormTitle } from "../FormTitle";
import { FormInput } from "../FormInput";

export function FormEventCreate() {
    return (
        <form className='form-event-create'>
            <FormTitle>
                Preencha para criar um evento:
            </FormTitle>

            <FormField>
                <FormLabel htmlFor="name">
                    Qual o nome do evento?
                </FormLabel>

                <FormInput type="text" id="name" placeholder='Summer dev hits' />
            </FormField>
        </form>
    )
}