import { Hero, Layout } from "@/components";
import { Interestedfn } from "@/components/landing-page";
import { eventsApi } from "@/services/api";
import { formatDate } from "@/utils/dateUtils";
import Head from "next/head";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  price?: number;
  registration_link?: string;
  is_virtual: boolean;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventsApi.getAllEvents();
        setEvents(data);
      } catch (err) {
        setError("Failed to load events. Please try again later.");
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Head>
        <title>BPMI | Events</title>
        <meta name="description" content="Upcoming BPMI events and trainings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Layout>
          <Hero img={"womenwriting"} title={"Events & Training"} />

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-8">{error}</div>
          ) : (
            <div className="xl:grid-cols-4 md:grid-cols-2 grid gap-4 my-8 container mx-auto px-4">
              {events.map((event) => {
                const eventDate = new Date(event.date);
                return (
                  <div
                    key={event.id}
                    className="w-full pl-1 bg-gradient-to-b from-[#95C11F] to-[#88CDD3] mb-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-full bg-white p-4">
                      <h4 className="text-[#16A2B7] font-bold text-[16px] mb-4 line-clamp-2">
                        {event.title}
                      </h4>
                      <p className="text-[#4A4A4A] text-[14px] mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-[#4A4A4A] font-bold text-[16px]">
                          {formatDate(eventDate)}
                        </p>
                        {event.registration_link && (
                          <a
                            href={event.registration_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors duration-300"
                          >
                            Register
                          </a>
                        )}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {event.is_virtual && (
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Virtual
                          </span>
                        )}
                        {event.location && (
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {event.location}
                          </span>
                        )}
                        {event.price && (
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            ₦{event.price.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <Interestedfn />
        </Layout>
      </main>
    </>
  );
}
