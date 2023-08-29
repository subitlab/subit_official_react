import {CodeOutlined, PlusOutlined, SolutionOutlined} from "@ant-design/icons";
import style from "../../styles/Home/components/NotOnlyTech.module.css";

export default function NotOnlyTech() {
    return (
        <div className={style.body}>
            <div className={style.iconbox}>
                <CodeOutlined className={style.licon}/>
                <PlusOutlined className={style.sicon}/>
                <SolutionOutlined className={style.licon}/>
            </div>
            <div className={style.title}>并非只有技术</div>
            <div className={style.detailtext}>
                我们不止有技术。
                在负责技术的技术与支持事业群之外，
                我们还有负责宣传与外联的平台与内容事业群。
                这样的架构使我们社团的未来变得更加宽广。
            </div>
            <div className={style.departmentbox}>
                <div className={style.THGbox}>
                    <span>技术与支持事业群 ·</span>
                    <span className={style.THGtext}> THG</span>
                </div>
                <div className={style.PCGbox}>
                    <span>平台与内容事业群 ·</span>
                    <span className={style.PCGtext}> PCG</span>
                </div>
            </div>
        </div>
    );
}
