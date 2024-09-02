{/*export default function TabButton({children}){
    return <li>
        <button>{children}</button>
    </li>;
}*/}
{/*
export default function TabButton({label}){
    function showDiv(){
        const dv = document.getElementById('mnuDv');
        dv.style.display = 'block';
        console.log("welcome");
    }
    return <li>
        <button onClick={showDiv}>{label}</button>
    </li>
}
*/}

export default function TabButton({label,anyThing}){
    return <li>
        <button onClick={anyThing}>{label}</button>
    </li>
}
