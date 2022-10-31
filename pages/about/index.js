import HeaderBar from "../../components/HeaderBar";
import {Layout} from "antd";
import FooterBar from "../../components/FooterBar";
import std from "../../styles/Home/Home.module.css";
import style from "../../styles/About/about.module.css";
import PageTitle from "../_title";

const {Content} = Layout;

export default function About() {
    return (
        <div>
            <PageTitle title="关于 · SubIT"/>
            <Layout>
                <HeaderBar/>
                <Content className={[std.content, std.std_background]}>
                    <div className={style.body}>
                        <AboutUs/>
                        <MoreAboutUs/>
                    </div>
                </Content>
                <FooterBar/>
            </Layout>
        </div>
    );
}
function AboutUs() {
    return(
        <div className={style.about}>
            <h1 className={style.center_title}>关于我们</h1>
            <div className={style.text}>
                <div>
                    SubIT社团是下属于北大附中学业管理中心的中心社团，现主要负责协助联系解决全校师生在各信息化系统使用的困难和技术问题。
                </div>
                <div>
                    我社成立于2018年12月，最初由旧博雅学院和孙玉磊老师引导创建。当时，Office365在我校全面铺开后，因为系统复杂且持续更新，使用疑难层出，要用学生做老师来解决这个直接问题。
                    于是，以帮助全校师生解决在O365使用中遇到的困扰为初心，便有了“大神之招募”。
                </div>
                <div>
                    我们旗下的核心业务包括 O365 系统运维、学校信息化系统答疑支持和突发事件响应、西楼宣传屏幕系统运营、高中新生信息化入学教育课程。
                </div>
                <div>
                    我们的社团架构包括：技术与支持事业群（THG）和平台与内容事业群（PCG）。
                    技术支持和宣传外联共同进步，这样的架构能帮助我们更好的服务大家，并有更宽广地发展。我们的社团结构十分简单，日常氛围十分欢脱。
                </div>
                <div>
                    我们在西楼拥有舒适的两层社团活动室，可以讨论新方案、休息片刻、组团学习等。
                </div>
                <div>
                    最后，快乐分锅，快乐干活！
                </div>
            </div>
        </div>
    );
}
function MoreAboutUs() {
    return(
        <div className={style.more}>
            <div className={style.text_box}>
                <div className={style.row_title}>
                    <h1 className={style.part_title}>还有更多</h1>
                    <h1 className={style.part_title_quote}>，</h1>
                    <h1 className={style.part_title}>让未来无限可能</h1>
                </div>
                <div className={style.text}>
                    <div>
                    技术对这个年轻社团而言，永远只是起点。三年来，我们从零建设并实施了我校的新生入教信息化课程培训体系，
                    并在各平台完成了数百人次的技术支持，共同参与了北大附中教育集团多个成员校的信息化建设，也为学校新的改革做出了诸多努力。
                    </div><div>
                    答疑解惑，说到底是一种服务，解决的是现有问题。这个是起因，但无疑不是全部，甚至，不是重心。
                    用技术引领，和一些想做事的人一起，才是。
                    这个初心，直至此刻。新一学年，SubIT和大家一起奋进！
                    </div><div>
                    拥有丰富的校内外资源和一届届优秀社员的SubIT拥有无限的可能！
                    </div>
                </div>
            </div>
            <div className={style.pic}></div>
        </div>
    );
}