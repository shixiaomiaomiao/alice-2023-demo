import { useRouter } from "next/router"

export default function Document() {
    const router = useRouter();
    const { documentId } = router.query;
    return <div>documentId: {documentId}</div>
}