import styles from "../../styles/Home/components/FindMemberSection.module.css";
import ImageDescCard from "../ImageDescCard";
import MemberList from "../../data/member.json";
import {random_choose} from "../../functions/DataProc";
import react, {Component} from "react";
import {ReloadOutlined} from "@ant-design/icons";

function card_num_calc(width) {
    if (width >= 830) {
        return 3;
    } else if (width >= 570) {
        return 2;
    } else {
        return 1;
    }
}

class FindMemberSection extends Component {
    constructor(props) {
        super(props);
        this.card_cnt = 3;
        this.state = {
            data: MemberList,
            selected: [],
            opacity: 0,
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.card_cnt = card_num_calc(document.body.clientWidth);
        this.updatePeople(this.card_cnt, MemberList);
    }

    resize = () => {
        let selected = this.state.selected;
        let width = document.body.clientWidth;
        let new_cnt = card_num_calc(width);
        if (new_cnt < this.card_cnt) {
            this.setState({
                selected: selected.slice(0, new_cnt),
            });
            this.card_cnt = new_cnt;
        }
        if (new_cnt > this.card_cnt) {
            this.updatePeople(new_cnt);
            this.card_cnt = new_cnt;
        }
    };

    updatePeople(n, data) {
        if (data !== undefined) {
            this.setState({
                selected: random_choose(data.current, n),
            });
            return;
        }
        if (!this.state.data.current) return;
        this.setState({
            selected: random_choose(this.state.data.current, n),
        });
    }

    render() {
        return (
            <div className={styles.body}>
                <div className={styles.header}>
                    <div style={{width: "44px"}}></div>
                    <div className={styles.title}>
                        认识我们的团队
                    </div>
                    <div onClick={() => {
                        this.updatePeople(card_num_calc(document.body.clientWidth));
                    }}
                         className={styles.switch}>
                        <ReloadOutlined/>
                    </div>
                </div>
                <div className={styles.card_group}>
                    {
                        this.state.selected.map((item, i) => (
                            <ImageDescCard style={{margin: "0 20px"}} detail={item} key={i}/>
                        ))
                    }
                </div>
            </div>
        );
    }
};

export default FindMemberSection;