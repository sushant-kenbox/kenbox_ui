import React, { Fragment, useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
//import ToolkitProvider , { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { ModelBoxDelete } from "./../Model"


const UserHome = () => {

  const [show, setShow] = useState(false);

  const products = [
    {
      "firstname": "Meagan",
      "lastname": "Lang",
      "phonenumber": "(388) 575-4563",
      "city": "Miracletown",
      "state": "Louisiana",
      "country": "Uzbekistan",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Katherine",
      "lastname": "Koelpin",
      "phonenumber": "352.564.0634 x9225",
      "city": "Huelburgh",
      "state": "Arkansas",
      "country": "San Marino",
      "status": 'Inactive',
      "__v": 0
    },
    {
      "firstname": "Rafaela",
      "lastname": "Harber",
      "phonenumber": "1-918-908-3338",
      "city": "West Chazberg",
      "state": "California",
      "country": "Turkmenistan",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Lolita",
      "lastname": "Blick",
      "phonenumber": "648-206-6783 x87158",
      "city": "Stokesmouth",
      "state": "Kentucky",
      "country": "French Guiana",
      "status": 'Inactive',
      "__v": 0
    },
    {
      "firstname": "Erin",
      "lastname": "Gerhold",
      "phonenumber": "612.447.8725 x855",
      "city": "Lake Tyrel",
      "state": "Massachusetts",
      "country": "Rwanda",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Taryn",
      "lastname": "Wehner",
      "phonenumber": "303-920-0901 x4506",
      "city": "West Lessie",
      "state": "Arkansas",
      "country": "Zimbabwe",
      "status": 'Inactive',
      "__v": 0
    },
    {
      "firstname": "Jayne",
      "lastname": "Parisian",
      "phonenumber": "569-976-5532",
      "city": "North Anastacio",
      "state": "Virginia",
      "country": "Slovakia (Slovak Republic)",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Bertha",
      "lastname": "Ernser",
      "phonenumber": "499-597-2452 x079",
      "city": "Jacobiport",
      "state": "Florida",
      "country": "Virgin Islands, U.S.",
      "status": 'Inactive',
      "__v": 0
    },
    {
      "firstname": "Rod",
      "lastname": "Jacobi",
      "phonenumber": "(232) 486-0909",
      "city": "South Lavernchester",
      "state": "Georgia",
      "country": "United States of America",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Jamel",
      "lastname": "Jacobi",
      "phonenumber": "(614) 821-9286 x6435",
      "city": "West Talonberg",
      "state": "Massachusetts",
      "country": "Lesotho",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Tyson",
      "lastname": "Quitzon",
      "phonenumber": "1-328-961-6345 x6591",
      "city": "Waelchishire",
      "state": "Indiana",
      "country": "Peru",
      "status": 'Inactive',
      "__v": 0
    },
    {
      "firstname": "Abbey",
      "lastname": "Monahan",
      "phonenumber": "394-490-8017",
      "city": "Lake Nasir",
      "state": "Michigan",
      "country": "Guernsey",
      "status": 'Inactive',
      "__v": 0
    },
    {
      "firstname": "Tremayne",
      "lastname": "Beahan",
      "phonenumber": "632.396.4034 x466",
      "city": "Holliefurt",
      "state": "Ohio",
      "country": "Gambia",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Amara",
      "lastname": "Kassulke",
      "phonenumber": "(202) 210-2238 x1381",
      "city": "Ruthland",
      "state": "Utah",
      "country": "Tonga",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Brennon",
      "lastname": "Upton",
      "phonenumber": "1-711-930-3714",
      "city": "East Camden",
      "state": "Maryland",
      "country": "Chile",
      "status": 'Inactive',
      "__v": 0
    },
    {
      "firstname": "Ashtyn",
      "lastname": "McClure",
      "phonenumber": "1-900-562-7465",
      "city": "North Demarioburgh",
      "state": "Massachusetts",
      "country": "Togo",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Georgette",
      "lastname": "Hammes",
      "phonenumber": "626-249-9647",
      "city": "Royceshire",
      "state": "Arkansas",
      "country": "Guinea-Bissau",
      "status": 'Inactive',
      "__v": 0
    },
    {
      "firstname": "Heber",
      "lastname": "Maggio",
      "phonenumber": "443.671.4353 x6149",
      "city": "West Winnifred",
      "state": "Delaware",
      "country": "Netherlands",
      "status": 'Inactive',
      "__v": 0
    },
    {
      "firstname": "Hassan",
      "lastname": "Ryan",
      "phonenumber": "(341) 860-4284",
      "city": "Johnsonmouth",
      "state": "South Dakota",
      "country": "United Arab Emirates",
      "status": 'Active',
      "__v": 0
    },
    {
      "firstname": "Shanelle",
      "lastname": "Kautzer",
      "phonenumber": "898-269-0900",
      "city": "New Manuelachester",
      "state": "New Jersey",
      "country": "Norfolk Island",
      "status": 'Inactive',
      "__v": 0
    }

  ]

  const columns = [

    {
      dataField: 'firstname',
      text: 'First Name',
      filter: textFilter()
    },

    {
      dataField: 'lastname',
      text: 'Last Name',
      sort: true,
      filter: textFilter()

    },
    {
      dataField: 'phonenumber',
      text: 'Phone',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'city',
      text: 'City',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'state',
      text: 'State',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'status',
      text: 'Status',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'action',
      text: 'Action',
      sort: false,
      csvExport: false,
      formatter: (cell, row, rowIndex, extraData) => (
        <Fragment>
          <button type="button" className="mr-1  btn btn-primary btn-sm" onClick={(e) => handleView(cell, row, rowIndex, extraData)}><i className="fa fa-eye"></i></button>
          <button type="button" className="mr-1 btn btn-success btn-sm" onClick={(e) => handleEdit(cell, row, rowIndex, extraData)}><i className="fa fa-edit"></i></button>
          <button type="button" className="mr-1 btn btn-danger btn-sm" onClick={(e) => handleDelete(cell, row, rowIndex, extraData)}><i className="fa fa-trash"></i></button>
        </Fragment>
      ),
      // events: {
      //   onClick: (e, column, columnIndex, row, rowIndex) => {
      //   console.log(column);
      // }

    }]


  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };


  const options = {
    page: 1,

    sizePerPageList: [{

      text: '5', value: 5

    }, {

      text: '10', value: 10

    }, {

      text: 'All', value: products.length

    }],

    sizePerPage: 10,

    pageStartIndex: 1,

    paginationSize: 3,

    prePage: 'Prev',

    nextPage: 'Next',

    firstPage: 'First',

    lastPage: 'Last',

    paginationPosition: 'top'

  };




  const handleView = (cell, row, rowIndex, extraData) => {
    console.log('handleView', row, rowIndex)
  }
  const handleEdit = (cell, row, rowIndex, extraData) => {
    console.log('handleEdit', row, rowIndex)
  }
  const handleDelete = (cell, row, rowIndex, extraData) => {
    setShow(true);
    console.log('handleDelete', row, rowIndex)
  }

  const handleCloseModel = () => setShow(false);
  // const handleShowModel = () => setShow(true);



  const MyExportCSV = (props) => {
    const handleExportCsv = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-success float-right mb-2" onClick={handleExportCsv}>Export to CSV</button>
      </div>
    );
  };





  console.log("-----", show)
  return (
    <Fragment>
      <ModelBoxDelete show={show} handleShowModel={handleDelete} handleCloseModel={handleCloseModel} />
      <ToolkitProvider
        keyField="id"
        data={products}
        columns={columns}
        exportCSV={{ onlyExportFiltered: true, exportAll: false, fileName: 'user-list.csv', }}
        search
      >
        {
          props => (
            <div>
              <MyExportCSV {...props.csvProps} />
              <BootstrapTable
                {...props.baseProps}
                striped

                hover

                keyField='firstname'

                data={products}

                columns={columns}

                filter={filterFactory()}

                pagination={paginationFactory(options)}
              />
            </div>
          )
        }
      </ToolkitProvider>




      {/* <BootstrapTable

        striped

        hover

        keyField='firstname'

        data={products}

        columns={columns}

        filter={filterFactory()}

        pagination={paginationFactory(options)}
      /> */}
    </Fragment>

  )
}

export default UserHome;
