import HeaderBar from "../../components/HeaderBar";
import { Layout, Image } from "antd";
import FooterBar from "../../components/FooterBar";
import std from "../../styles/Home/Home.module.css";
import PageTitle from "../_title";
import style from "../../styles/Support/support.module.css";

const { Content } = Layout;

export default function Support() {
    return (
        <div>
            <PageTitle title="提供支持 · SubIT"/>
            <Layout>
                <HeaderBar/>
                <Content className={[std.content, std.std_background].join(" ")}>
                    <div className={style.body}>
                        <div className={style.text}>
                            <Offline/>
                            <Online/>
                        </div>
                        <div className={style.pic}></div>
                    </div>
                </Content>
                <FooterBar/>
            </Layout>
        </div>
    );
}

function Offline() {
    return (
        <div className={style.part_text}>
            <h1 className={style.title}>线下技术支持</h1>
            <p className={style.context}>可用时间</p>
            <p className={style.context}>周一至周五，午休与活动课</p>
            <p className={style.context}>需提前预约</p>
            <p className={style.context}>请提前发送邮件给SubIT</p>
        </div>
    );
}

function Online() {
    return (
        <div className={style.part_text}>
            <h1 className={style.title}>线上技术支持</h1>
            <p className={style.context}>直接发送邮件给SubIT邮箱</p>
            <p className={style.context}>请清晰描述遇到的问题</p>
            <p className={style.context}>后续交流将通过邮件</p>
            <p className={style.context}>如有不便请备注联系方式</p>
            <p>
                <a
                    className={style.link}
                    href="mailto:subit@i.pkuschool.edu.cn"
                >
                    发送邮件给SubIT&gt;&gt;
                </a>
            </p>
        </div>
    );
}