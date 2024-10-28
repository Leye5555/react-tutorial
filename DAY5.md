```jsx
    //  State and Lifecycle
// useState Hook: Understanding component-level state.
// State vs. Props: Differences and best practices.
// useEffect Hook: Managing side effects. (Life Cycle)




    // button
    import PropTypes from "prop-types";

    const Button = (props) => {
    return <button>{props.text}</button>;
    };

    export default Button;

    Button.propTypes = {
    text: PropTypes.string,
    };




    // Card

    import { useState, useEffect } from "react";
    import PropTypes from "prop-types";
    import profileImg from "../assets/avatar-jessica.jpeg";
    import profileImg2 from "../assets/profile2.jpg";

    function Card(props) {
    console.log({ props });
    const { name } = props;
    const [profile, setProfile] = useState(profileImg); // state hook

    useEffect(() => { // side effect hook
        console.log("profile changed");
    }, [profile]);

    const changeProfile = () => {
        setProfile(profileImg2);
    };

    return (
        <div className="card">
        <img src={profile} alt="profile" />
        <h3 className="card-title">{name}</h3>
        <small>London, United Kingdom</small>
        <p className="card-description">
            &ldquo;Frontend Developer, Avid Reader&rdquo;.
        </p>
        <ul className="card-socials" type="none">
            <li className="card-socials__items">Github</li>
            <li className="card-socials__items">Frontend Mentors</li>
            <li className="card-socials__items">LinkedIn</li>
            <li className="card-socials__items">X</li>
            <li className="card-socials__items">Instagram</li>
        </ul>
        <button onClick={changeProfile}>Change Profile</button>
        </div>
    );
    }

    export default Card;

    Card.propTypes = {
    name: PropTypes.string,
    };




```
