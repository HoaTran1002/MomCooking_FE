import { ICoursesCardReview } from "../../../app/Courses/courses.interface"
import ImgCoursesBread from "../../../assets/images/Courses/bread.png"
import ImgCoursesKid from "../../../assets/images/Courses/kid.png"
import ImgCoursesAsia from "../../../assets/images/Courses/asia.png"
import { IProductsCourse } from "../../../app/Courses/courses.interface"
export const courses: ICoursesCardReview[] = [
    { title: "Viet Nam traditional course", subTitle: "We will teach you how to make pure, traditional Vietnamese dishes ", path: "/Courses/1", imgUrl: ImgCoursesAsia },
    { title: "Kid cooking course", subTitle: "We will teach you how to make pure, traditional Vietnamese dishes ", path: "/Courses/1", imgUrl: ImgCoursesKid },
    { title: "Bread cooking course", subTitle: "We will teach you how to make pure, traditional Vietnamese dishes ", path: "/Courses/1", imgUrl: ImgCoursesBread },
    { title: "Viet Nam traditional course", subTitle: "We will teach you how to make pure, traditional Vietnamese dishes ", path: "/Courses/1", imgUrl: ImgCoursesAsia },
    { title: "Kid cooking course", subTitle: "We will teach you how to make pure, traditional Vietnamese dishes ", path: "/Courses/1", imgUrl: ImgCoursesKid },
    { title: "Bread cooking course", subTitle: "We will teach you how to make pure, traditional Vietnamese dishes ", path: "/Courses/1", imgUrl: ImgCoursesBread },
]
export const product: IProductsCourse[] = [
    {
      productName: "Bánh kem",
      productImage: "https://media.istockphoto.com/id/1466673520/photo/no-baked-blueberry-layered-cheesecake.webp?b=1&s=170667a&w=0&k=20&c=Fg6B34n3LnO-LELKOELk67D_Z812ylDdm1ev-wmxz3Q=",
      description: "Học cách làm bánh kem ngon tuyệt vời trong khóa học này.",
    },
    {
      productName: "Bánh panna cotta",
      productImage: "https://media.istockphoto.com/id/1524941665/photo/panna-cotta-with-strawberries-and-mint-dessert-vegetarian-food.webp?b=1&s=170667a&w=0&k=20&c=WRH0EsjRxpRijFD_bPuo1rhUYi7W4-yq7IwNMGKmWhs=",
      description: "Tự tay làm bánh panda colta dễ dàng với hướng dẫn chi tiết.",
    },
    {
      productName: "Bánh tiramisu",
      productImage: "https://media.istockphoto.com/id/1061450296/photo/portion-of-tiramisu-dessert.webp?b=1&s=170667a&w=0&k=20&c=fi8iUwkpep2uZHjJNOsNuOlz3YBm6a9zFLVv2WqdCJI=",
      description: "Học cách làm bánh tiramisu thơm ngon theo phong cách Ý.",
    },
    {
      productName: "Bánh bông lan",
      productImage: "https://media.istockphoto.com/id/1272297413/photo/homemade-classic-vanilla-sponge-cake-or-biscuit-sprinkled-with-powdered-sugar-and-fresh.webp?b=1&s=170667a&w=0&k=20&c=lYsIdiWcYSnXh5i_Y0_x7sNpB07RP9lUsqRbef0DdU4=",
      description: "Tự tay làm bánh bông lan mềm mịn và thơm ngon.",
    },
    {
      productName: "Bánh mì sô cô la",
      productImage: "https://images.unsplash.com/photo-1617319610261-ea6c6594a646?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D",
      description: "Học cách làm bánh mì sô cô la đậm đà và ngon miệng.",
    },
    {
      productName: "Bánh nướng trứng muối",
      productImage: "https://media.istockphoto.com/id/1457601153/photo/chinese-dessert-mini-moon-cake-made-from-bean-flour-and-salted-egg-yolk.webp?b=1&s=170667a&w=0&k=20&c=cCd6CgOwHuBg3otsIuFrFRXCmShJ5JuIevyEDJKEX20=",
      description: "Hướng dẫn làm bánh nướng trứng muối hấp dẫn và thơm ngon.",
    },
    {
      productName: "Bánh mì sandwich",
      productImage: "https://media.istockphoto.com/id/1300342890/photo/blt-sandwich-and-fries.webp?b=1&s=170667a&w=0&k=20&c=kE7ymKcOT7PSWuy2ZRr7xI6Iww06oiwrxQiqms7VDZo=",
      description: "Tự tay làm bánh mì sandwich phong cách riêng của bạn.",
    },
  ];
  
  export default courses;
  
export const optionsFilter = ["All", "New Courses", "Popular Courses", "Children Courses", "Privates Courses"]