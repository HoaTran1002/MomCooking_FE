export interface ISchedule{
    id?:string
    nameSchedule:string
    statusType: 'inProcess' | 'hasDone' | 'hasDelete'
    statusName:string
    listTime:IScheduleTime[]
    numberStudent:number
    classLeader:string
    listStudent:string[]
}

export interface IScheduleTime{
    dayOfName:string
    time:string[]
}