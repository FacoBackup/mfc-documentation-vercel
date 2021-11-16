import styles from "../styles/Home.module.css";
import installation from "../templates/home/installation";
import {Tab} from "mfc-core";
import Article from "../components/core/visualization/article/Article";
import VerticalTabs from "../components/core/navigation/tabs/VerticalTabs";
import Overview from "../templates/home/Overview";
import News from "../templates/home/News";

export default function index() {
    return (
        <Overview/>
    )
}
