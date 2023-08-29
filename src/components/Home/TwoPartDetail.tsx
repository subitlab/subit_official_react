import styles from "../../styles/Home/components/TwoPartDetail.module.css";
import {Typography} from "antd";

const TwoPart = [
    {
        title: "北大附中的中心社团",
        desc: "SubIT社团，是下属于学业管理中心的中心社团。立志于解决学校各类技术问题，包括Office365维护与新产品的开发。",
    },
    {
        title: "技术爱好者的聚集地",
        desc: "我们立志于成为北大附中技术爱好者的聚集地。以中心社团的身份与资源，让附中每一位计算机爱好者能够得到发挥自身的空间。",
    },
];

export default function TwoPartDetail() {
    return (
        <section className={styles.section}>
            <div className={styles.content_holder}>
                <div className={styles.frame}>
                    {
                        TwoPart.map((item, i) =>
                            <Part key={i} title={item.title} desc={item.desc}/>)
                    }
                </div>
                <div className={styles.photo}></div>
            </div>
        </section>
    );
}

function Part(props: any) {
    return (
        <Typography className={styles.part}>
            <div className={styles.part_title}>{props.title}</div>
            <div
                className={styles.part_content}>
                {props.desc}
            </div>
        </Typography>
    );
}