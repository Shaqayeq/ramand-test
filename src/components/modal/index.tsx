import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { GridDataModel } from "../../contract/grid-contract";
import {
    changeShowModalAction,
    editSelectedItemAction
} from "../../features/grid/grid-slice";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

const ModalPopup = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { showModal, selectedItem } = useSelector((state: RootState) => state.gridReducer);
    const [title, setTitle] = useState(selectedItem?.title || "");

    const closeModal = () => {
        dispatch(changeShowModalAction(false));
    }

    const save = () => {
        const item = { ...selectedItem, title: title } as GridDataModel;
        dispatch(editSelectedItemAction(item));
    }

    return (
        <Modal isOpen={showModal} onClose={closeModal} size="md">
            <ModalOverlay />
            <ModalContent mt="40">
                <ModalHeader>ویرایش کاربر {selectedItem?.userId}</ModalHeader>
                <ModalBody>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <button onClick={save} className="button" style={{ background: "green" }}>
                        ذخیره
                    </button>
                    <button onClick={closeModal} className="button" style={{ background: "red" }}>
                        بستن
                    </button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}
export default ModalPopup;
