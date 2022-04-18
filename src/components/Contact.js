import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", select: "", comment: "" })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Mesajınız gönderildi.")
    setForm({
      name: "",
      email: "",
      select: "",
      comment: ""
    })
    console.log(form);
  }

  return (
    <div className="container bg-white mt-3 p-5 mb-5" style={{ width: "130vh", height: "auto" }}>
      <div className="row ">
        <div className=" text-center">
          <h3>Bize Ulaşın</h3>
          <p>Sorularınızı ve önerilerinizi ister anonim bir şekilde isterseniz email <br /> adresiniz ile dilediğiniz zaman bizlere iletebilirsiniz!</p>
        </div>
        <form onSubmit={handleSubmit} className="input-group d-flex justify-content-center">
          <div className="col-sm-6 px-3" style={{ width: "55.5vh" }}>
            <label className="form-label">İsim:</label>
            <input
              onChange={handleChange}
              value={form.name}
              name="name"
              type="text"
              className="form-control"
              placeholder="Boş bırakılabilir" />
          </div>
          <div className="col-sm-6 px-3" style={{ width: "55.5vh" }}>
            <label className="form-label">Email:</label>
            <input
              onChange={handleChange}
              value={form.email}
              name="email"
              type="text"
              className="form-control"
              placeholder="Boş bırakılabilir" />
          </div>
          <div className="col-sm-11 mt-3">
            <label className="form-label">Konu:</label>
            <select
              onChange={handleChange}
              value={form.select}
              name='select'
              className="form-select"
              aria-label="Default select example">
              <option defaultValue>Soru</option>
              <option value="İstek">İstek</option>
              <option value="Geri Bildirim">Geri Bildirim</option>
              <option value="Diğer">Diğer</option>
            </select>
          </div>
          <div className="col-sm-11 mt-3">
            <label className="form-label">Mesaj:</label>
            <textarea
              onChange={handleChange}
              value={form.comment}
              name='comment'
              className="form-control"
              placeholder="Mesaj" id="floatingTextarea2"
              tyle={{ height: "150px" }}>
            </textarea>
          </div>
          <button
            disabled={!form.name || !form.email || !form.select || !form.comment}
            type="submit"
            className="btn btn-danger btn-lg mt-3 rounded">
            Gönder
          </button>
        </form>
      </div>
    </div>

  )
}

export default Contact