"use client"

import { useState, useEffect } from "react"

interface CalendlyEvent {
  uri: string
  name: string
  status: string
  start_time: string
  end_time: string
}

interface EventType {
  uri: string
  name: string
  scheduling_url: string
  duration: number
}

interface CalendlyData {
  user: any
  eventTypes: EventType[]
  scheduledEvents: CalendlyEvent[]
}

export default function CalendlyDashboard() {
  const [data, setData] = useState<CalendlyData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCalendlyData()
  }, [])

  const fetchCalendlyData = async () => {
    try {
      const response = await fetch("/api/calendly-events")
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error("Error fetching Calendly data:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!data) {
    return <div className="text-center p-8 text-red-600">Failed to load Calendly data</div>
  }

  return (
    <div className="space-y-8">
      {/* User Info */}
      <div className="subtle-card p-6">
        <h3 className="text-xl font-semibold mb-4">Account Information</h3>
        <p className="text-gray-600">Name: {data.user.name}</p>
        <p className="text-gray-600">Email: {data.user.email}</p>
      </div>

      {/* Event Types */}
      <div className="subtle-card p-6">
        <h3 className="text-xl font-semibold mb-4">Available Event Types</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {data.eventTypes.map((eventType) => (
            <div key={eventType.uri} className="border rounded-2xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium">{eventType.name}</h4>
              <p className="text-sm text-gray-600">{eventType.duration} minutes</p>
              <a
                href={eventType.scheduling_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="subtle-card p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Bookings</h3>
        {data.scheduledEvents.length > 0 ? (
          <div className="space-y-3">
            {data.scheduledEvents.slice(0, 5).map((event) => (
              <div key={event.uri} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium">{event.name}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(event.start_time).toLocaleDateString()} at{" "}
                    {new Date(event.start_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    event.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No recent bookings</p>
        )}
      </div>
    </div>
  )
}
