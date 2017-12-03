import * as React from "react";

class AuthPage extends React.Component {
  handleChangeAuthToken = event => {};
  render() {
    return (
      <div>
        <p>
          Получить токен нужно на своей странице github, перейдите по{" "}
          <a href="https://github.com/settings/tokens">адресу</a> и создать себе
          токен. Запишите куда нибудь токен, так как после создания доступ к
          нему будет только один раз.
        </p>
        <input
          className=""
          placeholder="auth_token"
          value=""
          onChange={this.handleChangeAuthToken}
        />
        <p>После ввода нажать Enter</p>
      </div>
    );
  }
}

export default AuthPage;
