export default function TabButtonFour({children,onSelect}){
    //console.log("hello iam here from TabButtonFour Component");
    return <li>
        <button onClick={onSelect}>{children}</button>
    </li>
}