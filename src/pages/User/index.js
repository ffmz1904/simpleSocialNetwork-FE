import React, {useEffect, useState} from 'react';
import {Container, Image} from "semantic-ui-react";
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

const User = ({
    getUserDataById,
    getAllPost,
    posts
}) => {
    const [userData, setUserData] = useState(null);
    const { id } = useParams();

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
            <Container className="UserPage">
                <div className="information">
                    <Image src={defaultImage} size="medium"/>
                    <div className="user_information">
                        <h2>{userData.name}</h2>
                        <div className="friends">
                            somethink about friends (count or images...)
                        </div>
                    </div>
                </div>
                <PostsList posts={posts} />
            </Container>
        </div>
    );
};

User.propTypes = {
    getUserDataById: PropTypes.func.isRequired,
    getAllPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const actions = {
    getUserDataById,
    getAllPost
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({ post }) => ({
    posts: post
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
