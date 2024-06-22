import {useEffect, useState} from "react";
import "./ImageUploader.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

const ImageUploader = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState(null);

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const removeImage = () => {
        setSelectedFile(null);
        setPreview(null);
    }

    console.log(selectedFile);

    return <div className="app_image_upload_container">
        <input type='file' onChange={onSelectFile}/>
        <div className={`imageContainer`}>
            {selectedFile && <img src={preview}/>}
            {preview && <FontAwesomeIcon className={`image_close_icon`} onClick={removeImage} icon={faTimes} />}
        </div>
    </div>
}

export default ImageUploader