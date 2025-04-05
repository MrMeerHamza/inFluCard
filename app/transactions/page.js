import "./transactions.css";

const transactions = [
  { id: 1, title: "Cashback", amount: "+ Rs400", time: "13 Oct 2023 | 11:09 AM", color: "green" },
  { id: 2, title: "Sapphire ", amount: "- Rs800", cashback: "+ Rs400", time: "13 Oct 2023 | 11:07 AM", color: "red" },
  { id: 3, title: "Cashback", amount: "+ Rs600", time: "13 Oct 2023 | 11:09 AM", color: "green" },
  { id: 4, title: "Khaadi ", amount: "- Rs1000", cashback: "+ Rs600", time: "13 Oct 2023 | 11:07 AM", color: "red" },
  { id: 5, title: "Cashback", amount: "+ Rs600", time: "13 Oct 2023 | 11:09 AM", color: "green" },
  { id: 6, title: "Khaadi ", amount: "- Rs1000", cashback: "+ Rs600", time: "13 Oct 2023 | 11:07 AM", color: "red" },
  { id: 7, title: "Cashback", amount: "+ Rs600", time: "13 Oct 2023 | 11:09 AM", color: "green" },
  { id: 8, title: "Rivaj ", amount: "- Rs1000", cashback: "+ Rs600", time: "13 Oct 2023 | 11:07 AM", color: "red" },
  { id: 9, title: "Cashback", amount: "+ Rs600", time: "13 Oct 2023 | 11:09 AM", color: "green" },
];

const TransactionsPage = () => {
  return (
    <div className="transactions-container">
      <div className="transactions-content">
        <h2>Transactions</h2>
        <div className="filter-buttons">
          <button className="active">All</button>
          <button>Pending</button>
          <button>Approved</button>
        </div>
        <div className="transactions-list">
          {transactions.map((txn) => (
            <div key={txn.id} className="transaction-item">
              <div className="transaction-info">
                <h3>{txn.title}</h3>
                <p>{txn.time}</p>
              </div>
              <div className={`transaction-amount ${txn.color}`}>{txn.amount}</div>
              {txn.cashback && <p className="cashback">+ {txn.cashback}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
