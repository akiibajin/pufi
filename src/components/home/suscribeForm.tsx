import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextEditorForm from "../global/TextEditor";
import "../../styles/components/home/emailform.scss";

export default function SuscribeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="section-form">
      <p className="top-title-form">NEWSLETTER</p>
      <h2 className="middle-title-form">SUSCRIBETE</h2>
      <p className="bottom-title-form">Y enterate de todas las novedades</p>
      <form onSubmit={onSubmit} className="email-form">
        <TextEditorForm
          name="email"
          type="email"
          register={register}
          errors={errors}
          key="email-input"
        />
        <Button type="submit">
          <ArrowForwardIcon />
        </Button>
      </form>
    </div>
  );
}
