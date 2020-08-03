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
                <div className="row justify-content-center text-monospace mb-5">
                    <h1>HOME</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 my-auto">
                        <div className="card text-center p-3 chat-input-card">
                            <div className="input-group">
                                <input
                                    placeholder="Your username..."
                                    value={message.username}
                                    onChange={e => setMessage({ ...message, username: e.target.value })}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="input-group my-3">
                                <input
                                    placeholder="Your messgae..."
                                    value={message.msg}
                                    onChange={e => setMessage({ ...message, msg: e.target.value })}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    onClick={onSubmit}
                                    className="btn chat-button">Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" card col-md-6 text-center chat-output-card">
                        {chat.map((chat) => (
                            <div key={Math.random()} className="row p-2 my-1">
                                <div className="col-4 text-right font-weight-light my-auto chat-username">{chat.message.username}</div>
                                <div className="col-6 border font-weight-light rounded-pill chat-msg shadow p-2">{chat.message.msg}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export interface IHomeProps { };

export default Home;