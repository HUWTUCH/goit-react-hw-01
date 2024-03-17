import './App.css'
import Profil from "./components/Profil/profil.jsx";
import userData from "./components/Profil/userData.json";
function App() {
    return (
        <>
          <Profil
              name={userData.username}
              tag={userData.tag}
              location={userData.location}
              img={userData.avatar}
              stats={userData.stats}
          />
        </>
    )
}

export default App
