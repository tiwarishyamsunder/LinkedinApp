import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import ReactQuill from "react-quill";
import "./index.scss";

const ArticleComponent = ({
  modalOpen,
  setModalOpen,
  sendStatus,
  setStatus,
  status,
  isEdit,
  updateStatus,
  setCurrentPost,
}) => {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Modal
        title="Write an Article"
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false);
          setCurrentPost({});
        }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false);
          setCurrentPost({});
        }}
        footer={[
          <Button
            onClick={isEdit ? updateStatus : sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            {isEdit ? "Update" : "Post"}
          </Button>,
        ]}
      >
        <div className="posts-body">
          <ReactQuill
            className="modal-input"
            theme="snow"
            value={status}
            placeholder="Share Something Useful.."
            onChange={setStatus}
          />
        </div>
      </Modal>
    </>
  );
};

export default ArticleComponent;