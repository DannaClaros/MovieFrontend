import React from 'react';
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd';

class Login extends React.Component {

  state = {
  }
  // accion cuando le de click al boton gracias al submit
  handleSubmit = e => {
    e.preventDefault();
    // cuando todos los campos ya estan validados
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // si no hay erro muestra los valores
        console.log('Received values of form: ', values);
      }
    });
  }

  login() {
    this.props.history.push("/home");
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1> Login </h1>
        
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Button onClick={() => this.login()} type="primary" htmlType="submit">Iniciar Sesión</Button>
      </Form>

    );
  }

}

Login = withRouter(Login);
export default Form.create({ name: 'formLogin' })(Login); // definir el formulario y ponerle un nomvre, junto a identificar el componente