import React, { Component } from 'react';
import './auth.css';

export default class AuthComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '', isLoggedIn: false };

		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	login(event) {
		const { username, password } = this.state;

		if (username == 'ProjectSpace' && password == 'spacePwd2020') {
			this.setState({ isLoggedIn: true });
			sessionStorage.setItem('Token', 'ddcdscse4v54rv54r5v45sdv4v');
			this.props.history.push('/list');
		} else {
			alert('Please validate your login details');
		}
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	componentDidMount() {}

	render() {
		const { username, password } = this.state;
		return (
			<div className='wrapper fadeInDown'>
				<div id='formContent'>
					<div className='fadeIn first py-2'>
						<img
							src='https://growingsmilestx.com/wp-content/uploads/2019/04/206855.png'
							id='icon'
							alt='User Icon'
						/>
					</div>

					{/* <form> */}
					<input
						type='text'
						id='login'
						className='fadeIn second'
						value={username}
						name='username'
						placeholder='login'
						onChange={this.handleChange}
					/>
					<input
						type='password'
						id='password'
						className='fadeIn third'
						value={password}
						name='password'
						placeholder='password'
						onChange={this.handleChange}
					/>
					<input
						type='button'
						onClick={(e) => this.login(e)}
						className='fadeIn fourth mt-5'
						value='Log In'
					/>
					{/* </form> */}
				</div>
			</div>
		);
	}
}
