import io from "socket.io-client";
import { Base_url } from "./helper";

export const createSocketConnection=()=>{


    return io("/",{path:"/api/socket.io"});
} 