import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { ThemeProvider } from '../contexts/ThemeContext';
import { getUserLogged, putAccessToken } from '../utils/api';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          // mendapatkan nilai tema baru berdasarkan state sebelumnya
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          // menyimpan nilai tema baru ke local storage
          localStorage.setItem('theme', newTheme);
          // mengembalikan state dengan nilai theme terbaru.
          return {
            theme: newTheme
          };
        });
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    document.documentElement.setAttribute('data-theme', this.state.theme);
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
 
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }

  render(){
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
        <div className='catatan-app'>
          <header className='catatan-app__header'>
            <h1>Aplikasi Catatan</h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess}/>} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
        </ThemeProvider>
      )
    
    }
  return (
    <ThemeProvider value={this.state}>
    <div className="catatan-app">
      <header className='catatan-app__header'>
        <h1>Aplikasi Catatan</h1>
        <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
    </ThemeProvider>
  );
}
}
 
export default NoteApp;