import {Component} from "react";
import style from "../../styles/Join/MkShow.module.css";
import {RightOutlined,LeftOutlined} from "@ant-design/icons";

const MkData = [
    {
        pic:"/static/Mk/Mk1.jpg",
        cnt:"1",
        dist:"2021",
        name:"刘语辰"
    },
    {
        pic:"/static/Mk/Mk2.jpg",
        cnt:"2",
        dist:"2022",
        name:"何天阳"
    },
    {
        pic:"",
        cnt:"3",
        dist:"2023",
        name:"刘宇宸"
    },
    {
        pic:"",
        cnt:"4",
        dist:"2024",
        name:"魏子峰"
    },
];

function card_cnt_calc(width: number){
    if (width>1225){ return 4; }
    else if (width<=1225 && width>1000){ return 3; }
    else if (width<=1000 && width>680){ return 2; }
    else if (width<=680){ return 1; }
}
function get_arr(st: number, ed: number){
    let t = [];
    let now = st;
    for(let i=0;i<ed-st;i++){
        t[i] = now;
        now += 1;
    }
    return t;
}

// TODO: Change this to a hook
class MkShow extends Component {

    constructor(props) {
        super(props);
        this.card_cnt = 4;
        this.st = 0;
        this.state = {
            selected:[0,1,2,3]
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.card_cnt = card_cnt_calc(document.body.clientWidth);
        this.setState({
            selected: get_arr(this.st,this.st+card_cnt_calc(document.body.clientWidth))
        });
    }

    // change_dir = (dir) => {
    //     if(this.card_cnt==4){return;}
    //     if(dir == "right"){
    //         if(this.st+this.card_cnt > 4){return;}
    //          else{this.st += 1;}
    //     }
    //     else if(dir == "left"){
    //
    //     }
    //     this.setState({
    //         selected: get_arr(this.st,this.st+card_cnt_calc(document.body.clientWidth))
    //     });
    // }

    resize = () => {
        // let selected = this.state.selected;
        let width = document.body.clientWidth;
        let new_cnt = card_cnt_calc(width);
        if(new_cnt != this.card_cnt) {
            this.card_cnt = new_cnt;
            this.setState({
                    selected: get_arr(this.st,this.st+card_cnt_calc(document.body.clientWidth))
            });
        }
    };

    render() {
    return (
        <div className={style.body}>
            <h1 className={style.title}>历届社长与铁锅纪念馆</h1>
            <div style={{ display:"flex", flexDirection:"row" }}>
                <div className={style.switch_left} /*onClick={this.change_dir("left")}*/><LeftOutlined className={style.switch_font} /></div>
                {
                    this.state.selected.map((index,i) => (
                        <MkCard key={i} pic={MkData[index].pic} cnt={MkData[index].cnt} dist={MkData[index].dist} name={MkData[index].name}/>
                    ))
                }
                <div className={style.switch_right} /*onClick={this.change_dir("right")}*/><RightOutlined className={style.switch_font} /></div>
            </div>
        </div>
    );
    }
}
export default MkShow;

function MkCard(props: any) {
    return(
        <div className={style.card}>
            <div style={{
                backgroundImage: `url("${props.pic ? props.pic : "/static/default"}")`
            }} className={style.pic}></div>
            <div style={{ display:"flex", flexDirection:"row", marginTop:20 }}>
                <span className={style.card_title}>铁锅Mk.</span>
                <span className={style.card_title}
                      dangerouslySetInnerHTML={{__html: props.cnt.replace("\n", "<br/>")}}>
                </span>
            </div>
            <div style={{ display:"flex", flexDirection:"row" }}>
                <span className={style.detail_text}
                      dangerouslySetInnerHTML={{__html: props.dist.replace("\n", "<br/>")}}>
                </span>
                <span className={style.detail_text} style={{ marginRight:5 }}>届社长</span>
                <span className={style.detail_text}
                      dangerouslySetInnerHTML={{__html: props.name.replace("\n", "<br/>")}}>
                </span>
            </div>
        </div>
    );
}
