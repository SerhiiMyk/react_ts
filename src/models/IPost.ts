import React from "react";

export interface IPost {
    userId: number;
    id: number;
    body: string;
    title: string;
    key?: any;
    children?:React.ReactNode;

}