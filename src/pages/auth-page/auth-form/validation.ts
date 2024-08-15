const REQUIRED = "required to fill";

export const loginValidation = {
  required: REQUIRED,
  validate: (value: string) => {
    if (/[а-яА-ЯЁё]/.test(value)) {
      return "Should not content cyrylic letters ";
    }
    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED,
  validate: (value: string) => {
    if (value.length < 8) {
      return "Should be longer than 8 charecters";
    }
    return true;
  },
};
