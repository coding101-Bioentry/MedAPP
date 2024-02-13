import {Navigate} from "react-router-dom";
import axios from "axios";

import {useState} from "react";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function LogOutPage() {

    const [redirect, setRedirect] = useState(null);
    const [user, setUser] = useState(null);

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    async function cancel() {
        setRedirect('/');
    }

  return (
      <Card className="min-w-[300px]">
        <CardHeader>
          <CardTitle>Logout</CardTitle>
        </CardHeader>
        <CardContent className=" flex flex-col gap-2">
            <form className="flex flex-col gap-2">
                <div className="text-center py-2 text-gray-500">
                  是否確定登出？
                </div>
                <div className="flex flex-row">
                    <Button
                        type="submit"
                        className="w-full"
                        onClick={cancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className="w-full"
                        onClick={logout}
                    >
                        Logout
                    </Button>
                </div>
            </form>
            </CardContent>
        </Card>
  );
}