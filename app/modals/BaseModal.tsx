import { PropsWithChildren } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type BaseModalProps = {
  onClose: () => void;
  visible: boolean;
};

const BaseModal = ({
  onClose,
  children,
  visible,
  ...props
}: PropsWithChildren<BaseModalProps>) => {
  return (
    <Modal
      onRequestClose={onClose}
      visible={visible}
      animationType="fade"
      style={{ padding: 20 }}
      transparent
      {...props}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollBox}
        // onLayout={(event) => setContentHeight(event.nativeEvent.layout.height)}
      >
        {/* Drag handle */}
        {/* <View style={styles.dragHandle} /> */}

        {/* Modal Content */}
        {children}
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  scrollContainer: {
    // paddingBottom: 10,
    // backgroundColor: "blue",
    // justifyContent: '',
    // flex: 1,
  },
  scrollBox: {
    flexGrow: 0,
    backgroundColor: "#1B1E23",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
  },
});

export default BaseModal;
