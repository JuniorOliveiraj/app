import ListItensMenu from "./ListItensMenu"
import { useState } from 'react'

function Tubar() {
	const [active, setModel] = useState(false)
	const toggleModel = () => {
		setModel(!active)
		console.log(active)
	}
	return (
		<header className={active ? "nav-active" : ""}>
			<section className="cd-header">
				<div className="header-wrapper">
					<div className="logo-wrap">
						<a href="#" className="hover-target"><span>J</span>R</a>
					</div>
					<div className="nav-but-wrap" onClick={toggleModel}>
						<div className="menu-icon hover-target">
							<span className="menu-icon__line menu-icon__line-left"></span>
							<span className="menu-icon__line"></span>
							<span className="menu-icon__line menu-icon__line-right"></span>
						</div>
					</div>
				</div>

			</section>
			<ListItensMenu />

		</header>

	)
}
export default Tubar