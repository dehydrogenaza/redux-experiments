import Button from "./Button";

export interface NestedDivProps {
    value: string
    index: string
}

export default function NestedDiv({value, index}: NestedDivProps) {
    return <div className={'child-container'}>
        <h2>{index} child's value : <span className={'value'}>{value}</span></h2>
        <Button label={'Random'} handler={() => {}} />
    </div>
}