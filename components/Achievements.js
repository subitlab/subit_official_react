import {Component} from 'react';
import AchievementsData from "../data/achievements.json";
import style from "../styles/Achievement/Achievements.module.css";

function StatusCheck(status){

}

class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = AchievementsData;
    }

    render() {
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
                    this.state.map(item=>(
                        <div className={style.achievecard}>
                            <div style={{ alignSelf:"center" }}><img className={style.pic} src={item.picsrc}></img></div>
                            <div className={style.detailbox}>
                                <div className={style.state} style={{ color: `${item.statecolor}` }}>{ item.state }</div>
                                <h1>{ item.name }</h1>
                                <div>{ item.detail }</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default Achievements;

// function AchievementCard(props){
//     return(
//
//     );
// }