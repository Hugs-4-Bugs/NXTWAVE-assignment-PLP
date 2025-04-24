import AuthForm from '../src/app/components/AuthForm';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (credentials) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const matchedUser = users.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (matchedUser) {
      alert('Login successful!');
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      router.push('/'); // Redirect to home page after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
