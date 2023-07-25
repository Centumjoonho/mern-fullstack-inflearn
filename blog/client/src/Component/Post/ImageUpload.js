import { React, useState } from 'react'
import { Form, Image } from 'react-bootstrap'
import axios from 'axios'
import { ThumbNailDiv } from '../../Style/ImageUploadCSS';

function ImageUpload(props) {

    const [previewImage, setPreviewImage] = useState(null);

    // 1. 사용자가 이미지를 업로드 
    // 2. 업로드한 이미지를 받아서 서버에서 저장
    // 3. 저장한 이미지의 경로를 다시 클라이언트에게 전송
    // 4. 경로를 받아서 post model에 저장



    const FileUpload = (e) => {

        const formData = new FormData();

        formData.append("file", e.target.files[0])

        for (const key of formData) console.log(key);

        axios.post('/api/post/image/upload', formData).then((response) => {


            props.setImage(response.data.filePath);

            // props.setFile(e.target.files[0]);

            setPreviewImage(URL.createObjectURL(e.target.files[0]));


        });

    }
    return (
        <div>
            <Form.Control
                type='file'
                className='shadow-none'
                accept='image/*'
                onChange={(e) => { FileUpload(e) }}></Form.Control>
            <ThumbNailDiv>
                {previewImage && <Image src={previewImage} thumbnail />}
            </ThumbNailDiv>
        </div>

    )
}

export default ImageUpload