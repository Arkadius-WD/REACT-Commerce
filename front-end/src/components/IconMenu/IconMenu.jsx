import styles from "./IconMenu.module.css";
import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";
import { Link } from "react-router-dom";

export function IconMenu() {
	const cartItems = 2;

	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to="/ulubione">
					<img src={HEART_ICON} alt="heart icon" />
				</Link>
			</li>
			<li>
				<Link to="/koszyk">
					<img src={BAG_ICON} alt="bag icon" />
					<div className={styles.numberOfProducts}>{cartItems}</div>
				</Link>
			</li>
		</ul>
	);
}
