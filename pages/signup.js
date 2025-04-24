import AuthForm from '../src/app/components/AuthForm';
import { useRouter } from 'next/router';

const SignupPage = () => {
  const router = useRouter();

  const handleSignup = async (userData) => {
    // Simulate storing the user
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      alert('User already exists!');
      return;
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful!');
    router.push('/login'); // Redirect to login after signup
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
};

export default SignupPage;
