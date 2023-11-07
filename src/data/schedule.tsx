import { ISchedule } from "../app/interface/schedule.interface";

export const listSchedule:ISchedule[]=[
    {
        classLeader:"Nguyễn Văn A",
        statusType:"inProcess",
        listTime:[
            {dayOfName:"Thứ 2",time:["8h -> 11h","12h -> 15h"]},
            {dayOfName:"Thứ 4",time:["14h -> 17h","17h -> 21h"]},
            {dayOfName:"Thứ 6",time:["14h -> 17h","17h -> 21h"]},
            {dayOfName:"Thứ 7",time:["14h -> 17h","17h -> 21h"]},
            {dayOfName:"Chủ nhật",time:["14h -> 17h","17h -> 21h"]},
        ],
        statusName:"đang hoạt động",
        nameSchedule:"Lớp học dạy nấu ăn theo nhóm ",
        numberStudent:12,
        listStudent:[
            "Nguyễn Văn B","Nguyễn Văn C","Nguyễn Văn D"
        ]
    },
    {
        classLeader:"Nguyễn Văn A",
        statusType:"hasDone",
        listTime:[
            {dayOfName:"Thứ 2",time:["14h -> 17h","17h -> 21h"]},
            

        ],
        statusName:"đã kết thúc",
        nameSchedule:"Lớp học dạy nấu ăn theo nhóm ",
        numberStudent:12,
        listStudent:[
            "Nguyễn Văn B","Nguyễn Văn C","Nguyễn Văn D"
        ]
    },
    {
        classLeader:"Nguyễn Văn A",
        statusType:"hasDelete",
        listTime:[
            {dayOfName:"Thứ 2",time:["14h -> 17h","17h -> 21h"]},
            

        ],
        statusName:"đã bị hủy",
        nameSchedule:"Lớp học dạy nấu ăn theo nhóm ",
        numberStudent:12,
        listStudent:[
            "Nguyễn Văn B","Nguyễn Văn C","Nguyễn Văn D"
        ]
    }
]