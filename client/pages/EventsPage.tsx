import { useState, useEffect } from "react";
import { getEvents, Event } from "@/lib/supabase";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 },
    );

    const cards = document.querySelectorAll(".event-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [events]);

  const loadEvents = async () => {
    try {
      const result = await getEvents();
      if (result.success) {
        setEvents(result.data);
      }
    } catch (error) {
      console.error("Error loading events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredEvents = events.filter(
    (event) => selectedType === "all" || event.type === selectedType,
  );

  const eventTypes = [
    { value: "all", label: "All Events", count: events.length },
    ...Array.from(new Set(events.map((e) => e.type))).map((type) => ({
      value: type,
      label: type,
      count: events.filter((e) => e.type === type).length,
    })),
  ].filter((type) => type.count > 0);

  const getEventTypeColor = (type: string) => {
    const colors = {
      Workshop: "from-blue-500 to-blue-600",
      Bootcamp: "from-green-500 to-green-600",
      Seminar: "from-red-500 to-red-600",
      Sprint: "from-yellow-500 to-yellow-600",
      Competition: "from-purple-500 to-purple-600",
    };
    return colors[type as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  const getEventBgColor = (type: string) => {
    const colors = {
      Workshop: "bg-blue-50",
      Bootcamp: "bg-green-50",
      Seminar: "bg-red-50",
      Sprint: "bg-yellow-50",
      Competition: "bg-purple-50",
    };
    return colors[type as keyof typeof colors] || "bg-gray-50";
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Events"
        description="Discover exciting workshops, seminars, and hands-on sessions organized by GDGoC IET DAVV. Join our tech events to enhance your skills and expand your network."
        keywords="GDGoC events, tech workshops, programming seminars, coding bootcamps, developer meetups, IET DAVV events, technology workshops, student events"
      />

      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Circles */}
            <div className="absolute top-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full animate-float blur-xl"></div>
            <div
              className="absolute top-40 right-32 w-24 md:w-48 h-24 md:h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-xl"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-32 left-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-full animate-float blur-xl"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute bottom-20 right-20 w-28 md:w-56 h-28 md:h-56 bg-gradient-to-r from-red-400/20 to-yellow-400/20 rounded-full animate-float blur-xl"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 md:grid-cols-16 h-full gap-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="border-r border-gray-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-1/4 left-16 w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 right-16 w-6 h-6 bg-blue-500 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-red-500 rotate-12 animate-bounce"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <div className="animate-slide-up">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gray-900">Events &</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-green-600 animate-gradient-x">
                  Workshops
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Join us for exciting workshops, seminars, and hands-on sessions
                designed to enhance your technical skills and expand your
                professional network.
              </p>

              {/* Stats */}
              <div
                className="flex flex-wrap justify-center gap-8 mb-8 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600">
                    {events.length}+
                  </div>
                  <div className="text-gray-600">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">
                    {eventTypes.length - 1}
                  </div>
                  <div className="text-gray-600">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-600">
                    {events.reduce((sum, event) => sum + event.attendees, 0)}+
                  </div>
                  <div className="text-gray-600">Attendees</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="https://chat.whatsapp.com/CcTjDYXNfQMEoLUHzB3hwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-animate bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium transform hover:scale-105"
                >
                  Join Our Community
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("events-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-animate border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 font-medium transform hover:scale-105"
                >
                  Explore Events
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-green-600 transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById("events-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section
          id="events-section"
          className="py-16 md:py-20 bg-white relative overflow-hidden"
        >
          <div className="relative z-10 container-responsive">
            {/* Filter Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Explore by Category
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {eventTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value)}
                    className={`
                      px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105
                      ${
                        selectedType === type.value
                          ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                      }
                    `}
                  >
                    {type.label}
                    <span className="ml-2 text-xs opacity-75">
                      ({type.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="text-center py-20">
                <div className="flex justify-center mb-8">
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div
                      className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-4 h-4 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                    <div
                      className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    ></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Loading amazing events...
                </h3>
              </div>
            ) : filteredEvents.length === 0 ? (
              /* Empty State */
              <div className="text-center py-20">
                <div className="text-8xl mb-8">📅</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Exciting Events Coming Soon!
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                  We're planning amazing workshops and events for our community.
                  Stay tuned for updates!
                </p>
                <a
                  href="https://chat.whatsapp.com/CcTjDYXNfQMEoLUHzB3hwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-animate bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium inline-block transform hover:scale-105"
                >
                  Get Notified
                </a>
              </div>
            ) : (
              /* Events Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <div
                    key={event.id}
                    data-index={index}
                    className={`
                      event-card group relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 
                      overflow-hidden border border-white/50 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2
                      ${getEventBgColor(event.type)}
                      ${
                        visibleCards.has(index)
                          ? "animate-slide-up opacity-100"
                          : "opacity-0"
                      }
                    `}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Event Header Bar */}
                    <div
                      className={`h-2 bg-gradient-to-r ${getEventTypeColor(event.type)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>

                    {/* Event Image */}
                    {event.image && (
                      <div className="relative h-78 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Event Type Badge */}
                        <div
                          className={`absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getEventTypeColor(event.type)} text-white shadow-lg`}
                        >
                          <span className="mr-1">
                            {event.type === "Workshop" && "🛠️"}
                            {event.type === "Bootcamp" && "🚀"}
                            {event.type === "Seminar" && "📚"}
                            {event.type === "Sprint" && "⚡"}
                            {event.type === "Competition" && "🏆"}
                          </span>
                          {event.type}
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Event Meta */}
                      <div className="flex justify-between items-start mb-4">
                        {!event.image && (
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getEventTypeColor(event.type)} text-white shadow-lg`}
                          >
                            <span className="mr-1">
                              {event.type === "Workshop" && "🛠️"}
                              {event.type === "Bootcamp" && "🚀"}
                              {event.type === "Seminar" && "📚"}
                              {event.type === "Sprint" && "⚡"}
                              {event.type === "Competition" && "🏆"}
                            </span>
                            {event.type}
                          </div>
                        )}
                        <div className="text-right text-gray-600">
                          <div className="font-semibold text-gray-900">
                            {event.date}
                          </div>
                          <div className="text-sm">{event.time}</div>
                        </div>
                      </div>

                      {/* Event Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                        {event.description}
                      </p>

                      {/* Event Footer */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                          <span className="mr-1 text-lg">👥</span>
                          <span className="text-sm font-medium">
                            {event.attendees} registered
                          </span>
                        </div>

                        {event.registration_link ? (
                          <a
                            href={event.registration_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center px-4 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r ${getEventTypeColor(event.type)} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                          >
                            <span className="mr-1">🎯</span>
                            Register
                          </a>
                        ) : (
                          <button
                            className={`inline-flex items-center px-4 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r ${getEventTypeColor(event.type)} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                          >
                            <span className="mr-1">🎯</span>
                            Register
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${getEventTypeColor(event.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                    ></div>

                    {/* Floating Decorative Element */}
                    <div
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full animate-float opacity-60 shadow-lg"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    ></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container-responsive text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our community of passionate developers and participate in
              hands-on learning experiences that will accelerate your career
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/CcTjDYXNfQMEoLUHzB3hwa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-animate bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium transform hover:scale-105"
              >
                Join Our Community
              </a>
              <a
                href="/projects"
                className="btn-animate border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 font-medium transform hover:scale-105"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
