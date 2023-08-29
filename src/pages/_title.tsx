import Head from "next/head";

export default function PageTitle(prop: { title: string }) {
    return (
        <Head>
            <title>{prop.title}</title>
        </Head>
    );
}