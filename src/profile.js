
/*파일 자체를 export할 때 이 파일을 가져올게???*/
export default function Box({children}){

    return(
        <div style = {{backgroundColor: "pink"}}>
            {children}
            </div>
    )
}
