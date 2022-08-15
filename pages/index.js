import styles from '../styles/Home/Home.module.css';
import HeaderBar from "../components/HeaderBar";
import {Layout} from "antd";
import FooterBar from "../components/FooterBar";

const {Content} = Layout;

export default function Home() {
    return (
        <Layout>
            <HeaderBar></HeaderBar>
            <Content className={[styles.content, styles.std_background]}>
                <Poster/>
            </Content>
            <FooterBar></FooterBar>
        </Layout>
    );
}

function Poster() {
    return (
        <div className={styles.poster}>
            <div className={styles.overlay}></div>
            <div className={styles.content_holder}>
                <h1 className={styles.poster_title}>北大附中的技术爱好者聚集地</h1>
                <span className={styles.poster_subtitle}>让每一个爱好者都能充分施展拳脚</span>
            </div>
        </div>
    );
}