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
  // 유효한 Date 객체로 기본값 설정
  const validMinDate = minDate instanceof Date && !isNaN(minDate) ? minDate : new Date();
  const validMaxDate = maxDate instanceof Date && !isNaN(maxDate) ? maxDate : new Date();

  const [range, setRange] = useState([
    {
      startDate: validMinDate,
      endDate: validMinDate,
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    if (startDate < validMinDate || endDate > validMaxDate) {
      alert("선택 가능한 날짜 범위를 벗어났습니다.");
      return;
    }

    setRange([ranges.selection]);
    onDateChange({ startDate, endDate });
  };
  const formatDate = (date) => (date instanceof Date && !isNaN(date) ? format(date, "yyyy-MM-dd") : "");

  const handleCancel = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    togglePicker();
  };

  const handleConfirm = () => {
    togglePicker();
  };

  console.log("Valid Min Date:", validMinDate, "Valid Max Date:", validMaxDate);

  return (
    <div>
      <input
        type="text"
        readOnly
        value={`${formatDate(range[0].startDate)} ~ ${formatDate(range[0].endDate)}`}
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
            minDate={validMinDate}
            maxDate={validMaxDate}
            locale={ko}
          />
          <div className="date-picker-footer">
            <div className="selected-dates">
              <p>시작일: {formatDate(range[0].startDate)}</p>
              <p>종료일: {formatDate(range[0].endDate)}</p>
            </div>
            <div className="footer-buttons">
              <button onClick={handleCancel} className="cancel-button">
                취소
              </button>
              <button onClick={handleConfirm} className="confirm-button">
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferDateRangePicker;
