import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Button } from "@mui/material";
import { AddOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";
import styles from './Chat.module.css';
import ButtonDownloadPage from "../../components/Buttons/ButtonDownloadPage";
import ClientsChats from "../../components/ClientsChats/ClientsChats";
import ChatBody from "../../components/ClientsChats/ChatBody";
import {users} from '../../constants'

export default function Chat() {

  return (
    <>
      <div className="container mt-3">
        <div className="row mb-5">
          <div className="contant d-flex justify-content-between align-items-center">
            <div className="title">
              <h2 className={`${styles.title}`}>Chats </h2>
              <div className="d-flex">
                <h3 className={`${styles.summary}`}>Recent Chats</h3>
                <KeyboardArrowDownOutlined style={{ color: "#707C97" }} />
              </div>
            </div>
            <div className="create-chat">
              <Button variant="contained"
                style={{
                  background: 'linear-gradient(270deg, #0BA996 0.11%, #109384 39.64%, #224A46 99.9%)',
                  borderRadius: '10px',
                  textTransform: 'lowercase',
                  fontSize: "15px",
                  fontWeight: 400,
                  padding: "11px 15px"

                }}
                sx={{
                  "& .MuiButtonBase-root.MuiButton-root": {
                    color: '#fff',
                  },


                }}>
                <AddOutlined sx={{
                  mr: ".5rem"
                }} />
                create new chat
              </Button>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6 col-lg-6">
            <div className={`p-3 mb-3`}>
              <div className={`${styles.search}`}>
                <div className={`input-group p-2 ${styles.searchShadow}`}>
                  <input
                    className="form-control rounded border-0"
                    placeholder="Search"
                    type="search"
                  />
                  <Button style={{
                    color: "#6A6B6E",
                    fontFamily: "Poppins",
                    fontSize: "15.856px",
                    fontWeight: 500,
                    lineHeight: "22.903px",
                  }} type="button" id="search-addon">
                    Messages
                    <KeyboardArrowDownOutlined />
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-3" style={{ height: "400px", overflowY: "auto" }}>
              {users.map((user) => (
                <ClientsChats key={user.id} clientImg={user.image} name={user.name} lastMessage={user.lastMessage} unread={user.unread} />
              ))}

            </div>
          </div>
          <div className="col-lg-6">
            <ChatBody />
          </div>
        </div >
      </div >
    </>

  );
}