import MondatokModel from "../model/MondatokModel.js"
const model = new MondatokModel();

export default function Gepel(){
    return(
        <div className="gepel">
        <h1>Egészítsd ki!</h1>
        <p>{model.cim}</p>
        </div>
    )
}