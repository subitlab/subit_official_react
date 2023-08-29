import styles from "../styles/Home/Home.module.css";
import HeaderBar from "../components/HeaderBar";
import { Layout } from "antd";
import FooterBar from "../components/FooterBar";
import PageTitle from "./_title";
import TwoPartDetail from "../components/Home/TwoPartDetail";
import DutyDetail from "../components/Home/DutyDetail";
import NotOnlyTech from "../components/Home/NotOnlyTech";
import ImageDescCard from "../components/ImageDescCard";
import FindMemberSection from "../components/Home/FindMemberSection";

const { Content } = Layout;

export default function Home() {
    return (
        <div>
            <PageTitle title="SubIT"/>
            <Layout>
                <HeaderBar></HeaderBar>
                <Content className={[styles.content, styles.std_background].join(" ")}>
                    <Poster/>
                    <TwoPartDetail/>
                    <DutyDetail/>
                    <NotOnlyTech/>
                    <FindMemberSection/>
                </Content>
                <FooterBar></FooterBar>
            </Layout>
        </div>
    );
}

function ZoomIn(e: any) {
    console.log(1);
    console.log(e);
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