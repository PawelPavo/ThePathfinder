import * as React from 'react';
import io from "socket.io-client";
import { useState, useEffect } from 'react';
import e from 'express';

const socket = io.connect("http://localhost:3000");

const Home: React.FC<IHomeProps> = () => {
    const [messageCount, setMessageCount] = useState(0);
    const [message, setMessage] = useState({ msg: '', username: '' })
    const [chat, setChat] = useState([])

    useEffect(() => {
        (async () => {
            try {
                socket.on("Chat message", (message) => {
                    setChat([...chat, { message }])
                    setMessageCount(messageCount + 1)
                })
            } catch (error) {
                console.log(error)
            }
        })()
    }, [messageCount]);

    const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        socket.emit("Chat message", message);
        setMessage({ msg: '', username: message.username })
        setMessageCount(messageCount + 1)
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center text-monospace">
                    <h1>Chat</h1>
                </div>
                <div className="row justify-content-center text-monospace">
                    <div className="col-4 text-center">CHAT
                    <div >
                            {chat.map((chat) => (
                                <>
                                    <small className="">{chat.message.username} says:
                                        <h5 className="text-success">{chat.message.msg}</h5>
                                    </small>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="input-group">
                            <input
                                placeholder="Your username..."
                                value={message.username}
                                onChange={e => setMessage({...message, username: e.target.value })}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                placeholder="Your messgae..."
                                value={message.msg}
                                onChange={e => setMessage({ ...message, msg: e.target.value })}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <button
                            onClick={onSubmit}
                            className="btn btn-outline-primary btn-lg btn-block w-50 mt-3">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export interface IHomeProps { };

export default Home;