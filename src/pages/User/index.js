import React, {useEffect, useState} from 'react';
import {Button, Container, Icon, Image} from "semantic-ui-react";
import PostsList from "../../components/PostsList";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";
import {getUserDataById, checkAuth} from "../../actions/user";
import {getAllPost} from "../../actions/post";
import Preloader from "../../components/Preloader";
import CreatePostForm from "../../components/CreatePostForm";
import FriendsHandlerBtn from "../../components/FriendsHandlerBtn";
import {FRIENDS_ROUTE, SETTINGS_ROUTE} from "../../utils/routesConstants";
import './styles.scss';

const User = ({
    isAuth,
    user,
    getUserDataById,
    checkAuth,
    getAllPost,
    posts
}) => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [createPostOpen, setCreatePostOpen] = useState(false);
    const isProfile = id === user._id;
    let friendStatus = null;

    if (user && userData && isAuth) {
        if (user.friends.length) {
            friendStatus = user.friends.filter(friend => friend._id === id).shift();
        }

        if (!friendStatus) {
            friendStatus = { status: null, _id: userData._id };
        }
    }

    useEffect(() => {
        getUserDataById(id)
            .then(user => {
                setUserData(user);
            });
        checkAuth();
        getAllPost(id)
    }, [id, checkAuth]);

    if (!userData) {
        return <Preloader />;
    }

    return (
        <div className="page">
            { createPostOpen && <CreatePostForm open={true} close={() => setCreatePostOpen(false)} /> }
            <Container className="UserPage">
                <div className="information">
                    <Image src={process.env.REACT_APP_API_URL + userData.img} size="medium"/>
                    <div className="user_information">
                        <h2>
                            {userData.name}
                            {isProfile &&
                                <div className="profile_actions">
                                    <Button color='twitter' onClick={() => setCreatePostOpen(!createPostOpen)}>
                                        <Icon name="write" />
                                        <span>Create post</span>
                                    </Button>
                                    <Link to={SETTINGS_ROUTE} className="settings"><Icon name="settings" /></Link>
                                </div>
                            }
                        </h2>
                        <div className="friends">
                            <Link to={FRIENDS_ROUTE + `/${userData._id}`} >Friends: { userData.friends.length }</Link>
                            { isAuth && !isProfile &&
                                <FriendsHandlerBtn statusData={friendStatus} />
                            }
                        </div>
                    </div>
                </div>
                <PostsList posts={posts} />
            </Container>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object,
    isAuth: PropTypes.bool.isRequired,
    getUserDataById: PropTypes.func.isRequired,
    checkAuth: PropTypes.func.isRequired,
    getAllPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const actions = {
    getUserDataById,
    getAllPost,
    checkAuth
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ user, post }) => ({
    isAuth: user.isAuth,
    user: user.data,
    posts: post
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
