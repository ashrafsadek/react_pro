export default function TabButtonThree({children,onSelect}){
    return <li>
        <button onClick={onSelect}>{children}</button>
    </li>
}