import styles from "../styles/global_components/ImageDescCard.module.css";

export default function ImageDescCard(props: any) {

    props = props.detail;
    // props = {
    //     title: "夏博阳",
    //     subtitle: "技术开发&帮助支持",
    //     desc: "路上只我一个人，背着手踱着。这一片天地好像是我的；我也像超出了平常的自己，到了另一个世界里。我爱热闹，也爱冷静；爱群居，也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。",
    //     poster: "/static/personal/xby.jpg",
    //     pos: {
    //         y: -70,
    //     },
    // };
    return (
        <div className={styles.container}>
            <div style={{
                backgroundImage: `url("${props.poster ? props.poster : "/static/default"}"`,
                backgroundPositionX: props.pos.x ? props.pos.x : "center",
                backgroundPositionY: props.pos.y ? props.pos.y : "center",
            }} className={styles.poster}></div>
            <div className={styles.text_section}>
                <div className={styles.title}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.subtitle}>
                    <strong>{props.subtitle}</strong>
                </div>
                <Desc desc={props.desc}/>
            </div>
        </div>
    );
}

function Desc(props: { desc: string | null; }) {
    if (props.desc != null) {
        return (
            <span
                className={styles.desc}
                dangerouslySetInnerHTML={{__html: props.desc.replace("\n", "<br/>")}}
            ></span>
        );
    }
    return null;
}
