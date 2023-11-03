import { INews } from "../app/News/news.interface"
import news1 from "../assets/images/News/news1.jpg"
import news2 from "../assets/images/News/news2.jpg"

export const news: INews[] = [
    { imgUrl: news1, timePost: "22/03/2022 - 1 days ago", titleName: "Công thức nấu ăn mới" },
    { imgUrl: news2, timePost: "22/03/2022 - 3 days ago", titleName: "Khóa học mới vừa cập nhập" },
    { imgUrl: news1, timePost: "22/03/2022 - 1 month ago", titleName: "Điều chỉnh thời gian nhập học" },
    { imgUrl: news2, timePost: "22/03/2022 - 3 seconds ago", titleName: "Nhận thêm danh hiệu danh giá từ vị trí giám khảo tạo show diễn" },
]