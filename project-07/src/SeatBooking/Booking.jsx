import { useState } from "react";

function Booking() {
  // Array to track the clicked state of each seat
  const [seats, setSeats] = useState(Array(25).fill(false)); // 5x5 grid, so 25 seats
  const [seatCount, setSeatCount] = useState(0);

  const handleClick = (index) => {
    // Toggle the clicked state for the selected seat
    const newSeats = [...seats];
    newSeats[index] = !newSeats[index];

    // if(seatCount>= 5 ){
    //     alert("user can only select 5 seats")
    //     setSeatCount(5)
    //     if(seatCount == 5 ){
    //         newSeats[index] = !newSeats[index];

    //     }
        
    // }

    // Update the seat state
    setSeats(newSeats);

    // Update the seat count
    setSeatCount(newSeats.filter((seat) => seat).length);

  
  };

  return (
    <>
      <div>
        <h1>VIP (5 x 5)</h1>
        <div className="grid grid-cols-5 col-auto grid-rows-5">
          {seats.map((isClicked, index) => (
            <p
              key={index}
              className={`${isClicked ? "bg-red-400" : "bg-green-500"} m-2 p-2 w-20 text-center`}
              onClick={() => handleClick(index)}
            >
              {index + 1}
            </p>
          ))}
        </div>
      </div>

      <div>
        <p>Seats selected: {seatCount}</p>
      </div>
    </>
  );
}

export default Booking;
