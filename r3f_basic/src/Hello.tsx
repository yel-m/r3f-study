type propsType = {
    to:string
    from:string
}
export function Hello1(props:any) {
    const {to, from} = props;
    console.log("Hello1");
    
    return(
        <>
            <div>hello {to} from : {from}</div>
        </>
    )
}