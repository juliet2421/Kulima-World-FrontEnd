import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
// data for ProductManager
const ProductManagerData = [
  {
    imgPath: "/path/to/product1.jpg",
    productName: "Product A",
    price: "$50",
    status: "In Stock",
    quantity: 20,
  },
  {
    imgPath: "/path/to/product2.jpg",
    productName: "Product B",
    price: "$70",
    status: "Out of Stock",
    quantity: 0,
  },
  // Add more rows as needed
];

function Manage() {
  const [records, setRecord] = useState(ProductManagerData);

  const handleFilter = (event) => {
    const newData = ProductManagerData.filter((row) => {
      return row.productName
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setRecord(newData);
  };

  const navigate = useNavigate();

  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.productName,
      sortable: true,
      cell: (row) => (
        <div className="text-gray-800 font-medium">{row.productName}</div>
      ),
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      cell: (row) => <div className="text-gray-800">{row.price}</div>,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <div
          className={`text-sm ${
            row.status === "In Stock" ? "text-green-600" : "text-red-600"
          }`}
        >
          {row.status}
        </div>
      ),
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
      cell: (row) => <div className="text-gray-800">{row.quantity}</div>,
    },
    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <div className="flex gap-2 w-32 h-10 px-6 ">
          <button
            className="bg-blue-500 hover:bg-blue-600 w-24 active:bg-blue-700 text-white rounded-md py-4 "
            onClick={() => editProduct(row)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600  active:bg-red-700 text-white rounded-md py-2 px-4"
            onClick={() => deleteProduct(row)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  function editProduct(row) {
    navigate(`/editProduct`, { state: { product: row } });
  }

  function deleteProduct(row) {
    console.log("Deleting product: ", row);
    // Logic for deleting the product can be implemented here
  }

  const goToHandleProduct = () => {
      navigate("/addProduct")
  }
 

  return (
    <div className="flex flex-col max-w-full gap-4  w-11/12 p-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        name="search"
        aria-label="Search"
        className="w-80 px-3 py-2 focus:outline-none placeholder-gray-500 text-black rounded-md border ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        onChange={handleFilter}
      />

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={records}
        fixedHeader
        pagination
        selectableRows
        className="border border-gray-300 rounded-lg shadow-md"
        customStyles={{
          headRow: {
            style: {
              backgroundColor: "rgba(243, 244, 246, 1)", // Light gray
            },
          },
          rows: {
            style: {
              minHeight: "48px", 
              "&:nth-of-type(odd)": {
                backgroundColor: "rgba(249, 250, 251, 1)", // Light gray for odd rows
              },
            },
          },
          pagination: {
            style: {
              backgroundColor: "rgba(243, 244, 246, 1)", // Light gray
            },
          },
        }}
      />
      <button 
          onClick={goToHandleProduct}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Add New Product
      </button>
    </div>
  );
}

export default Manage;
