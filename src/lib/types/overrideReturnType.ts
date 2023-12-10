type OverrideReturnType<T extends (...a: any) => any, NewReturn> = (
  ...a: Parameters<T>
) => NewReturn;

export default OverrideReturnType;
