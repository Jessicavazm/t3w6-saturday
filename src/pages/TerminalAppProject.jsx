import { useParams } from "react-router-dom";

export default function TerminalAppProject(){
    // version number is fetched by useParams hook and called after
    let { versionNumber } = useParams();

    return(
        <div>
            <h1>My Terminal Project</h1>
            <p>Here are a list of features of my project:</p>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
            </ul>
            {/** Conditional rendering */}
            {versionNumber && <p>Version Number: {versionNumber}</p>}
        </div>
    )
}