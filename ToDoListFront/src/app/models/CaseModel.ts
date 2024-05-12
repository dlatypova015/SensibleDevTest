import { Guid } from 'guid-typescript';

export interface CaseModel {
    Id:Guid,
    name:string,
    createDate: Date,
    closeDate: Date,
    deadline: Date,
    isCompleted: boolean,
    isOverdue: boolean
}