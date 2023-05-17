import React, { Component } from "react";

export default class Personsbio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: [
        {
          name: "Philip Nii kwatei Nunoofio",
          description: "I love to Code at Codetrain coding bootcamp",
        },
        {
          name: "Manuel Onukpa Gh",
          description: "He love to eat and sleep all the time",
        },
        {
          name: "",
          description: "",
        },
      ],
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value });
    console.log(this.state.name);
    console.log(this.state.description);
  };
  handleSubmit=(e)=>{
    e.preventDefault();
    const newPerson={
        name: this.state.name,
        description: this.state.description
    }
    this.setState({
        person:[...this.state.person, newPerson],
        name:"",
        description:""
    })
  }
 

  render() {
    return (
      <section style={{ marginTop: "90px" }}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label>Description</label>
            <br />
            <textarea
              name="description"
              value={this.state.description}
            onChange={this.handleChange}></textarea>
          </div>
          <button>Submit</button>
        </form>

        {this.state.person.map((item, index) => {
          return (
            <div key={index}>
              <h4>Name: {item.name}</h4>
              <p>{item.description}</p>
              <hr style={{ width: "50%" }} />
            </div>
          );
        })}
      </section>
    );
  }
}
