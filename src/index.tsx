import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Expenses from './pages/Expenses';
import Invoice from './pages/Invoice';
import Invoices from './pages/Invoices';
import NewInvoice from './pages/NewInvoice';
import NotFound from './pages/NotFound';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<App />}>
        {/* <Route path="/invoices" element={<Invoices />} /> */}
        <Route path="invoices" element={<Invoices />}>
          <Route index element={<h2 style={{ padding: "1rem" }}>Please select an Invoices</h2>} />
          <Route path=":invoiceId" element={<Invoice />} />
          <Route path="new" element={<NewInvoice />} />
        </Route>
        {/* có thể có "/" hoặc không vì bây giờ  mình có thể dùng relative routing */}
        <Route path="expenses" element={<Expenses />} />
        {/* No other routes match */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

