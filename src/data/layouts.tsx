import { IPropsFooterItem, IPropsheader } from "../layouts/Client/client.interface"


export const AllSettingHeader: IPropsheader[] = [
    { name: "Home", path: "/", icon: <i className="ri-home-line"></i> },
    { name: "Courses", path: "/Courses", icon: <i className="ri-menu-5-line"></i> },
    { name: "Lessons", path: "/Lessons", icon: <i className="ri-list-indefinite"></i> },
    { name: "News", path: "/News", icon: <i className="ri-newspaper-line"></i> },
    { name: "Contact Us", path: "/Contact", icon: <i className="ri-message-3-line"></i> },
    { name: "FAQ", path: "/FAQ", icon: <i className="ri-questionnaire-line"></i> },
]

export const settingsWhenLoginSuccess:IPropsheader[] = [
    {name:"My Class",path:'/Schedule',icon:<i className="ri-calendar-todo-fill"></i>},
    {name:"My Debt",path:'/Debit',icon:<i className="ri-wallet-3-fill"></i>}
]

export const FooterItems:IPropsFooterItem[]=[
    {
        name:'introduce',
        children:[
            {
                nameTitle:"Most popular",path:"/"
            },
            {
                nameTitle:"We have a best chef",path:"/"
            },
            {
                nameTitle:"Contact us",path:"/"
            },
            {
                nameTitle:"Ours moments",path:"/"
            }
        ]
    },
    {
        name:'courses',
        children:[
            {
                nameTitle:"Kid course",path:"/"
            },
            {
                nameTitle:"Bread course",path:"/"
            },
            {
                nameTitle:"Private course",path:"/"
            },
        ]
    },
    {
        name:'company',
        children:[
            {
                nameTitle:"About us",path:"/About us"
            },
            {
                nameTitle:"Privacy policy",path:"/"
            },
            {
                nameTitle:"FAQ",path:"/"
            },
        ]
    }
]