// sign in counts data type
export interface CountsDataType {
    name: string;
    date: string;
}


export interface SignInCountsRendererProps {
    data: CountsDataType[];
    header: string;
    navigationButtonText: string;
    navigationLink: string;
    loading:boolean;
}

