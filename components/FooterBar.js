import styles from "../styles/footer.module.css";
import {Layout} from "antd";
import {Image} from "antd";

const {Footer} = Layout;

export default function FooterBar() {
    return (
        <Footer className={styles.outline}>
            <div className={styles.footer}>
                <Image alt="logo_revert_transparent" src="/SubIT-Rvt-Transparent.svg"></Image>
            </div>
        </Footer>
    );
}