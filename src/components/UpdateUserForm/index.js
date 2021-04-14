import React, {useState} from 'react';
import {Button, Image, Input} from "semantic-ui-react";
import PropTypes from 'prop-types';
import './styles.scss';

const UpdateUserForm = ({ user, updateProfile, closeForm }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [image, setImage] = useState(null);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const selectFile = e => {
        setImage(e.target.files[0]);
    }

    const updateHandler = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);

        if (newPassword) {
            if (newPassword === confirmPassword) {
                formData.append('password', newPassword);
                formData.append('oldPassword', oldPassword);
            } else {
                //todo error
            }
        }

        if (image) {
            formData.append('img', image);
        }

        updateProfile(formData);
        closeForm();
    }

    return (
        <div className="UpdateUserForm">
            <form>
                <div className="image">
                    <h2>Update image:</h2>
                    <Image src={process.env.REACT_APP_API_URL + user.img} size="medium" />
                    <Input
                        type="file"
                        onChange={selectFile}
                    />
                </div>
                <div className="data">
                    <h2>Update personal data:</h2>
                    <Input
                        placeholder="Name ..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        placeholder="Email ..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="password_data">
                    <h2>Update password:</h2>
                    <Input
                        type="password"
                        placeholder="Old password ..."
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="New password ..."
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Confirm new password ..."
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>
                <Button type="button" color="teal" onClick={updateHandler}>Save changing</Button>
            </form>
        </div>
    );
};

UpdateUserForm.propTypes = {
    user: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired
};

export default UpdateUserForm;
