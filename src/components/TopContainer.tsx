import NestedDiv from "./NestedDiv";

export interface TopContainerProps {
    value: string
}

export default function TopContainer({value}: TopContainerProps) {
    return <div className={'top'}>
        <h1>PARENT VALUE: <span className={'value'}>{value}</span></h1>
        <div className={'top-container'}>
            <NestedDiv value={'a'} index={'1st'}></NestedDiv>
            <NestedDiv value={'a'} index={'2nd'}></NestedDiv>
            <NestedDiv value={'a'} index={'3rd'}></NestedDiv>
        </div>
    </div>
}