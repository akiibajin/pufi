import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import "../../styles/components/global/textEditor.scss"
export interface TextEditorForControlled {
  name: string;
  type: string;
  errors: FieldErrors<FieldValues>
  register: UseFormRegister<FieldValues>;
}
export default function TextEditorForm({
  name,
  register,
  type,
  errors,
}: TextEditorForControlled) {
  return (
    <section className="input-container">
      <input type={type} {...register(name, {required:true, pattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g})}  placeholder="Ingresa tu mail" className="email-editor"/>
      {errors[name]?.type === "required" && <p className="text-helper">The email is required D:</p>}
      {errors[name]?.type === "pattern" && <p className="text-helper">Email Incorrect</p>}
    </section>
  );
}
