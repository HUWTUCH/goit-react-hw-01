import './App.css'
import Profil from "../components/Profil/Profil.jsx";
import userData from "../Data/UserData.json";
import FriendList from "../components/FriendList/FriendList.jsx";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory.jsx";
import transactionHistory from "../Data/TransactionHistory.json";
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
