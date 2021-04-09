import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Mikko Karvonen Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>root</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/miigii">
                            <a>miigii</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
}
