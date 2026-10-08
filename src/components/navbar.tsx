import { NavSearch } from "./nav-search"
import {NavLinks} from "./nav-links"


export const Navbar = () =>{
    console.log  (`Navbar rendered` )
    return (
        <div>
            <NavLinks/>
            <NavSearch/>
        </div>
    )

}