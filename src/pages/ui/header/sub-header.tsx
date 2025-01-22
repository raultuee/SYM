import { PathItems } from "./breadcrumb";

interface SubHeaderProps {
    title: string;
}

export function SubHeader(props: SubHeaderProps) {
    return (
        <>
            <section className="">
                <h1 className="text-black dark:text-white font-bold text-3xl mt-16 pb-2">{props.title}</h1>
                    <PathItems />
            </section>
        </>
    )
}