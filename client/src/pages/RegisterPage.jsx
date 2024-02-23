import {Link, Navigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function RegisterPage() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
      setRedirect(true);
    } catch (e) {
      if(e.response){
        alert(`${e.response.data}`);
      }
      else {
        alert('Registration failed. Please try again later');
      }
    }
  }

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Card className="min-w-[300px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent className=" flex flex-col gap-2">
            <form onSubmit={registerUser} className="flex flex-col gap-2">
              <Label htmlFor="Name">Name</Label>
              <Input type="text"
                 value={name}
                 onChange={ev => setName(ev.target.value)} />
              <Label htmlFor="Email">Email</Label>
              <Input type="email"
                  value={email}
                  onChange={ev => setEmail(ev.target.value)} />
              <Label htmlFor="Password">Password</Label>
              <Input type="password"
                  value={password}
                  onChange={ev => setPassword(ev.target.value)} />
                    
              <div className="text-center py-2 text-gray-500">
                  Already a member? <Link className="underline text-gray" to={'/login'}>Login</Link>
              </div>

              <Button
                  data-testid="auth-submit-button"
                  type="submit"
                  className="w-full"
              >
                Register
              </Button>
            </form>
            </CardContent>
        </Card>
  );
}