import './App.css'
import Profil from "../components/Profil/profil.jsx";
import userData from "../data/userData.json";
import FriendList from "../components/friendList/friendList.jsx";
import TransactionHistory from "../components/transactionHistory/transactionHistory.jsx";
import transactionHistory from "../data/transactionHistory.json";
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
            <FriendList  />
            <TransactionHistory
                id={transactionHistory.id}
                type={transactionHistory.type}
                amount={transactionHistory.amount}
                currency={transactionHistory.currency}
            />
        </>
    )
}

export default App
