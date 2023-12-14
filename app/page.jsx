import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h2>Welcome to Our Dashboard</h2>
      <p>
        Explore our dashboard to stay informed about the latest happenings at
        our company. We are dedicated to providing you with updates and insights
        that matter to you.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>

        <Link href="/tickets/create" className="ml-4"> 
          <button className="btn-primary">Create Ticket</button>
        </Link>
      </div>


      <h2>Company Updates</h2>

      <div className="card">
        <h3>Welcome our New Web Development Team Member</h3>
        <p>
          We are thrilled to introduce the newest member of our web development
          team. Their expertise and passion for innovation will undoubtedly
          contribute to our ongoing success.
        </p>
      </div>

      <div className="card">
        <h3>Exciting News: Our New Website is Live!</h3>
        <p>
          We are excited to announce the launch of our new website. This
          platform is designed to enhance your experience and provide valuable
          information. Explore our site to discover the latest features and
          updates.
        </p>
      </div>
    </main>
  );
}
