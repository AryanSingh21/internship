import react, { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: " ",
    number: " ",
    hobbies: " ",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const sendData = async (e) => {
    const { name, email, number, hobbies } = user;

    const res = await fetch("http://localhost:4000/register", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        number: number,
        hobbies: hobbies,
      }),
    });
    const data = await res.json();

    if (!data) {
      window.alert("Invalid registration");
    } else {
      window.alert("Registration successfull");
    }
  };

  return (
    <div className="box1">
      <form method="POST">
        <div class="form-group">
          <div>
            <label for="exampleInputEmail1">Name</label>
            <input
              type="name"
              name="name"
              class="form-control"
              placeholder="Enter your name here"
              value={user.name}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label for="exampleInputEmail1">Number</label>
            <input
              type="number"
              name="number"
              class="form-control"
              placeholder="Enter your number here"
              value={user.number}
              onChange={handleInputs}
            />
          </div>
          <div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={user.email}
              onChange={handleInputs}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div>
            <label for="hobbies">Hobbies</label>
            <textarea
              name="hobbies"
              id=""
              cols="10"
              rows="2"
              class="form-control"
              placeholder="Enter your Hobbies here.."
              value={user.hobbies}
              onChange={handleInputs}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary" onClick={sendData}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
