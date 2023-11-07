export interface IPropsInputCustom {
    id?:string;
    labelName?:string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    readOnly?: boolean;
    className?: string;
    icon?:JSX.Element;
    defaultValue?:string;
    isError?:boolean;
    errorMessage?:string;
    type?:'text'| 'email' | 'password';
}
