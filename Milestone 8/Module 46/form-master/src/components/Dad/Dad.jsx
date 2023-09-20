import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself></Myself>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Dad;