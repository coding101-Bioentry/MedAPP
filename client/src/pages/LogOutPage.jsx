import { Navigate } from "react-router-dom";
import axios from "axios";

import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../hook/UserContext.jsx";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function LogOutPage() {

    const { ready, user, setUser } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);

    async function logout() {
        await axios.post('/logout');
        setUser(null);
        setRedirect(true);
    }

    if(ready && !user) {
        return <Navigate to="/login" replace />;
    }

    async function cancel() {
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/homepage" replace />;
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