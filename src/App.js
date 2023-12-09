import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { mainData } from "./Variables";

import "swiper/css";

const EmptyDate = () => {
    return <div class="w-full"></div>;
};

const NormalDate = ({ events, setSelectedDate, setEventData, FullDate, SmallDate, Date, Day, color }) => {
    return (
        <div
            onClick={() => {
                setEventData(events);
                let date = SmallDate.split("/")[1] + " - " + SmallDate.split("/")[0] + " - " + SmallDate.split("/")[2];
                setSelectedDate(date);
            }}
            id={FullDate}
            data-date={SmallDate}
            class={"transition-all duration-700 w-full text-center truncate px-1 inline-block align-middle h-20 border-2 " + (color.includes("orange-400") ? "border-orange-400 dark:border-orange-400" : color.includes("blue-400") ? "border-blue-400 dark:border-blue-400" : "border-white dark:border-slate-700") + " rounded-lg hover:border-slate-800 dark:hover:border-white max-h-fit py-1 text-auto text-slate-800 dark:text-white overflow-hidden bg-" + color}
        >
            <div class="font-bold text-xl">{Date}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 truncate">{Day}</div>
        </div>
    );
};

const MultipleDate = ({ events, setSelectedDate, setEventData, FullDate, SmallDate, Date, Day, Event, color }) => {
    return (
        <div
            onClick={() => {
                setEventData(events);
                let date = SmallDate.split("/")[1] + " - " + SmallDate.split("/")[0] + " - " + SmallDate.split("/")[2];
                setSelectedDate(date);
            }}
            id={FullDate}
            data-date={SmallDate}
            class={"transition-all duration-700 w-full text-center truncate px-1 inline-block align-middle h-20 border-2 " + (color.includes("orange-400") ? "border-orange-400 dark:border-orange-400" : color.includes("blue-400") ? "border-blue-400 dark:border-blue-400" : "border-white dark:border-slate-700") + " rounded-lg hover:border-slate-800 dark:hover:border-white max-h-fit py-1 text-auto text-slate-800 dark:text-white overflow-hidden bg-" + color}
        >
            <div class="font-bold text-xl">{Date}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 truncate">{Day}</div>
            <div class="text-[8px] leading-3 text-blue-500 truncate">{Event}</div>
        </div>
    );
};

const TempleDate = ({ events, setSelectedDate, setEventData, FullDate, SmallDate, Date, color }) => {
    return (
        <div
            onClick={() => {
                setEventData(events);
                let date = SmallDate.split("/")[1] + " - " + SmallDate.split("/")[0] + " - " + SmallDate.split("/")[2];
                setSelectedDate(date);
            }}
            id={FullDate}
            data-date={SmallDate}
            class={"transition-all duration-700 w-full text-center truncate px-1 inline-block align-middle h-20 border-2 " + (color.includes("orange-400") ? "border-orange-400 dark:border-orange-400" : color.includes("blue-400") ? "border-blue-400 dark:border-blue-400" : "border-white dark:border-slate-700") + " rounded-lg hover:border-slate-800 dark:hover:border-white max-h-fit py-1 text-auto text-slate-800 dark:text-white overflow-hidden bg-" + color}
        >
            <div class="font-bold text-xl">{Date}</div>
            <img src="/assets/SHA_logo.png" class="p-1 h-auto w-10  mx-auto" />
        </div>
    );
};

const ImageDate = ({ events, setSelectedDate, setEventData, FullDate, SmallDate, Date, Url, color }) => {
    return (
        <div
            onClick={() => {
                setEventData(events);
                let date = SmallDate.split("/")[1] + " - " + SmallDate.split("/")[0] + " - " + SmallDate.split("/")[2];
                setSelectedDate(date);
            }}
            id={FullDate}
            data-date={SmallDate}
            class={"transition-all duration-700 w-full text-center truncate px-1 inline-block align-middle h-20 border-2 " + (color.includes("orange-400") ? "border-orange-400 dark:border-orange-400" : color.includes("blue-400") ? "border-blue-400 dark:border-blue-400" : "border-white dark:border-slate-700") + " rounded-lg hover:border-slate-800 dark:hover:border-white max-h-fit py-1 text-auto text-slate-800 dark:text-white overflow-hidden bg-" + color}
        >
            <div class="font-bold text-xl">{Date}</div>
            <img src={Url} class="p-1 h-auto w-10  mx-auto" />
        </div>
    );
};

const EventDate = ({ Event, color }) => {
    return <div class={"rounded-lg border border-l-[6px]  text-black dark:text-white shadow-lg mx-5 py-1 px-3 mt-3 border-" + color}>{Event}</div>;
};

