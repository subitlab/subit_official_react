import Data from "../../data/memberlist.json";
import style from "../../styles/Join/MemberList.module.css";
import {Component} from "react";

// function card_cnt_calc(width){//未适配
//     if (width>1225){ return 4; }
//     else if (width<=1225 && width>1000){ return 3; }
//     else if (width<=1000 && width>680){ return 2; }
//     else if (width<=680){ return 1; }
// }

class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:Data
        };
    }

    render() {
        return (
            <div className={style.body}>
                <h1 className={style.title}>历届社员列表</h1>
                {
                    this.state.data.current.map(session => (
                        <Session data={session}/>))
                }
                <h1 className={style.sessionTitle}>以下为养老院·荣誉社员</h1>
                {
                    this.state.data.honor.map(session => (
                        <Session data={session}/>))
                }
            </div>
        );
    }
}
export default MemberList;

class Session extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        // this.line_lenth = 4;
    };

    // componentDidMount() {
    //     window.addEventListener("resize", this.resize);
    //     this.line_lenth = card_cnt_calc(document.body.clientWidth);
    // }
    // ReSizeMemberCard(member){
    //     let lenth = member.length;
    //     let line = Math.ceil((lenth-1)/this.line_lenth);
    //     for(let i=0;i<line-1;i++){
    //         member.slice(i*this.line_lenth,i*this.line_lenth+this.line_lenth-1)
    //               .map((item) => (<MemberCard data={item}/>) );
    //     }
    // }
    // resize = () => {
    //     let width = document.body.clientWidth;
    //     let new_cnt = card_cnt_calc(width);
    //     if(new_cnt != this.line_lenth) {
    //         this.line_lenth = new_cnt;
    //     }
    // };

    render(){
        return(
            <div className={style.sessionCard}>
                <h1 className={style.sessionTitle}>{this.state.data.session}</h1>
                <div className={style.MemberCard}>
                    {
                        this.state.data.member.map(i=>(<MemberCard data={i}/>))
                        //  this.ReSizeMemberCard(this.state.data.member)
                    }
                </div>
            </div>
        );
    }
}

function MemberCard(props){
    return(
        <div className={style.PersonCard}>
            <div className={style.name}>{props.data.name}</div>
            <div className={style.house}>{props.data.house}</div>
        </div>
    );
}
