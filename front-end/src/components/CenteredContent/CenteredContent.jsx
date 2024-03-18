import style from "./CenteredContent.module.css";

export function CenteredContent({ children }) {
	return <div className={style.wrapper}>{children}</div>;
}
