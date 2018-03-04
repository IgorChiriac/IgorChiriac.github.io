import { h, Component } from "preact";
import style from "./style";

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>Content</h1>
        <p>Placeholder for the content</p>
      </div>
    );
  }
}
