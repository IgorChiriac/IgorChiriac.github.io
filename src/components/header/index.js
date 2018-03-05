import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";
import avatar from "../../assets/avatar.jpg";

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <div class={style.inner}>
          <div class={style.avatar}>
            <a href="#">
              <img src={avatar} alt="Avatar picture" />
            </a>
          </div>
          <h1>
            I am <strong>Igor Chiriac</strong>, a super<br />
            frontend developer<br />
          </h1>
        </div>
      </header>
    );
  }
}
