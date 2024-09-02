export default function TabButtonStateTwo({children,onSelect,isActive}){
    return <li>
        <button className={isActive ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
}