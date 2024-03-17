const Profil = (props) => {
    return (
        <div className='profile'>
            <div>
                <img className='img-photo'
                    src={props.img}
                    alt="User avatar"

                />
                <p>{props.name}</p>
                <p>@{props.tag}</p>
                <p>{props.location}</p>
            </div>

            <ul className='stats-list'>

                <li className='item-stats'>
                    <span>Followers</span>
                    <span>{props.stats.followers}</span>
                </li>
                <li className='item-stats'>
                    <span>Views</span>
                    <span>{props.stats.views}</span>
                </li>
                <li className='item-stats'>
                    <span>Likes</span>
                    <span>{props.stats.likes}</span>
                </li>
            </ul>
        </div>

    )
}

export default Profil;