import { format } from "date-fns";
import ko from "date-fns/locale/ko"; // locale 한글버전
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // 메인 스타일
import "react-date-range/dist/theme/default.css"; // 기본 테마 스타일
import "./dateRangePicker.scss";

const DateRangePicker = ({ onDateChange, showPicker, togglePicker }) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
    const { startDate, endDate } = ranges.selection;
    onDateChange({ startDate, endDate });
  };

  const formatDate = (date) => format(date, "yyyy-MM-dd");

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

    // // 캘린더 외부 클릭 감지
    // useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (pickerRef.current && !pickerRef.current.contains(event.target)) {
    //       setShowPicker(false);
    //     }
    //   };
  
    //   document.addEventListener("mousedown", handleClickOutside);
    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // }, [setShowPicker]);

  return (
    <div>
      <input
        type="text"
        readOnly
        value={`${formatDate(range[0].startDate)} ~ ${formatDate(
          range[0].endDate
        )}`}
        onClick={togglePicker}
        style={{ cursor: "pointer" }}
        className="date-picker-input"
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
            minDate={new Date()}
            locale={ko} // 한글 로케일로 적용
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


export default DateRangePicker;
