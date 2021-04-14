import React, {useState} from 'react';
import {Button, Input} from "semantic-ui-react";
import PropTypes from 'prop-types';
import './styles.scss';

const UpdateUserForm = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="UpdateUserForm">
            <form>
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
                <Button type="button" color="teal">Save changing</Button>
            </form>
        </div>
    );
};

UpdateUserForm.propTypes = {
    user: PropTypes.object.isRequired
};

export default UpdateUserForm;
