import { InputStyle, TitleInputStyle } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  title: string;
}


export function Input({ title, ref, ...props }: InputProps) {

    return (
      <>
        <TitleInputStyle>{title}</TitleInputStyle>
        <InputStyle ref={ref} {...props} />
      </>
    )
}