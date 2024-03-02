import heroImg from "../images/weddStar.jpeg"
export const Home = () => {
    return(
        <div id="homePage">
            <div id="hero">
                <div id="heroText">
                    <h1>Ne čekajte savršene trenutke. Uhvatite trenutke koji dolaze i učinite ih savršenim.</h1>
                    <button>
                        <span>Zakaži Odmah</span>
                    </button>
                </div>
                <div id="heroImg">
                    <img src={require("../images/weddStar.jpeg")} alt="Hero Img" />
                </div>
            </div>
            {/* End hero */}
            
        </div>
    )
}