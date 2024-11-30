// sign in counts data type
export interface DataType {
    id: number;
    name: string;
    date: string;
}


export interface SignInCountsRendererProps {
    data: DataType[];
    header: string;
    navigationButtonText: string;
    navigationLink: string;
}