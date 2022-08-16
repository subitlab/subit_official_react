import HeaderBar from "../../components/HeaderBar";
import {Layout} from "antd";
import FooterBar from "../../components/FooterBar";
import std from "../../styles/Home/Home.module.css";
import PageTitle from "../_title";
import {withRouter} from 'next/router';
import MemberList from "../../data/member.json";

console.log(MemberList);
const {Content} = Layout;

const Member = (({router}) => {
    return (
        <div>
            <PageTitle title="成员 · SubIT"/>
            <Layout>
                <HeaderBar/>
                <Content className={[std.content, std.std_background]}>
                </Content>
                <FooterBar/>
            </Layout>
        </div>
    );
});

export default withRouter(Member);