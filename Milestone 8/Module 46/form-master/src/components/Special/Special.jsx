import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext);

    return (
        <div>
            <h2>Special Friends</h2>
            <p>Has: {asset} (props drilling)</p>
            <p>Gift: {gift} (context API)</p>
        </div>
    );
};

export default Special;