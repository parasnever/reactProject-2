export function Navbar(){
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: "space-between",
            marginBottom: "10px"
        }}>
            <img
            style={{
                width:"15px"
            }} src="/images/logo.png" alt="logo" />
            <input
            style={{
                padding: "5px"
            }} type="text" 
            name="search"
            placeholder="seach posts"/>
        </div>
    )
}