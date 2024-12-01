import { useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://127.0.0.1:5000");

const useSocket = (event: string, callback: (data: any) => void) => {
    useEffect(() => {
        socket.on(event, callback);

        return () => {
            socket.off(event, callback);
        };
    }, [event, callback]);
};

export default useSocket;