import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const [inputText, setInputText] = useState({ email: "" }
  )

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Aboneliğiniz oluşturuldu.");
    setInputText({
      email: ""
    })

  }

  return (
    <div className="container bg-light mt-3 p-5 mb-5" style={{ width: "200vh" }}>
      <div className="row">
        <div className="col-sm-12">
          <p className="fs-5">Merhaba,</p>
          <p className="fs-5">
            In ornare quam viverra orci sagittis eu volutpat odio facilisis.
            Laoreet suspendisse interdum consectetur libero.
            Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed.
            Nulla facilisi nullam vehicula ipsum a. Posuere sollicitudin aliquam ultrices sagittis orci. Dui id ornare arcu odio.
          </p>
          <p className="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis nulla voluptatem ratione rerum mollitia qui ut tempore, 
            iusto quaerat perspiciatis assumenda non a culpa voluptatum adipisci neque delectus voluptates vero!
          </p>
          <p className="fs-5">
            Eğer aşağıda email adresinizi girebileceğiniz bir kutucuk
            görünmüyorsa <Link onClick={() => window.open("https://substack.com/")} to="/newsletter" className="text-dark">buraya tıklayarak</Link>
            &nbsp;abone olabilirsiniz.
          </p>
        </div>
        <div className="col-sm-12 mt-5 ">
          <h2 className="text-center fw-bold ">Lorem ipsum dolor sit amet </h2>
          <p className="text-center">Haftalık lorem ipsum dolor sit amet bülteni!</p>
          <div className="input-group mb-3 m-auto " style={{ width: "300px", height: "55px" }}>
            <input
              onChange={handleChange}
              value={inputText.email}
              name="email"
              type="text"
              className="form-control border-danger"
              placeholder="Type your email.."
            />
            <button
              onClick={handleSubmit}
              type='submit'
              className="input-group-text bg-danger fw-bold text-light"
              id="basic-addon1">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
