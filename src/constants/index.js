import Dashboard from "../assets/dashboard.svg";
import Orders from "../assets/orders.svg";
import Analytics from "../assets/analytics.svg";
import Chat from "../assets/chat.svg";
import Customers from "../assets/customers.svg";
import Inventory from "../assets/inventory.svg";
import Help from "../assets/help.svg"
import clientImg from '../assets/client.jpeg'

export const pages = [
    { id: 1, path: "/dashboard", name: "Dashboard", icon: Dashboard },
    { id: 2, path: "/Orders", name: "Orders", icon: Orders },
    { id: 3, path: "/analytics", name: "Analytics", icon: Analytics },
    { id: 4, path: "/chat", name: "Chat", icon: Chat },
    { id: 5, path: "/customers", name: "Customers", icon: Customers },
    { id: 6, path: "/help", name: "Help", icon: Help },
    { id: 7, path: "/inventory", name: "Inventory", icon: Inventory }
];

export const orderTableFields = [
    "order id",
    "Date",
    "customer name",
    "location",
    "Items",
    "TOTAL",
    "STATUS",

]

export const ordersTableData = [
    { Orderid: "#9", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "delivered" },
    { Orderid: "#10", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "cancelled" },
    { Orderid: "#11", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "new order" },
    { Orderid: "#12", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "delivered" },
    { Orderid: "#13", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "delivered" },
    { Orderid: "#14", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "new order" },
    { Orderid: "#15", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "delivered" },
    { Orderid: "#16", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "cancelled" },
    { Orderid: "#17", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "delivered" },
    { Orderid: "#18", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "cancelled" },
    { Orderid: "#19", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "new order" },
    { Orderid: "#20", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "delivered" },
    { Orderid: "#80", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "delivered" },
    { Orderid: "#78", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "new order" },
    { Orderid: "#110", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "delivered" },
    { Orderid: "#210", Date: "20oct2023", customername: "asmaa khalaf", location: "mansoura alzaher st", Items: "Vitaferrol B12", total: "$231,01", status: "cancelled" },
]

export const users = [
    { id: 1, name: 'Luy Robin', image: clientImg, lastMessage: `Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). `, unread: 3 },
    { id: 2, name: 'Jared Sunn', image: clientImg, lastMessage: 'Cicero famously orated against his political opponent Lucius Sergius Catilina.', unread: 2 },
    { id: 3, name: 'Nika Jerrardo', image: clientImg, lastMessage: 'hello!', unread: 0 },
    { id: 4, name: 'david Amrosa', image: clientImg, lastMessage: 'Hello!', unread: 0 },

];

