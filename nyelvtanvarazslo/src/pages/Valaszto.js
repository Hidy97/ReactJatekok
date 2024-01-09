import MondatokModel from "../model/MondatokModel.js"
const model = new MondatokModel();
let cim = model.cim;
let mondat = model.aktMondatOsszeallit(2);
console.log(mondat)
export default function Valaszto() {
  
    return (
        <div className="valaszto">
            <h5>{cim}</h5>
            <p>{mondat.teljesMondat[1]}</p>
        </div>
    )
}