import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <div class="inner">
          <a href="#" class="image avatar">
            <img src="images/avatar.jpg" alt="" />
          </a>
          <h1>
            <strong>I am Igor Chiriac</strong>, a super<br />
            frontend developer<br />
          </h1>
        </div>
      </header>
    );
  }
}
