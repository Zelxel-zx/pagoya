// src/app/shared/validators/pagoya-validators.ts
function dniValidator() {
  return (control) => {
    if (!control.value)
      return null;
    return /^\d{8}$/.test(control.value) ? null : { dni: true };
  };
}
function phoneValidator() {
  return (control) => {
    if (!control.value)
      return null;
    return /^\d{9}$/.test(control.value) ? null : { phone: true };
  };
}
function minAmountValidator(min) {
  return (control) => {
    if (control.value == null || control.value === "")
      return null;
    return Number(control.value) >= min ? null : { minAmount: { min } };
  };
}

export {
  dniValidator,
  phoneValidator,
  minAmountValidator
};
//# sourceMappingURL=chunk-HCATZXIL.js.map
