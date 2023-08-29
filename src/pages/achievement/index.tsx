import HeaderBar from "../../components/HeaderBar";
import { Layout } from "antd";
import FooterBar from "../../components/FooterBar";
import std from "../../styles/Home/Home.module.css";
import PageTitle from "../_title";
import Achievements from "../../components/Achievements";

const { Content } = Layout;

export default function Achievement() {
    return (
        <div>
            <PageTitle title="项目成就 · SubIT"/>
            <Layout>
                <HeaderBar/>
                <Content className={[std.content, std.std_background].join(" ")}>
                    <Achievements/>
                </Content>
                <FooterBar/>
            </Layout>
        </div>
    );
}