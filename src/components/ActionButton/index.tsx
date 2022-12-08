import { Button } from "./styles";

interface ActionButtonProps {
  buttonTitle: string;
  onClick?: () => void;
  type?: string;
  form?: string;
}

export function ActionButton({ buttonTitle, onClick, ...rest }: ActionButtonProps) {
  return (
    <Button onClick={onClick}>
      { buttonTitle }
    </Button>
  );
}