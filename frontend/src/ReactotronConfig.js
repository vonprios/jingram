import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({ name: "Jingram" }).use(reactotronRedux()).connect();

export default Reactotron;