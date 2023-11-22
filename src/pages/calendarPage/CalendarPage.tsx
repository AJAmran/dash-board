import { useState } from "react";
import {
  Calendar,
  momentLocalizer,
  NavigateAction,
  ToolbarProps,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendarPage.scss";

const localizer = momentLocalizer(moment);

interface Event {
  title: string;
  start: Date;
  end: Date;
}

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Event 1",
      start: new Date(),
      end: new Date(),
    },
  ]);

  const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
    const title = window.prompt("New Event Title");
    if (title) {
      setEvents([...events, { title, start, end }]);
    }
  };

  const customEventPropGetter = () => {
    return {
      style: {
        backgroundColor: "#19376D",
        color: "#FFFFFF",
        borderRadius: "5px",
      },
    };
  };

  return (
    <div className="calendar-page">
      <h2>My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        components={{
          toolbar: CustomToolbar as any,
        }}
        eventPropGetter={customEventPropGetter}
      />
    </div>
  );
};

interface CustomToolbarProps extends ToolbarProps<Event, any> {
  // Adjust here
  onNavigate: (action: NavigateAction, date?: Date) => void; // Adjust here
  label: string;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({ onNavigate, label }) => {
  const goToBack = () => {
    onNavigate("PREV");
  };

  const goToToday = () => {
    onNavigate("TODAY");
  };

  const goToNext = () => {
    onNavigate("NEXT");
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={goToBack}>
          Back
        </button>
        <button type="button" onClick={goToToday}>
          Today
        </button>
        <button type="button" onClick={goToNext}>
          Next
        </button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
    </div>
  );
};

export default CalendarPage;
