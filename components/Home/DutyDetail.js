import styles from "../../styles/Home/components/DutyDetail.module.css";


const duty_card = [
    {
        title: "创造",
        desc: "利用手中的资源，结合成员们的奇思妙想，建设新的信息化基础设计。",
    },
    {
        title: "助力",
        desc: "协助新生进行信息化培训等，同时提供技术答疑与支持服务；更参与信息化系统维护。",
    },
    {
        title: "放送",
        desc: "整合学校信息，使用媒介进行推送。",
    },
];

export default function DutyDetail() {
    return (
        <div className={styles.body}>
            <div className={styles.title}>我们的职责</div>
            <div className={styles.container}>
                {duty_card.map((item, i) => (
                    <DutyCard title={item.title} desc={item.desc} key={i}/>
                ))}
            </div>
        </div>
    );
}

function DutyCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    );
}