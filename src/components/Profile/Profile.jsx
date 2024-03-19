import profileStyle from "./Profile.module.css";
const Profile = (props) => {
    return (
        <div className={profileStyle.profile}>
            <div>
                <img className={profileStyle.imgPhoto}
                    src={props.img}
                    alt="User avatar"
                />
                <p>{props.name}</p>
                <p>@{props.tag}</p>
                <p>{props.location}</p>
            </div>

            <ul className={profileStyle.statsList}>

                <li className={profileStyle.itemStats}>
                    <span>Followers</span>
                    <span>{props.stats.followers}</span>
                </li>
                <li className={profileStyle.itemStats}>
                    <span>Views</span>
                    <span>{props.stats.views}</span>
                </li>
                <li className={profileStyle.itemStats}>
                    <span>Likes</span>
                    <span>{props.stats.likes}</span>
                </li>
            </ul>
        </div>

    )
}

export default Profile;