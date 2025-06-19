import ComingSoon from "../components/Commingsoon"
import Footersec from "../components/Footer";


export default  async function orderpage(){
        await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
    return(
        <div>
            <ComingSoon/>
            <Footersec/>
        </div>
    )
}