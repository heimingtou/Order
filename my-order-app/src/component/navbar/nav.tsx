

import "./nav.css"
export default function Navbar(){

    const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    }
    return (
        <nav className="navbar">
            <button className="btn" onClick={()=>goTo("coffee")} >Coffee</button>
            <button className="btn" onClick={()=>goTo("juice")}>Juice</button>
            <button className="btn" onClick={()=>goTo("milk-tea")}>Milk tea </button>
            <button className="btn" onClick={()=>goTo("special")}>Special</button>
            <button className="btn" onClick={()=>goTo("esspresso")}>Esspreso</button>     
        </nav>
    )
}