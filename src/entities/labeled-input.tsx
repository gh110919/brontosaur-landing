import {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
} from "react";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Label = styled.label`
  font-family: Raleway;
  font-size: ${ptw(18)};
  font-weight: 500;
  line-height: ${ptw(24)};
  text-align: left;

  @media (max-width: 768px) {
    width: ${ptw(648, 768)};
    height: ${ptw(24, 768)};
    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

const Input = styled.input`
  width: ${ptw(400)};
  height: ${ptw(50)};
  padding: ${ptw(10)} ${ptw(20)};
  border-radius: ${ptw(10)};

  background: #ffffff;

  font-family: Raleway;
  font-size: ${ptw(18)};
  font-weight: 500;
  line-height: ${ptw(24)};
  text-align: left;

  &:focus {
    outline: ${ptw(1)} solid black;
  }

  &:invalid {
    outline: ${ptw(1)} solid red;
  }

  @media (max-width: 768px) {
    width: ${ptw(648, 768)};
    height: ${ptw(60, 768)};
    padding: ${ptw(10, 768)} ${ptw(20, 768)};
    border-radius: ${ptw(10, 768)};

    font-size: ${ptw(18, 768)};
    line-height: ${ptw(24, 768)};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ptw(10)};

  @media (max-width: 768px) {
    gap: ${ptw(10, 768)};
  }
`;

type TProps = {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  pattern: string;
  title: string;
  setInputState: Dispatch<SetStateAction<any>>;
};

export default function LabeledInput(props: TProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setInputState((prev: any) => ({
      ...prev!,
      [props.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        required
        type={props.type}
        name={props.name}
        id={props.name}
        pattern={props.pattern}
        title={props.title}
        onChange={handleInputChange}
      />
    </Container>
  );
}
