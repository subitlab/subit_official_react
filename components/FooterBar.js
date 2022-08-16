import styles from "../styles/footer.module.css";
import {Image, Layout} from "antd";
import {createFromIconfontCN, GithubOutlined, MailOutlined} from "@ant-design/icons";

const {Footer} = Layout;

const IconFont = createFromIconfontCN({
    scriptUrl: [
        "//at.alicdn.com/t/c/font_3590515_e706mgx59.js",
    ],
});

const link = [
    {title: "关于我们", path: "/about"},
    {title: "加入我们", path: "/join"},
    {title: "项目成就", path: "/achievement"},
    {title: "提供支持", path: "/support"},
];


const action = [
    {
        title: "Github",
        icon: <GithubOutlined/>,
        href: "https://github.com/subitlab",
    },
    {
        title: "Email",
        icon: <MailOutlined/>,
        href: "mailto:subit@i.pkuschool.edu.cn",
    },
    {
        title: "Yammer",
        icon: <IconFont type="icon-yammer"/>,
        href: "https://www.yammer.com/i.pkuschool.edu.cn/#/users/1691511088",
    },
    {
        title: "Telegram",
        icon: <IconFont type="icon-telegram-plane"/>,
        href: "https://t.me/+QPaHG_oUu104MjE1",
    },
];

export default function FooterBar() {
    return (
        <Footer className={styles.outline}>
            <div className={styles.footer}>
                <div className={styles.link_bar}>
                    <Image style={{marginTop: "-3px", minWidth: "120px"}} width={120} preview={false}
                           alt="logo_revert_transparent"
                           src="/static/SubIT-Rvt-Transparent.svg"/>
                    <ActionBar/>
                </div>
                <TextLink/>
                <Copyright/>
            </div>
        </Footer>
    );
}

function TextLink() {
    return (
        <p>
            {
                link.map((item, i) => (
                    <span key={i} style={{color: "white", cursor: "default"}}>
                        <a href={item.path} className={styles.text_link} style={{
                            fontSize: "16px",
                            cursor: "pointer",
                        }}> {item.title} </a>
                        &nbsp;{i === link.length - 1 ? "" : "/"}&nbsp;
                    </span>
                ))
            }
        </p>
    );
}

function Copyright() {
    return (
        <div className={styles.cpr} style={{color: "white"}}>
            <span>Copyright © 2018-{new Date().getFullYear()} . All rights reserved. &nbsp;</span>
            <a rel="noreferrer" target="_blank" className={styles.miit}
               href="https://beian.miit.gov.cn/">京ICP备2022023326号</a>
        </div>
    );
}

function ActionBar() {
    return (
        <div className={styles.action_bar}>
            {
                action.map((item, i) => (
                    <a target="_blank" rel="noreferrer" className={styles.link} key={item.title} href={item.href}>
                        {item.icon}
                        <span className={styles.link_text}>{item.title}</span>
                    </a>
                ))
            }
        </div>
    );
}