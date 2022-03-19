import Header from "./Header";
import "./Main.scss";

export default function Main(props) {
    return <div className="cmp-main">
        <Header />
        <main className="cmp-main__container">{props.children}</main>
    </div>
}