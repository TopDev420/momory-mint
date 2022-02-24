import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import { FaInstagram } from "react-icons/fa"

const initialState = {
  name: "",
  email: "",
  message: "",
  verify: ""
}
export const Contact = () => {
  const [{ name, email, message, verify }, setState] = useState(initialState)
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)

  useEffect(() => {
    const min = Math.ceil(1)
    const max = Math.floor(30)

    setnum1(Math.floor(Math.random() * (max - min) + min))
    setnum2(Math.floor(Math.random() * (max - min) + min))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id="contact">
        <div className="contain">
          <div className="row">
            <div className="topic">
              <h1>REACH OUT</h1>
            </div>
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <div className="form-group">
                <button type="submit" className="btn btn-custom">
                  Submit
                </button>
                <div className="captcha">
                  <span>
                    {num1} + {num2} =
                  </span>
                  <input
                    id="verify"
                    name="verify"
                    required
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
