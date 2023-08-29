import Data from "../../data/memberlist.json";
import style from "../../styles/Join/MemberList.module.css";
import { Component } from "react";
import { Col,Row } from "antd";

// TODO: Change this to a hook
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
                    this.state.data.current.map((session,i) => (
                        <Session key={i} data={session}/>))
                }
                <h1 className={style.sessionTitle} style={{ marginTop:10 }}>以下为养老院·荣誉社员</h1>
                {
                    this.state.data.honor.map((session,i) => (
                        <Session key={i} data={session}/>))
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
    };

    render(){
        return(
            <div className={style.sessionCard}>
                <h1 className={style.sessionTitle}>{this.state.data.session}</h1>
                <div className={style.MemberCard}>
                    <Row
                        wrap={true}
                        justify="start"
                        // gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                    >
                        {
                            this.state.data.member.map(i=>(<MemberCard key={i} data={i}/>))
                            //  this.ReSizeMemberCard(this.state.data.member)
                        }
                    </Row>
                </div>
            </div>
        );
    }
}

class MemberCard extends Component{
    constructor(props) {
        super(props);
        this.cnt = 0;
    }
    resize(){
        let width = document.body.clientWidth;
        if (width>1225){ this.cnt = 4; }
        else if (width<=1225 && width>1000){ this.cnt = 3; }
        else if (width<=1000 && width>680){ this.cnt = 2; }
        else if (width<=680){ this.cnt = 1; }
    }
    componentDidMount()
    {
        window.addEventListener("resize", this.resize);
    }
    render(){
        return(
            <Col className="gutter-row" span={24/this.cnt}>
                <div className={style.PersonCard}>
                    <div className={style.name}>{this.props.data.name}</div>
                    <div className={style.house}>{this.props.data.house}</div>
                </div>
            </Col>
        );
    };
}
