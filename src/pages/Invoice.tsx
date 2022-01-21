import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { invoices } from '../data/invoices';
// useNavigate = history.push
const Invoice = () => {
    const params = useParams<{ invoiceId: string }>();
    const navigate = useNavigate();
    const invoice = invoices.find((invoice) => (
        invoice.id.toString() === params.invoiceId
    ))
    React.useEffect(() => {
        // Push user to /invoices
        if (!invoice) navigate('..')
        // 2 chấm là về link root và tiến lên 1 cấp
    }, [invoice, navigate])
    return (
        <h2 style={{ padding: '1rem' }}>
            Invoice #{invoice?.id} for {invoice?.name}

        </h2>
    );
};

export default Invoice;