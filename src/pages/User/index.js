import React, {useEffect, useState} from 'react';
import {Button, Container, Icon, Image} from "semantic-ui-react";
import defaultImage from "../../assets/defaultUserImg.png";
import PostsList from "../../components/PostsList";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {getUserDataById} from "../../actions/user";
import {getAllPost} from "../../actions/post";
import Preloader from "../../components/Preloader";
import './styles.scss';
import CreatePostForm from "../../components/CreatePostForm";
import FriendsHandlerBtn from "../../components/FriendsHandlerBtn";

const User = ({
    isAuth,
    user,
    getUserDataById,
    getAllPost,
    posts
}) => {
    const [userData, setUserData] = useState(null);
    const [createPostOpen, setCreatePostOpen] = useState(false);
    const { id } = useParams();
    const isProfile = id === user._id;
    let friendStatus = null;

    if (user && userData && isAuth) {
        friendStatus = user.friends.length
            ? user.friends.filter(friend => friend._id === id).shift()
            : { status: null, _id: userData._id };
    }

    console.log(friendStatus)

    useEffect(() => {
        getUserDataById(id)
            .then(user => {
                setUserData(user);
            });

        getAllPost(id)
    }, []);

    if (!userData) {
        return <Preloader />
    }

    return (
        <div className="page">
            { createPostOpen && <CreatePostForm open={true} close={() => setCreatePostOpen(false)} /> }
            <Container className="UserPage">
                <div className="information">
                    <Image src={defaultImage} size="medium"/>
                    <div className="user_information">
                        <h2>
                            {userData.name}
                            {isProfile &&
                                <Button color='twitter' onClick={() => setCreatePostOpen(!createPostOpen)}>
                                    <Icon name="write" />
                                    <span>Create post</span>
                                </Button>
                            }
                        </h2>
                        <div className="friends">
                            <div>
                                somethink about friends (count or images...)
                            </div>
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
    getAllPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const actions = {
    getUserDataById,
    getAllPost
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ user, post }) => ({
    isAuth: user.isAuth,
    user: user.data,
    posts: post
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
