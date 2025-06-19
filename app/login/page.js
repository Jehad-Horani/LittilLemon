import ComingSoon from "../components/Commingsoon"
import Footersec from "../components/Footer";


export default async function loginpage(){
        await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
    return(
        <div>
            <ComingSoon />
            <Footersec/>
        </div>
    )
}