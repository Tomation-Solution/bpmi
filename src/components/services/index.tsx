import { trainingDatacourses } from "@/constants/courses-data";
import { eventsApi } from "@/services/api";
import { formatDate } from "@/utils/dateUtils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Links, PLink, styles } from "..";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  price?: number;
  is_virtual: boolean;
  registration_link?: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventsApi.getAllEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="">
      <div className="flex justify-center items-center mb-4 md:mb-12">
        <PLink
          styles="text-gray mr-3 text-[17px] cursor-pointer"
          href="/"
          text="Home"
        />
        /<h5 className="text-paleBlue ml-3 text-[17px] border-b">Service</h5>
      </div>
      <div className="flex flex-col lg:flex-row sm:px-10 px-4  sm:pb-20 pb-4">
        <div className="flex flex-col justify-between my-6 md:my-20">
          <ul className="list-none flex flex-col   ">
            <Links />
          </ul>
        </div>
        <div className={`${styles.paddingX} w-full`}>
          <div className="my-3 md:my-10 flex">
            <div className="max-w-[900px]">
              <Image
                src={"/star.jpg"}
                alt=""
                height={120}
                width={120}
                className="mb-6"
              />

              <h3 className={`  text-primary ${styles.heading3} mb-5`}>
                E-LEARNING PROGRAMMES
              </h3>
              <p className={`font-normal  text-black ${styles.paragraph}`}>
                We shall be offering all our training programmes via the
                e-learning platform for intending members that might not be able
                to make it to any of the designated learning centres nation-
                wide. In the same vein, we shall be having virtual chapter, and
                group meetings for the same categories of members. This is aside
                the online webinar aimed at the continuous business process
                management training and capacity building programmes. Foundation
                Certificate in Business Process Management.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between mt-10">
              <h4 className="font-normal text-[25px] md:text-[34px] text-[#4A4A4A] mb-6">
                Upcoming Events & Trainings
              </h4>
              <Button
                styles="text-[#1D71B8] border-[#1D71B8] border h-fit px-10 xl:px-16"
                text="View all"
              />
            </div>

            {/* Training Courses Section */}
            <div className="xl:grid-cols-4 md:grid-cols-2 grid gap-4 my-8">
              {trainingDatacourses.map((t, index) => (
                <div
                  key={index}
                  className="w-full pl-1 bg-gradient-to-b from-[#95C11F] to-[#88CDD3] mb-6"
                >
                  <div className="w-full bg-white p-4">
                    <h4 className="text-[#16A2B7] font-bold text-[16px] mb-6">
                      {t.title}
                    </h4>
                    <p className="text-[#4A4A4A] font-bold text-[16px]">
                      {t.otherInfo}
                    </p>
                    <PLink
                      href={`services/${index}`}
                      styles="bg-[#717861] border border-[#88CDD3] text-white mb-3"
                      text="Read more"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Events Section */}
            <div className="mt-16">
              <div className="flex flex-col md:flex-row justify-between mt-10">
                <h4 className="font-normal text-[25px] md:text-[34px] text-[#4A4A4A] mb-6">
                  Upcoming Events
                </h4>
                <PLink
                  href="/event"
                  styles="text-[#1D71B8] border-[#1D71B8] border h-fit px-10 xl:px-16"
                  text="View all"
                />
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="xl:grid-cols-4 md:grid-cols-2 grid gap-4 my-8">
                  {events.slice(0, 4).map((event) => (
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
                        <div className="space-y-2">
                          <p className="text-[#4A4A4A] font-bold text-[16px]">
                            {formatDate(new Date(event.date))}
                          </p>
                          {event.price && (
                            <p className="text-[#4A4A4A] font-bold text-[16px]">
                              ₦{event.price.toLocaleString()}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.is_virtual && (
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                Virtual
                              </span>
                            )}
                            {event.location && !event.is_virtual && (
                              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                {event.location}
                              </span>
                            )}
                          </div>
                          {event.registration_link ? (
                            <a
                              href={event.registration_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-[#717861] text-white px-4 py-2 rounded-full text-sm hover:bg-[#5a604d] transition-colors duration-300"
                            >
                              Register Now
                            </a>
                          ) : (
                            <PLink
                              href={`/event#${event.id}`}
                              styles="bg-[#717861] border border-[#88CDD3] text-white"
                              text="Learn More"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
