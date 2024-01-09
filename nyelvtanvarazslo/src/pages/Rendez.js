import MondatokModel from "../model/MondatokModel.js"
const model = new MondatokModel();

export default function Rendez(){
    return(
        <div className="rendez">
        <h1>Rendezés</h1>
        <p>{model.cim}</p>
        </div>
    )
}