import { eventsApi } from "@/services/api";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  price: number;
  registration_link: string;
  is_virtual: boolean;
}

const EventDetails = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventsApi.getUpcomingEvents();
        setEvents(data);
      } catch (err) {
        setError("Failed to load events");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-lg shadow-md overflow-hidden text-black"
        >
          {event.image && (
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-600">
                {new Date(event.date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-gray-600">
                {event.is_virtual ? "Virtual Event" : event.location}
              </span>
            </div>
            {event.price && (
              <p className="text-lg font-semibold text-primary mb-4">
                ₦{event.price.toLocaleString()}
              </p>
            )}
            {event.registration_link && (
              <a
                href={event.registration_link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
              >
                Register Now
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
