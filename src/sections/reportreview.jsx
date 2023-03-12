import Motion from "../components/motion";

export default function ReportReview({ title }) {
    return (
        <>
            All members reviewed the {title}.
            <Motion action={title} />
        </>
    )
}