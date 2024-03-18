import styles from "./MainMenu.module.css";
import { GENDERS } from "../../constants/categories";
import { NavLink } from "react-router-dom";

export function MainMenu() {
	return (
		<ul className={styles.mainMenu}>
			{GENDERS.map(({ path, categoryName }) => {
				return (
					<li key={path}>
						<NavLink to={path}>{categoryName}</NavLink>
					</li>
				);
			})}
		</ul>
	);
}
