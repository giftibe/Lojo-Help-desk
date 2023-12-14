import { notFound } from "next/navigation";

export const dynamicParams = false

// implementing static rendering for deployment
export async function generateStaticParams() {
    const res = await fetch('http://localhost:5000/tickets')
    const tickets = await res.json();

    return tickets.map((ticket) => (
        { id: ticket.id }
    ))

}

async function getTicket(id) {
    const res = await fetch('http://localhost:5000/tickets/' + id, {
        next: {
            revalidate: 20
        }
    })

    if (!res.ok) {
        const error = new Error('Not Found');
        error.notFound = true;
        throw error;
    }
    return res.json();
}
export default async function TicketDetails({ params }) {
    const id = params.id
    const ticket = await getTicket(id)
    return (
        <main>

            <nav>
                <h2>Ticket details</h2>
            </nav>

            <div className="card" key={ticket.id}>
                <h3>{ticket.title}</h3>
                <small> Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>


            </div>
        </main >
    )
}
