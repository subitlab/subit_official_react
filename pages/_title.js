import Head from "next/head";

export default function PageTitle(prop) {
    return (
        <Head>
            <title>{prop.title}</title>
        </Head>
    );
}