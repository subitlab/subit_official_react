import {Component} from 'react';
import AchievementsData from "../data/achievements.json";
import style from "../styles/Achievement/Achievements.module.css";
import { useState, useEffect } from "react";

// @ts-ignore
function StatusCheck(status){

}

export default function Achievements() {
    // temporarily use this ugly way to display the achievements data.
    const [row, setRow] = useState([]);
    useEffect(()=> {
        // @ts-ignore
        return setRow(AchievementsData);
    }, []);

    return (
        <div className={style.body}>
            <div className={style.HeadTitleBox}>
                <h1 className={style.HeadTitle}>项目与成就</h1>
            </div>
            <div style={{ textAlign:"center" }}>
                这里仅仅选择了一些有趣的小玩具放入这里，还有很多例如技术支持， 入学教育等没有放入。虽然不多，但我们一直努力让这个表单变得丰富起来。
            </div>
            <a style={{ textAlign:"center",margin:20 }}>查看全部成就&gt;&gt;</a>
            {
                row.map(({detail, name, picsrc, state, statecolor}, i)=>(
                    <div key={i} className={style.achievecard}>
                        <div style={{ alignSelf:"center" }}><img className={style.pic} src={picsrc}></img></div>
                        <div className={style.detailbox}>
                            <div className={style.state} style={{ color: `${statecolor}` }}>{ state }</div>
                            <h1>{ name }</h1>
                            <div>{ detail }</div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

// function AchievementCard(props){
//     return(
//
//     );
// }
