import HeaderBar from "../../components/HeaderBar";
import {Layout} from "antd";
import FooterBar from "../../components/FooterBar";
import std from "../../styles/Home/Home.module.css";
import PageTitle from "../_title";

const {Content} = Layout;

export default function Join() {
    return (
        <div>
            <PageTitle title="加入我们 · SubIT"/>
            <Layout>
                <HeaderBar/>
                <Content className={[std.content, std.std_background]}>
                </Content>
                <FooterBar/>
            </Layout>
        </div>
    );
}