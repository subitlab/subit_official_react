import styles from "../styles/global_components/header.module.css";
import { Image, Layout, Menu, Popover, Alert, Button } from "antd";
import Router from "next/router";
import { MenuOutlined } from "@ant-design/icons";
import React from "react";

const { Header } = Layout;

const actions_title = [
    { title: "关于我们", path: "/about" },
    { title: "加入我们", path: "/join" },
    { title: "项目成就", path: "/achievement" },
    { title: "提供支持", path: "/support" }
];


export default function HeaderBar(props: any) {
    return (
        <Header className={styles.header}>
            <div className={styles.container}>
                <Image
                    style={{cursor: "pointer"}}
                    onClick={() => { Router.push("/"); }}
                    height={64}
                    width={128}
                    preview={false}
                    alt="logo"
                    src="/static/SubIT-Normal.svg"
                    className={styles.logo}
                ></Image>
                <Actions select={props.select ? props.select : null}/>
                <ActionsMenuBtn select={props.select ? props.select : null}/>
            </div>
        </Header>
    );
}

//弹出菜单
function DropdownAction(props: any) {
    return (
        <Menu
            style={{width: 200}}
            selectedKeys={props.select ? props.select.toString() : undefined}
        >
            {
                actions_title.map((item, i) => (
                    <Menu.Item key={i.toString()} onClick={() => {
                        Router.push(item.path);
                    }}>
                        <span className={styles.menu_item}>{item.title}</span>
                    </Menu.Item>
                ))
            }
        </Menu>
    );
}

//小屏幕下的弹出按钮
function ActionsMenuBtn(props: any) {
    return (
        <Popover className={styles.menu_btn}
                 arrowPointAtCenter placement="bottomRight"
                 content={DropdownAction(props)}
        >
            <MenuOutlined/>
        </Popover>
    );
}

//一般下动作条
function Actions(props: any) {
    return (
        <div className={styles.actions}>
            {
                actions_title.map((item, i) => {
                    if (i === props.select) {
                        return (<span key={i} className={styles.selected}>{item.title}</span>);
                    }
                    return (
                        <span key={i} onClick={() => {
                            Router.push(item.path);
                        }}>{item.title}</span>
                    );
                })
            }
        </div>
    );
}