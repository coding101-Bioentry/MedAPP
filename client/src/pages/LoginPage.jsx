import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../UserContext.jsx";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const {data} = await axios.post('/login', {email,password});
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
  }

  if (redirect) {
    // 当redirectToHome为true时，重定向到HomePage
    return <Navigate to="/" replace />;
  }


  return (
      <Card className="min-w-[300px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className=" flex flex-col gap-2">
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-2">
              <Label htmlFor="Email">Email</Label>
              <Input type="email"
                    value={email}
                    onChange={ev => setEmail(ev.target.value)} />
              <Label htmlFor="Password">Password</Label>
              <Input type="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)} />
                    
                <div className="text-center py-2 text-gray-500">
                  Don't have an account yet? <Link className="underline text-gray" to={'/register'}>Register now</Link>
                </div>

                <Button
                    data-testid="auth-submit-button"
                    type="submit"
                    className="w-full"
                >
                  SignIn
                </Button>
            </form>
            </CardContent>
        </Card>
  );
}