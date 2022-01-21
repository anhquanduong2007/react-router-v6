import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>React Router V6</h1>
      <nav style={{ borderBottom: "1px solid", paddingBottom: "1rem" }}>

        {/* <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link> */}

        <Link to="invoices">Invoices</Link> | {" "}
        <Link to="expenses">Expenses</Link>
        {/*  Vì đây là đường link absolute nên khi ấn vào ví dụ như ở đây là "/invoices" thì nó sẽ chạy thẳng tới http://localhost:3000/invoices nên nếu mà mình muốn đổi
        cái đường dẫn để render component kiểu như là  <Route path="/" element={<App />}> thành  <Route path="/home" element={<App />}> thì phải đi sửa lại rất nhiều chỗ
        có đường link absolute thành /home/invoices thì nó mới hoạt động như cũ được nhưng với đường link relative mình có thể linh động hơn kiểu như là nếu chuyển thành đường
        link home như kia và cái đống link này nằm trong đó thì chỉ cần dùng relative link là nó sẽ tự nối không cần sửa*/}
      </nav>
      <Outlet />
      {/* Render ra đường link con nằm trong cái component đó. Ví dụ ở đây là là bên trong thằng
      App có 2 thằng là Invoices và Expenses thì đúng đường link nào thì render ra thằng đó ở ví
      trí mà mình đặt cái Outlet này */}
    </div>
  );
}

export default App;
