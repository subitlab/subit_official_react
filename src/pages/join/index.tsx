import HeaderBar from "../../components/HeaderBar";
import { Layout } from "antd";
import FooterBar from "../../components/FooterBar";
import std from "../../styles/Home/Home.module.css";
import JSC_style from "../../styles/Join/JoinUsCard.module.css";
import PageTitle from "../_title";
import MkShow from "../../components/Join/MkShow";
import MemberList from "../../components/Join/MemberList";

const { Content } = Layout;

export default function Join() {
    return (
        <div>
            <PageTitle title="加入我们 · SubIT"/>
            <Layout>
                <HeaderBar/>
                <Content className={[std.content, std.std_background].join(" ")}>
                    <JoinUsCard/>
                    <MkShow/>
                    <MemberList/>
                </Content>
                <FooterBar/>
            </Layout>
        </div>
    );
}
function JoinUsCard() {
    return(
        <div className={JSC_style.body}>
            <div className={JSC_style.text_box}>
                <h1 className={JSC_style.text_title}>加入我们！</h1>
                <p className={JSC_style.text_content}>我们欢迎每一位对我们感兴趣的北大附中学生的加入！</p>
                <p className={JSC_style.text_content}>如果你想加入我们，SubIT每年会进行两次招新：</p>
                <p className={JSC_style.text_b}>春季招新（每学年下半学期的3-4月）</p>
                <p className={JSC_style.text_b}>秋季招新（每学年上半学期8-10月）</p>
                <a
                    className={JSC_style.link}
                    href="https://pkuschool.yuque.com/subit/kpft7t"
                    target="_blank"
                >语雀招新中转站</a>
                <a
                    className={JSC_style.link}
                    href="https://pkuschool.yuque.com/subit/kpft7t/about"
                    target="_blank"
                >社团介绍</a>
                <p className={JSC_style.text_content}>另外，快去捕捉我们的社员吧（</p>
            </div>
            <div className={JSC_style.pic}></div>
        </div>
    );
}
