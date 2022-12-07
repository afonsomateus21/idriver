import { Button } from "./styles";

interface ActionButtonProps {
  buttonTitle: string;
  onClick: () => void;
}

export function ActionButton({ buttonTitle, onClick }: ActionButtonProps) {
  return (
    <Button onClick={onClick}>
      { buttonTitle }
    </Button>
  );
}