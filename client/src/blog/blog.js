import React from 'react';
import './blog.css';

const RalewayBold = {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 'bolder',
    color: 'black',
    fontSize: '75px'
}

const whitesmoke = {
    backgroundColor: 'whitesmoke'
}

const Blog = () => {
    return (
        <div>
            <title>Blog</title>
            <div class="parallax-container1">
                <img class="logoimage" src={"assets/images/blog.png"} />
            </div>

            <div class="parallax-container" style={whitesmoke}>
                <div class="valign-wrapper h100">
                    <h3 class="overlay center-align" style={RalewayBold}>C O M I N G S O O N . . .</h3>
                </div>
            </div>
        </div>
    );
};
export default Blog;