export class Employee{
    id:number;
    name:string;
    gender: string;
    email?: string; //Optional
    phoneNumber?:number; //Optional
    contactPreferences?:string;
    dateOfBirth: Date;
    department: string;
    isActive:boolean;
    photoPath?:string; //Optional
}