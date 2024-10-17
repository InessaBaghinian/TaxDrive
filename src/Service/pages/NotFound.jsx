import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export default function NotFound (){
    return <div className="h-dvh flex items-center justify-center flex-col gap-4">
        <h1>Not Found</h1>
        <Link
        to='/'
        >
        <Button>Go Home</Button>
        </Link>

    </div>
}