import React from "react";
import { Form, Input } from "antd";
import Swal from "sweetalert2";
import { useSignupUserMutation } from "../../Redux/api/authApi.js";

import Loading from "../../utils/Loading.jsx";
const CreateUser = ({ setShowModal }) => {
  const [createUser, { isLoading }] = useSignupUserMutation();
  const onFinish = async (data) => {
    try {
      const res = await createUser(data).unwrap();
      if (res?.success) {
        Swal.fire(res?.message, "", "success");
        setShowModal((prev) => !prev);
      }
    } catch (err) {
      Swal.fire(err?.data?.message, "", "error");
    }
  };
  return (
    <div>
      <h5
        style={{
          color: "#54C999",
        }}
      >
        Create User
      </h5>
      <div className="mt-4">
        <Form onFinish={onFinish} layout="vertical" className="row">
          <Form.Item
            className="col-lg-12"
            label="Enter Full Name"
            name="name"
            key="name"
            rules={[
              {
                required: true,
                message: "FullName is required",
              },
            ]}
          >
            <Input placeholder="enter full name" className="py-2" />
          </Form.Item>

          <Form.Item
            className="col-lg-12"
            label="Enter userName"
            name="userName"
            key="userName"
            rules={[
              {
                required: true,
                message: "user name is required",
              },
            ]}
          >
            <Input placeholder="enter user name" className="py-2" />
          </Form.Item>
          <Form.Item
            className="col-lg-12"
            label="Enter Email"
            name="email"
            key="email"
            rules={[
              {
                required: true,
                message: "email is required",
              },
            ]}
          >
            <Input placeholder="enter email" className="py-2" />
          </Form.Item>

          <Form.Item className="d-flex  justify-content-center">
            <button
              type="submit"
              style={{
                backgroundColor: "#54C999",
              }}
              className="nav-btn nav-btn-shadow save-btn my-2"
            >
              {isLoading ? <Loading /> : "Create User"}
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateUser;
