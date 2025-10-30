import { CurvedBg } from "@/assets";
import { getMore } from "@/constants/landingPage";
import { eventsApi } from "@/services/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import PLink from "../PLink";

interface Event {
  id: number;
  title: string;
  date: string;
}

const formatEventDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return {
    date_month: months[date.getMonth()],
    date_day: date.getDate().toString().padStart(2, "0"),
    year: date.getFullYear().toString(),
  };
};
const GetMore = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventsApi.getUpcomingEvents();
        setUpcomingEvents(data);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex mt-4 md:mt-24 items-center relative flex-col xl:flex-row">
      <div className="w-full my-40 relative xl:left-[100px]">
        <h2 className="font-bold text-[30px] md:text-[41px] text-[#00305E] text-center xl:text-left">
          Get more from The BPMI
        </h2>
        {getMore.map(({ title, text, pic, id }) => (
          <div className="flex flex-col md:flex-row my-12" key={id}>
            <div className="mb-4">
              <h4 className="text-gray text-[14px] font-bold ">{title}</h4>
              <p className="text-[#6C8AC0] text-[22px] max-w-md mr-16 font-inter">
                {text}
              </p>
            </div>
            <Image src={`/${pic}.jpg`} width={200} height={200} alt={title} />
          </div>
        ))}
      </div>

      {/* Desktop Events Section */}
      <div className="w-full xl:flex flex-col items-end hidden absolute z-10 top-[40px]">
        <Image
          src={"/div.jpg"}
          alt=""
          width={200}
          height={200}
          className="mr-12 md:mr-24 mb-12"
        />
        <div className="relative">
          <div className="mt-20 w-full flex items-center justify-center ">
            <div className="ml-20">
              <h2 className="text-primary font-bold text-[39px] font-inter">
                Join Our Upcoming <br /> Events
              </h2>
              <div className="">
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  upcomingEvents.map((event) => {
                    const { date_month, date_day, year } = formatEventDate(
                      event.date
                    );
                    return (
                      <div
                        key={event.id}
                        className="flex max-w-[500px] border-b border-[#DBDBDB] py-2"
                      >
                        <div className="font-semibold text-[#00305E] text-[21px] font-inter mr-6">
                          <p className="text-[12px] border-b-2 border-[#9ACA3C] pb-1">
                            {date_month}
                          </p>
                          {date_day}
                        </div>
                        <p className="font-inter font-normal text-[20px] text-gray line-clamp-2">
                          {event.title}
                        </p>
                      </div>
                    );
                  })
                )}
              </div>
              <div className="flex w-full justify-center p-16">
                <PLink
                  href="/event"
                  text="View All"
                  styles="bg-primary text-white rounded-full px-4"
                />
              </div>
            </div>
          </div>
          <CurvedBg className="max-w-[700px]" />
        </div>
      </div>

      {/* Mobile Events Section */}
      <div className="w-full flex flex-col items-end xl:hidden z-10 top-[40px]">
        <Image
          src={"/div.jpg"}
          alt=""
          width={200}
          height={200}
          className="mr-12 md:mr-24 mb-12"
        />
        <div className="relative w-full">
          <div className="mt-20 flex items-center justify-center">
            <div>
              <h2 className="text-primary mb-3 text-center font-bold text-[25px] md:text-[39px] font-inter">
                Join Our Upcoming Events
              </h2>
              <div className="">
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  upcomingEvents.map((event) => {
                    const { date_month, date_day, year } = formatEventDate(
                      event.date
                    );
                    return (
                      <div
                        key={event.id}
                        className="flex border-b border-[#DBDBDB] py-2"
                      >
                        <div className="font-semibold text-[#00305E] text-[21px] font-inter mr-6">
                          <p className="text-[12px] border-b-2 border-[#9ACA3C] pb-1">
                            {date_month}
                          </p>
                          {date_day}
                        </div>
                        <p className="font-inter font-normal text-[20px] text-gray line-clamp-2">
                          {event.title}
                        </p>
                      </div>
                    );
                  })
                )}
              </div>
              <div className="flex w-full justify-center p-16">
                <PLink
                  href="/event"
                  text="View All"
                  styles="bg-primary text-white rounded-full px-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMore;
