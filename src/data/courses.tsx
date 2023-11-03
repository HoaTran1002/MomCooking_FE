

import food1 from "../../../assets/images/Product/Product1.png"
import food2 from "../../../assets/images/Product/Product2.png"
import ImgCoursesBread from "../assets/images/Courses/bread.png"
import ImgCoursesKid from "../assets/images/Courses/kid.png"
import ImgCoursesAsia from "../assets/images/Courses/asia.png"
import { IMoments } from "../app/Moments/moments.interface"
import { ICoursesCardReview } from "../app/Courses/courses.interface"
export const courses: ICoursesCardReview[] = [
    { title: "Viet Nam traditional course", subTitle: "We will teach you how to make pure, traditional Vietnamese dishes ", path: "/", imgUrl: ImgCoursesAsia },
    { title: "Kid cooking course", subTitle: "We will teach you how to make pure, traditional Vietnamese dishes ", path: "/", imgUrl: ImgCoursesKid },
    { title: "Bread cooking course", subTitle: "We will teach you how to make pure, traditional Vietnamese dishes ", path: "/", imgUrl: ImgCoursesBread },
]
// export const products: ICourseProducts[] = [
//     { id: "1", titleName: "Bánh mì ngọt", courseName: "Bánh mì", numberLike: 45, urlLink: food1 },
//     { id: "2", titleName: "Bánh mì khoai lang", courseName: "Bánh mì", numberLike: 45, urlLink: food1 },
//     { id: "3", titleName: "Bánh mì phô mai", courseName: "Bánh mì", numberLike: 45, urlLink: food2 },
//     { id: "4", titleName: "Chả giò", courseName: "Bánh mì", numberLike: 45, urlLink: food2 },
//     { id: "5", titleName: "Bún bò huế", courseName: "Asia Food", numberLike: 45, urlLink: food1 },
//     { id: "6", titleName: "Bánh mì ngọt", courseName: "Asia Food", numberLike: 45, urlLink: food1 },
// ]

export const moments:IMoments[] = [
    {
        imageUrl:'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        imageUrl:'https://plus.unsplash.com/premium_photo-1665394004212-0d014eb6da68?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        imageUrl:'https://plus.unsplash.com/premium_photo-1661686563080-bec5fdbe4010?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        imageUrl:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D'
    },
    {
        imageUrl:'https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D'
    }
]
