export default function TabButtonTwo({children,onSelect}){
    return <li>
        <button onClick={onSelect}>{children}</button>
    </li>
}