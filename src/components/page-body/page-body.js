import {Link} from "react-router-dom";
import "./page-body.css"

export function PageBody({links, children}){
    return (
        <div className="page-body">
            <div className="page-body__header">
                {links.map(x => <Link to = {x.href}> {x.name} > </Link>)}
            </div>
            <div className="page-body__content">
                <h1>{links[links.length-1].name}</h1>
                {children}
            </div>
        </div>
    )
}