function App() {
    const [swiperMain, setSwiperMain] = useState(null);
    const [eventData, setEventData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    var CalenderData = "";
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    function themeChanger() {
        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.theme = "dark";
            if (!document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.add("dark");
            }
        }
    }

    function colorMenu() {
        document.getElementById("colorInfo").classList.toggle("opacity-0");
        document.getElementById("colorInfo").classList.toggle("-translate-y-full");
    }

    useEffect(() => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            if (!document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.add("dark");
            }
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }

        setTimeout(() => {
            document.getElementById("loadingScreen").classList.add("opacity-0");
            document.getElementById("loadingScreen").classList.add("-translate-y-full");
        }, 1000);
    }, []);

    function todaySelector() {
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();
        setSelectedDate(day + " - " + (month + 1) + " - " + year);
        let date = day + "/" + monthNames[month] + "/" + year;
        let currentIndex = 0;
        for (let i = 0; i < Object.keys(mainData).length; i++) {
            let tempyear = Object.keys(mainData)[i];
            if (Object.keys(mainData)[i] === year.toString()) {
                for (let j = 0; j < Object.keys(mainData[tempyear]).length; j++) {
                    if (Object.keys(mainData[tempyear])[j] === monthNames[month]) {
                        break;
                    } else {
                        currentIndex += 1;
                    }
                }
                break;
            } else {
                currentIndex += Object.keys(mainData.tempyear).length;
            }
        }
        swiperMain.slideTo(currentIndex, 500);
        document.getElementById(date).classList.remove("border-2", "border-white", "dark:border-slate-700");
        document.getElementById(date).classList.add("border-4", "border-orange-600", "dark:border-orange-600");
    }

    useEffect(() => {
        try {
            todaySelector();
        } catch {}
    }, [swiperMain]);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-700 transition-all duration-700">
            <div id="loadingScreen" className="h-screen w-screen absolute top-0 left-0 z-50 bg-white transition-all duration-700">
                <img className="h-full w-full object-cover" src="/assets/loading.png" alt="" />
            </div>
            <div
                id="colorInfo"
                onClick={() => {
                    colorMenu();
                }}
                className="h-screen w-screen fixed top-0 left-0 z-40 bg-black/50 opacity-0 -translate-y-full transition-all duration-200"
            >
                <div
                    onClick={() => {
                        colorMenu();
                    }}
                    className="h-fit w-[70%] mx-[15%] mt-32 pb-3 border-2 border-slate-400 rounded-lg absolute top-0 left-0 z-40 bg-white dark:bg-slate-900 shadow-xl transition-all duration-200"
                >
                    <h1 className="text-xl text-black dark:text-white text-center mt-2 font-bold mb-2">Colors</h1>
                    <h1 className="bg-slate-400 dark:bg-slate-500 mx-3 px-3 py-1 text-white rounded-lg mb-1">Amas Tithi</h1>
                    <h1 className="bg-orange-200 mx-3 px-2 py-1 text-black rounded-lg mb-1">Ekadashi Tithi</h1>
                    <h1 className="border-2 border-blue-400 mx-3 px-2 py-1 text-black dark:text-white rounded-lg mb-1">Mandir Festival</h1>
                    <h1 className="border-2 border-orange-400 mx-3 px-2 py-1 text-black dark:text-white rounded-lg mb-1">Government Festival</h1>
                    <h1 className="border-4 border-orange-600 mx-3 px-2 py-1 text-black dark:text-white rounded-lg mb-1">Today</h1>
                    <h1 className="border-2 border-black dark:border-white mx-3 px-2 py-1 text-black dark:text-white rounded-lg mb-1">Selected Date</h1>
                </div>
            </div>
            <div className="bg-[#f79433] dark:bg-slate-900 h-fit  sticky top-0 z-40 shadow-xl  transition-all duration-700">
                <h1 className="text-white font-bold text-2xl w-full text-center py-4">Haridham Calender</h1>
                <svg
                    onClick={() => {
                        colorMenu();
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="white"
                    className="absolute top-4 left-2"
                    viewBox="0 0 16 16"
                >
                    <path stroke="white" fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <button
                    onClick={() => {
                        themeChanger();
                    }}
                    type="button"
                    data-toggle-dark="light"
                    className="absolute right-2 top-4 items-center p-2 mr-2 text-xs font-medium text-gray-700 rounded-lg bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    <svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4 block dark:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4 hidden dark:block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">Toggle dark/light mode</span>
                </button>
            </div>
            <Swiper
                ref={swiperMain}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => {
                    setSwiperMain(swiper);
                }}
            >
                {Object.keys(mainData).map((year, yearIndex) => {
                    return (
                        <>
                            {Object.keys(mainData[year]).map((month, monthIndex) => {
                                return (
                                    <SwiperSlide>
                                        <div className="w-full py-2">
                                            <p className="w-full text-center align-middle py-1-xl font-bold text-slate-800 dark:text-white">
                                                {month} {year}
                                            </p>
                                            <p className="w-full text-center align-middle py-1-sm text-slate-500 dark:text-white/50">{mainData[year][month]["GujName"]}</p>
                                        </div>
                                        <div className="grid grid-cols-7 px-2 gap-1" key={yearIndex * 100 + monthIndex}>
                                            <p className="w-full text-center text-blue-500 dark:text-blue-400 font-bold text-lg">Mon</p>
                                            <p className="w-full text-center text-blue-500 dark:text-blue-400 font-bold text-lg">Tue</p>
                                            <p className="w-full text-center text-blue-500 dark:text-blue-400 font-bold text-lg">Wed</p>
                                            <p className="w-full text-center text-blue-500 dark:text-blue-400 font-bold text-lg">Thu</p>
                                            <p className="w-full text-center text-blue-500 dark:text-blue-400 font-bold text-lg">Fri</p>
                                            <p className="w-full text-center text-blue-500 dark:text-blue-400 font-bold text-lg">Sat</p>
                                            <p className="w-full text-center text-blue-500 dark:text-blue-400 font-bold text-lg">Sun</p>

                                            {Array.from({ length: mainData[year][month].startEmpty }).map((item, index) => {
                                                return <EmptyDate key={index} />;
                                            })}

                                            {Object.keys(mainData[year][month]).map((day, dayIndex) => {
                                                if (!isNaN(parseInt(day))) {
                                                    let dayName = mainData[year][month][day].data[0];
                                                    let key = yearIndex * 10000 + monthIndex * 100 + dayIndex;
                                                    let color = "";
                                                    if (mainData[year][month][day].data[0] === "Ekadashi") {
                                                        color = "orange-200";
                                                    } else if (mainData[year][month][day].data[0] === "Amas") {
                                                        color = "slate-200 dark:bg-slate-500";
                                                    } else {
                                                        let tempFlag = 0;
                                                        let tempFlag2 = 0;
                                                        for (let i in mainData[year][month][day]["events"]) {
                                                            if (mainData[year][month][day]["events"][i]["color"] === "orange-400") {
                                                                tempFlag = 1;
                                                                break;
                                                            }
                                                            if (mainData[year][month][day]["events"][i]["color"] === "blue-400") {
                                                                tempFlag2 = 1;
                                                            }
                                                        }
                                                        if (tempFlag === 1) {
                                                            color = " border-orange-400 dark:border-orange-400";
                                                        }
                                                        if (tempFlag2 === 1 && tempFlag === 0) {
                                                            color = " border-blue-400 dark:border-blue-400";
                                                        }
                                                    }
                                                    let event = "";
                                                    for (let i = 1; i < mainData[year][month][day].data.length; i++) {
                                                        event += mainData[year][month][day].data[i] + "\n";
                                                    }
                                                    let fullDate = day + "/" + month + "/" + year;
                                                    let smallDate = (monthNames.indexOf(month) + 1).toString() + "/" + day + "/" + year;

                                                    if (mainData[year][month][day].type === "normalDate") {
                                                        return <NormalDate key={key} setSelectedDate={setSelectedDate} setEventData={setEventData} events={mainData[year][month][day]["events"]} FullDate={fullDate} SmallDate={smallDate} Date={day} Day={dayName} color={color} />;
                                                    } else if (mainData[year][month][day].type === "multipleDate") {
                                                        return <MultipleDate key={key} setSelectedDate={setSelectedDate} setEventData={setEventData} events={mainData[year][month][day]["events"]} FullDate={fullDate} SmallDate={smallDate} Date={day} Day={dayName} Event={event} color={color} />;
                                                    } else if (mainData[year][month][day].type === "imageDate") {
                                                        return <ImageDate key={key} setSelectedDate={setSelectedDate} setEventData={setEventData} events={mainData[year][month][day]["events"]} FullDate={fullDate} SmallDate={smallDate} Date={day} Url={mainData[year][month][day]["data"][0]} color={color} />;
                                                    } else if (mainData[year][month][day].type === "templeDate") {
                                                        return <TempleDate key={key} setSelectedDate={setSelectedDate} setEventData={setEventData} events={mainData[year][month][day]["events"]} FullDate={fullDate} SmallDate={smallDate} Date={day} color={color} />;
                                                    } else {
                                                        return <p key={key}>{day}</p>;
                                                    }
                                                }
                                            })}
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </>
                    );
                })}
            </Swiper>
            <hr />
            <div className="z-40 w-full h-fit pb-5 bg-white dark:bg-slate-700 transition-all duration-700">
                <div className="flex flex-nowrap justify-between py-3 mx-5">
                    <button className="bg-red-200 px-5 text-red-800 rounded-md border border-red-800">Info</button>
                    <h1 id="BelowDate" className="font-thin text-xl dark:text-white">
                        {selectedDate}
                    </h1>
                    <button
                        onClick={() => {
                            todaySelector();
                        }}
                        id="todayBtn"
                        className="bg-blue-200 px-5 text-blue-800 rounded-md border border-blue-800"
                    >
                        Today
                    </button>
                </div>
                <div id="eventContainer" className="relative h-full">
                    {eventData.map((event, index) => {
                        return <EventDate key={index} Event={event.name} color={event.color} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
