import styles from "./CategoryMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";

export function CategoryMenu() {
	const params = useParams();

	return (
		<div className={styles.categoryMenu}>
			<ul>
				{CATEGORIES.map(({ path, categoryName }) => {
					return (
						<li key={categoryName}>
							<NavLink to={`/${params.gender}/${path}`}>{categoryName}</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
