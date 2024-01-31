import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'
export default function LanguageDropdown() {
    return (
        <>
            <Menu as="div" className="dropdown">
                <Menu.Button className="dropdown-toggle show" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="/assets/img/icon/united-states02.png" alt="" />EN
                </Menu.Button>
                <Menu.Items as="div" className="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
                    <Link className="dropdown-item" to="/"><img src="/assets/img/icon/russia.jpg" alt="" />RUS</Link>
                    <Link className="dropdown-item" to="/"><img src="/assets/img/icon/india.jpg" alt="" />IND</Link>
                    <Link className="dropdown-item" to="/"><img src="/assets/img/icon/bangladesh.jpg" alt="" />BAN</Link>
                </Menu.Items>
            </Menu>
        </>
    )
}
