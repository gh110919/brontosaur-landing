"use client";

import styled from "styled-components";
import LabeledInput from "./labeled-input";
import { ptw } from "SHARED/pixel-recalculate";
import { useEffect, useState } from "react";
import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { inputsSlice } from "SHARED/global-state/slices/inputs";

const InputList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${ptw(20)} ${ptw(24)};

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: ${ptw(20, 768)};
  }
`;

// костыль
const set = "[A-Za-z0-9._-]{1,64}";
const emailRegex = `^${set + "@" + set + "\\" + "." + "[A-Za-z]{2,8}"}$`;

const inputsArray = [
  {
    name: "establishment",
    label: "Название заведения",
    type: "text",
    pattern: "^[a-zA-ZА-ЯЁа-яё ]{4,64}$",
    title:
      "Название заведения должно содержать только латинские и кириллические буквы, знак пробела, без цифр и спецсимволов! Обязательное поле, от 4 до 64 символов!",
  },
  {
    name: "fio",
    label: "Фамилия и имя контактного лица",
    type: "text",
    pattern: "^[А-ЯЁа-яё ]{2,64}$",
    title:
      "Фамилия и имя контактного лица должно содержать только кириллические буквы, знак пробела, без цифр и спецсимволов! Обязательное поле, от 2 до 64 символов!",
  },
  {
    name: "tel",
    label: "Телефон",
    type: "tel",
    pattern: "^(?:[+]7|8)9[0-9]){9}$",
    title:
      "Телефон должен начинаться с +7 или с 8, содержать только цифры и/или содержать знак плюса в начале! Обязательное поле, 11 или 12 символов!",
  },
  {
    name: "email",
    label: "Почта",
    type: "email",
    pattern: emailRegex,
    title:
      "Почта: Имя должно содержать только буквы, цифры, точки, подчеркивания, проценты, плюсы или дефисы. Затем должен следовать символ-разделитель ‘@’. Доменная часть должна содержать одну или более букв, цифр, точек или дефисов. После символа-разделителя ‘.’ доменная зона должна содержать две или более букв. Поле обязательно для заполнения и должно содержать не менее 6 символов",
  },
];

export default function InputListMap() {
  const dispatch = useDispatch_();
  const inputs = useSelector_((s) => s.inputsSlice);

  const [stateInput, setInputState] = useState<{
    establishment: string;
    fio: string;
    tel: string;
    email: string;
  }>();

  useEffect(() => {
    dispatch(
      inputsSlice.actions.inputsRM({
        ...inputs,
        establishment: stateInput?.establishment,
        fio: stateInput?.fio,
        tel: stateInput?.tel,
        email: stateInput?.email,
      })
    );
  }, [dispatch, inputs, stateInput]);

  return (
    <InputList>
      {inputsArray.map((e, i) => {
        return (
          <li key={i}>
            <LabeledInput
              type={e.type}
              name={e.name}
              label={e.label}
              pattern={e.pattern}
              title={e.title}
              setInputState={setInputState}
            ></LabeledInput>
          </li>
        );
      })}
    </InputList>
  );
}
