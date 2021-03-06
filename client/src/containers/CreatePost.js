import React, { Component } from "react";

import { Form, Button } from "semantic-ui-react";

import PostService from "../services/PostService";

import { connect } from "react-redux";

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            title: "",
            postImg: "",
            description: "",
            imageUrl: "",
            email: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async handleSubmit() {
        const post = {
            userId: this.props.token,
            name: this.state.name,
            title: this.state.title,
            postImg: this.state.postImg,
            description: this.state.description,
            imageUrl: this.state.imageUrl,
            email: this.state.email
        };
        await PostService.createPost(post);
        this.props.history.push("/find");
    }
    render() {
        if (!this.props.isLoggedOn) {
            alert("Please login before creating a post");
            this.props.history.push("/login");
        }
        return (
            <div className="post-create-container">
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Post Image</label>
                        <input
                            placeholder="Post Image"
                            name="postImg"
                            value={this.state.postImg}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Title</label>
                        <input
                            placeholder="Title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Text</label>
                        <textarea
                            placeholder="Text Body"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Image Url</label>
                        <input
                            placeholder="Image URL"
                            name="imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="E-mail"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Button primary onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {
        isLoggedOn: state.isLoggedOn,
        token: state.token
    };
}

export default connect(mapStatetoProps)(CreatePost);
