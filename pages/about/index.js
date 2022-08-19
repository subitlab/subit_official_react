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
            <div>
                这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了；妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。
                白天里一定要做的事，一定要说的话，现 在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的；
                沿着荷塘，是一条曲折的小煤屑路。这是一条幽僻的路；白天也少人走，夜晚更加寂寞。荷塘四面，长着许多树，蓊蓊郁郁的。路的一旁，是些杨柳，和一些不知道名字的树。没有月光的晚上，这路上阴森森的，有些怕人。今晚却很好，虽然月光也还是淡淡的。
                正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。这时候叶子与花也有一丝的颤动，像闪电般，霎时传过荷塘的那边去了。叶子本是肩并肩密密地挨着，这便宛然有了一道凝碧的波痕。
                路上只我一个人，背着手踱着。这一片天地好像是我的；我也像超出了平常的自己，到了另一个世界里。我爱热闹，也爱冷静；爱群居，也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。
                叶子底下是脉脉的流水，遮住了，不能见一些颜色；而叶子却更见风致了。月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。
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
                    虽然是满月，天上却有一层淡淡的云，所以不能朗照；
                    但我以为这恰是到了好处——酣眠固不可少，小睡也别有风味的。月光是隔了树照过来的，
                    高处丛生的灌木，落下参差的斑驳的黑影，峭楞楞如鬼一般；弯弯的杨柳的稀疏的倩影，
                    却又像是画在荷叶上。塘中的月色并不均匀；但光与影有着和谐的旋律，如梵婀玲上奏着的名曲 。
                </div>
            </div>
            <div className={style.pic}></div>
        </div>
    );
}