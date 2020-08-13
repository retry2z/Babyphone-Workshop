import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import Common from '../../components/common/common';
import Input from '../../components/core/input/input';
import DefinedButton from '../../components/core/button/button';
import Title from '../../components/core/title/title';
import ErrorField from '../../components/core/errorField/errorField';

import userService from '../../services/user-service';
import admin from '../../services/admin';

import Contexts from '../../Contexts';
import { useHistory } from 'react-router-dom';
const { UserContext } = Contexts();

const { storage } = admin();

const ProfileUpdateImage = () => {
    const context = useContext(UserContext);
    const history = useHistory();
    const [imageAsFile, setImageAsFile] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleImageAsFile = (value, event) => {
        const image = event.target.files[0];

        setImageAsFile(image);
        setErrorMessage('');
    }

    const submitHandler = async () => {
        const supportedFiles = ['jpeg', 'gif', 'png', 'apng', 'svg', 'png', 'jpg'];  

        if (imageAsFile === '') {
            setErrorMessage('Please choose a file');
            return
        }

        const fileSize = (imageAsFile.size / 1024) / 1024;
        if (fileSize >= 1) {
            setErrorMessage('File size should not be more than 1MB');
            return
        }

        const fileExtension = imageAsFile.name.split('.').pop();
        if (!supportedFiles.includes(fileExtension)) {
            setErrorMessage('Unsupported file or image type');
            return
        }

        try {
            await storage.ref(`/users/${context.user.uid}`).put(imageAsFile);
            const imageUrl = await storage.ref('users').child(context.user.uid).getDownloadURL();
            const response = await userService.update({ imageUrl });
            context.loadingToggle();

            if (response.isValid) {
                context.loadingToggle();
                history.push('/user/profile/');
                context.login(response.data.data);

            } else {
                context.loadingToggle();
            }

        } catch (e) {
            history.push('/error');
        }
    }

    return (
        <Common>
            < Wrapper >
                <Title title='Profile image' />
                <Box>
                    {!!errorMessage ? <ErrorField message={errorMessage} /> : null}
                    <Input
                        type='file'
                        name='imageUrl'
                        label='File:'
                        onChange={handleImageAsFile}
                    />
                    <DefinedButton title='Upload' action={submitHandler} />
                </Box>
            </Wrapper >
        </Common>
    )
}

const Wrapper = styled.section`
    margin: 1em auto;
    margin-top:3em;
    width:100%;
`;

const Box = styled.section`
    background: rgb(238,238,238,0.62);
    margin: 1em auto;
    padding: 12px;
    padding-top: 48px;
    border-radius: 3px;
    width: 62%;
`;

export default ProfileUpdateImage

