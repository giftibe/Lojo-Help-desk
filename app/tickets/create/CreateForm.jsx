"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"


export default function createForm() {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        const ticket = {
            title, body, priority, user_email: 'gift_coder.dev'
        }


        const res = await fetch('http://localhost:5000/tickets', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(ticket)
        })

        if (res.status === 201) {
            router.push('/tickets')
        }

        setIsLoading(false);
    }


    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Title:</span>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            <label>
                <span>Body:</span>
                <textarea
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </label>

            <label>
                <span>Priority:</span>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value='low'>Low Priority</option>
                    <option value='medium'>Medium Priority</option>
                    <option value='high' >High Priority</option>

                </select>
            </label>

            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span> Add Ticket</span>}
            </button>
        </form >
    )
}
