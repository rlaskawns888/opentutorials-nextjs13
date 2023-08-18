/**
 * https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
 * @returns 
 */

type pageProps = {
    params: {
        id: number
    }
}

export default async function Page({ params }: pageProps) {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${params.id}`, {next: {revalidate: 0}});
    const topic = await resp.json();

    return (
        <>
            <p>param: { params.id }</p>
            <p>title: {topic.title}</p>
            <p>body: {topic.body}</p>            
        </>
    );
}