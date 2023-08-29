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
                <p className={JSC_style.text_content}>如果你想加入我们，可以看看下面的几种方式。</p>
                <p className={JSC_style.text_content}>另外，快去捕捉我们的社员吧</p>
                <p className={JSC_style.text_b}>春季招新（每学年下半学期的3-4月）</p>
                <p className={JSC_style.text_b}>秋季招新（每学年上半学期8-10月）</p>
                <p className={JSC_style.text_content}>或者，你也可以填写这个问卷，让我们了解你</p>
                <a
                    className={JSC_style.link}
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=dvGcSe515EmAwVKvzSjStSO8vWcCxT5Ai6EQbNHJpRpUMDIyVlozWVBSTUhVRVZSMjlVSVMyQUtTUi4u"
                    target="_blank"
                >
                    常驻招新问卷（点我去看看&gt;&gt;）
                </a>
            </div>
            <div className={JSC_style.pic}></div>
        </div>
    );
}
