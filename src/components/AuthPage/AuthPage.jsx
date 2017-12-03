import * as React from "react";
import { connect } from "react-redux";
import "./AuthPage.css";

class AuthPage extends React.Component {
  handleChangeAuthToken(event) {
    console.log(event);
  }
  handleOnKeyDownAuthToken(event) {
    const { keyCode } = event;
    if (keyCode === 13) {
      console.log(1);
    }
  }
  render() {
    return (
      <div className="auth-form">
        <p>
          Получить токен нужно на своей странице github, перейдите по{" "}
          <a href="https://github.com/settings/tokens">адресу</a> и создать себе
          токен. Запишите куда нибудь токен, так как после создания доступ к
          нему будет только один раз.
        </p>
        <input
          className="auth-form--input"
          placeholder="auth_token"
          value=""
          onChange={this.handleChangeAuthToken}
          onKeyDown={this.handleOnKeyDownAuthToken}
        />
        <p>После ввода нажать Enter</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

// export default AuthPage;
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
