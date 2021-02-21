export interface User {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    phone: string;
    email: string;
    password: string;
    userTypeId: string;
    userTypeName: string;
    userStatusId: string;
    userStatusName: string;
    workingAreaId: string;
    workingAreaName: string;
    reporterArea: string;
    reporterAreaName: string;
    fullName?: string;
}