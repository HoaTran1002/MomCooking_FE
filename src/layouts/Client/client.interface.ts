export interface IPropsheader {
    name: string,
    path: string,
    icon?: JSX.Element
}
export interface ItemsFooter {
    nameTitle:string,
    path:string
}
export interface IPropsFooterItem{
    name:string,
    children:ItemsFooter[]
}