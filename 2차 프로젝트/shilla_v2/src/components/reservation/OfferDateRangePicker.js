import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../../scss/dateRangePicker.scss";

const OfferDateRangePicker = ({
  onDateChange,
  showPicker,
  togglePicker,
  minDate,
  maxDate,
}) => {
  const [range, setRange] = useState([
    {
      startDate: minDate || new Date(),
      endDate: minDate || new Date(),
      key: "selection",
    },
  ]);

  console.log("onDateChange, showPicker, togglePicker, minDate, maxDate : ",onDateChange, showPicker, togglePicker, minDate, maxDate)

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setRange([ranges.selection]);
    onDateChange({ startDate, endDate });
  };

  const formatDate = (date) => (date ? format(date, "yyyy-MM-dd") : "");

  return (
    <div>
      <input
        type="text"
        readOnly
        value={`${formatDate(range[0].startDate)} ~ ${formatDate(
          range[0].endDate
        )}`}
        onClick={togglePicker}
        className="date-picker-input"
        style={{ cursor: "pointer" }}
      />
      {showPicker && (
        <div className="date-picker-popup">
          <DateRange
            editableDateInputs
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            minDate={minDate}
            maxDate={maxDate}
            locale={ko}
          />
        </div>
      )}
    </div>
  );
};

export default OfferDateRangePicker;
