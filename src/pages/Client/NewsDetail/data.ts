import { INewDetail } from './interface';
import new1 from "../../../assets/images/News/news1.jpg"
const contentHTML = `
    <div>
        <p>Chào mừng bạn đến với thế giới của nấu ăn ngon miệng và thú vị!</p>
        <p>Nấu ăn không chỉ đơn thuần là một công việc, mà còn là một nghệ thuật. Hương vị độc đáo, sự kết hợp hài hòa của các nguyên liệu, và sự sáng tạo là những yếu tố quan trọng trong mỗi món ăn.</p>
        <p>Chúng tôi sẽ cung cấp cho bạn các công thức độc quyền, từ các món truyền thống đến các món sáng tạo mới lạ. Bạn sẽ được hướng dẫn cụ thể từng bước, từ chuẩn bị nguyên liệu cho đến cách thực hiện và trình bày món ăn.</p>
        <p>Hãy cùng chúng tôi khám phá và thưởng thức những món ngon độc đáo!</p>
        
        <h2>Các món ngon phổ biến</h2>
        <ul>
            <li>Món Pasta với Sốt Cà Chua và Basil</li>
            <li>Gà Rán Giòn</li>
            <li>Salad Cà Rốt và Dưa Leo</li>
            <li>Canh Súp Dương Cầm</li>
            <li>Bánh mì Tươi Nóng Hổi</li>
        </ul>
        
        <h2>Các bước thực hiện món Pasta với Sốt Cà Chua và Basil</h2>
        <ol>
            <li>Chuẩn bị nguyên liệu: pasta, cà chua, lá basil, dầu olive, muối, tiêu.</li>
            <li>Luộc pasta trong nước sôi đã được muối cho đến khi mềm nhưng còn giữ độ cứng.</li>
            <li>Chuẩn bị sốt cà chua: xào cà chua với dầu olive, thêm lá basil cắt nhỏ, gia vị theo khẩu vị.</li>
            <li>Trộn pasta với sốt cà chua, trang trí với lá basil tươi.</li>
            <li>Thưởng thức món pasta thơm ngon!</li>
        </ol>
    </div>
`;
export const newDetail:INewDetail = {
    id:"sdsid-sdsds-ad_2323s-sdasd",
    title:"Chào mừng đến với mom cooking",
    author:"Chef Ha",
    imgUrl: new1,
    imgName:"Ảnh tin tức",
    content:contentHTML,
    timePost:"22/03/2022 - 2 second ago" 
}