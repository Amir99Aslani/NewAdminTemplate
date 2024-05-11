import React, {useCallback} from 'react';
import {CenterModal} from "react-spring-modal";
import Scrollbars from "react-custom-scrollbars-2";
import {useFileUpload} from "use-file-upload";
import axios from "axios";
import toast from "react-hot-toast";

function UploadImage(props) {

    const [file, selectFile] = useFileUpload();

    const fileUpload = useCallback(async (data) => {
        const loadedTable = [];

        try {
            const response = await axios.post(`/v1/pa/files/image?sort=${props.onUploadType}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': localStorage.getItem("token")
                }
            });

            if (response.status == 201) {
                toast.success(response.data.data.msg);
                props.onSetGetData(response.data.data.file_name);
                props.onSetImageModal(false);
                // const Response = await axios.get(`/v1/pa/mealers`, {
                //         headers: {
                //             'Authorization': localStorage.getItem("token")
                //         }
                //     }
                // );
                // if (Response.status == 200) {
                //     props.onSetGetData(Response.data.data.d);
                //     props.onSetImageModal(false);
                // }

            }

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.errors[0].msg);
                if ((error?.response?.status ?? 0) === 401) {
                    localStorage.removeItem("token");
                    // //console.log(error);
                    setTimeout(() => {
                        window.location = "/";
                    }, 2000);
                }
            }
        }


    }, [])


    return (
        <>
            <CenterModal isOpen={props.onImageModal}
                         overlayProps={{
                             style: {
                                 zIndex: 30
                             }
                         }}
                         onDismiss={() => {
                             props.onSetImageModal(false);
                             if (file != null) {
                                 file.source = undefined;
                             }
                         }}
                         contentProps={{
                             style: {
                                 borderRadius: "10px",
                                 backgroundColor: "#9B8BAE",
                                 boxShadow: "-5px 4px 13px 0px rgba(0, 0, 0, 0.15)"
                             }
                         }}
            >
                <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    style={{minHeight: 350}}>
                    <div className="imageFrame">
                        {(file && file.source != null) ? (
                            <div className="ImageContainer">
                                {file.source && <img src={file.source} alt='preview'/>}
                            </div>
                        ) : (
                            <div className="ImageContainer">
                                {props.imageId ? <img src={`${axios.defaults.baseURL}image/${props.imageId}`}/> :
                                    <p>No file selected</p>}
                            </div>
                        )}
                    </div>
                    <div className="add-img-container" >
                        <button
                            className="add-img"
                            onClick={() => {
                                // Single File Upload accepts only images
                                selectFile({accept: 'image/*'}, ({source, name, size, file}) => {

                                })
                            }}
                        >
                            Click to Upload
                        </button>
                    </div>


                    <button type="button" className="submit" onClick={() => fileUpload(file)}>
                        Add
                    </button>
                </Scrollbars>
            </CenterModal>
        </>
    );
}

export default UploadImage;
