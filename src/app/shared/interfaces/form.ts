export type InputType = 'text' | 'number' | 'email' | 'password'


export  interface FormControlValueInterface {
  value: string | undefined | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any;
}
