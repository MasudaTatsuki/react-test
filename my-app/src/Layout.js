import Header from "./Header";
import styles from "./Layout.module.css"

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            <main>{props.children}</main>
            <footer className={styles.footer}>
                <p className={styles.copyright}>react test</p>
            </footer>
        </div>
    );
};

export default Layout;