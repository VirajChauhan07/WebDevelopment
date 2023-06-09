import React, { Component } from "react";
import styled from "styled-components";
import AdminHome from "./AdminHome";
import UserHome from "./UserHome";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",   
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        
        this.setState({ userData: data.data });
        if (data.data.userType === "user") {
          window.location.href = "./";
        }
        if (data.data === "token expired") {
          alert("Token expired, Please login again!");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
  }
  render() {
    return (
      <Wrapper>
        <div className="container">
          {this.state.userData.userType === "admin" ? (
            <AdminHome />
          ) : (
            <UserHome />
          )}
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    h4 {
      font-size: 2.3rem;
    }
    h5 {
      font-size: 1.9rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;
