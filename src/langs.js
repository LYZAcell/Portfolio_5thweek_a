import { useContext } from "react";
import { AppContext } from "./App";

function Languages(){

    const mode = useContext(AppContext)

    return(
    <div>
        {/*실습중*/}
        {mode.dark_mode}

        {/*실습끗*/}
        

        <div className="central">
        <div className="text_box">
                <br/><br/>

                <div className="central">
                    <span>English : intermediate - advanced</span>
                    </div>
                    <br></br>
                <div className="central">
                    <span>Português: B1(nível intermediário)</span>
                </div>
                    <br></br>
                <div className="central">
                    <span>Espaãol: A2-B1(Básico-intermediário)</span>
                </div>
                <br></br>
                <div className="central">
                    <span>Korean: 원어민</span>
                </div>


        </div>
        </div>
        </div>
    );

}

export default Languages;