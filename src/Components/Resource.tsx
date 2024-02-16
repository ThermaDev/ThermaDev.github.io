import { useResources } from "../Contexts/ResourceContext";

function Resource() {
    let updateMetal = useResources().updateMetal;
    return (
        <div className='resource-content'>
            <h2 className='section-title'>Resources</h2>
            <button onClick={() => updateMetal(1)}>Scavenge</button>
        </div>
    )
}

export default Resource;