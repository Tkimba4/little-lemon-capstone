import style from "./BookingSuccess.module.scss";

const BookingSuccess = ({ reservation, close }) => {
  const closeModal = () => {
    close(false);
  };

  return (
    <div className={style.modal}>
      <div
        className={style.modalDialog}
        data-aos="flip-right"
        data-aos-duration="300"
      >
        <button
          onClick={closeModal}
          aria-label="close"
          className={style.btnClose}
        >
          <img src="icons/close.svg" alt="close" width={30} height={30} />
        </button>
        <div className={style.content}>
          <img src="icons/success.svg" alt="success" width={100} height={100} />
          <h4 className="title">Success!</h4>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{reservation.name}</td>
              </tr>
              <tr>
                <th>Date</th>
                <td>{reservation.date}</td>
              </tr>
              <tr>
                <th>Time</th>
                <td>{reservation.time}</td>
              </tr>
              <tr>
                <th>Guest</th>
                <td>{reservation.guests}</td>
              </tr>
              <tr>
                <th>Occasion</th>
                <td>{reservation.occasion}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
