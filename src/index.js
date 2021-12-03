import { h } from "preact";
import { useState } from "preact/hooks";
import { Modal } from "antd";
import "antd/dist/antd.css";

const { confirm } = Modal;

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
  // confirm({
  //   title: "Hello",
  //   content: "Content",
  //   onOk() {
  //     console.log("OK");
  //   },
  //   onCancel() {
  //     console.log("Cancel");
  //   },
  // });
};
